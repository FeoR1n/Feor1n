// 相机路径：沿一条平滑三维曲线前进，并在每一帧给出朝向目标点与轻微侧倾。
// 所有几何只在创建时分配一次；采样复用同一个结果对象，避免滚动时逐帧产生垃圾。
//
// 另外提供一条「驻留映射」：原始滚动进度经过一张预先算好的查表后，
// 镜头在每张照片的焦点附近自动放慢，形成「疏—密—停顿」的节奏；
// 查表在创建时一次生成，运行时只做线性插值。

import { CatmullRomCurve3, Vector3 } from 'three';
import type { SpatialCameraSample } from './spatial.types';

export interface CameraPath {
  curve: CatmullRomCurve3;
  /** 按 0–1 进度采样相机位置、注视点与侧倾（弧度）。 */
  sample(progress: number, sample: SpatialCameraSample): SpatialCameraSample;
  /** 把原始滚动进度映射为带驻留的镜头进度。 */
  warp(raw: number): number;
  /** 曲线总长度，用于把照片挂在曲线参数上。 */
  length: number;
}

/** 每张照片在镜头推进中的焦点位置：创建照片与生成驻留曲线共用同一公式。 */
export function focusProgressFor(index: number, count: number): number {
  if (count <= 1) return 0.45;
  return 0.12 + (index / (count - 1)) * 0.66;
}

const WARP_STEPS = 256;

/**
 * 生成驻留映射表：速度在每张照片焦点附近降到 ~45%，
 * 离开焦点后恢复，端头保持平滑进出。
 */
function buildDwellLut(count: number): Float32Array {
  const focuses: number[] = [];
  for (let index = 0; index < count; index += 1) focuses.push(focusProgressFor(index, count));

  const speed = (progress: number) => {
    let value = 1;
    for (const focus of focuses) {
      const d = (progress - focus) / 0.055;
      value -= 0.55 * Math.exp(-d * d);
    }
    // 起点与终点稍慢，镜头进出都不突兀
    value *= 0.86 + 0.14 * Math.min(1, progress / 0.08);
    value *= 0.86 + 0.14 * Math.min(1, (1 - progress) / 0.08);
    return Math.max(0.3, value);
  };

  // 先积分得到累计「时间」，再归一化回 0–1 的镜头进度
  const cumulative = new Float32Array(WARP_STEPS + 1);
  let total = 0;
  let prev = speed(0);
  cumulative[0] = 0;
  for (let i = 1; i <= WARP_STEPS; i += 1) {
    const p = i / WARP_STEPS;
    const s = speed(p);
    total += ((s + prev) / 2) * (1 / WARP_STEPS);
    cumulative[i] = total;
    prev = s;
  }

  const lut = new Float32Array(WARP_STEPS + 1);
  for (let i = 0; i <= WARP_STEPS; i += 1) {
    lut[i] = total > 0 ? cumulative[i] / total : i / WARP_STEPS;
  }
  return lut;
}

/**
 * 生成镜头轨迹。photoCount 决定走廊长度：照片越多，镜头走得越远。
 * 曲线带轻微 S 形横向漂移与高度起伏，避免机械的直线推进。
 */
export function createCameraPath(photoCount: number): CameraPath {
  // 照片越多，走廊越长；每张照片大约占 7.5 个单位的穿行距离。
  const segments = Math.max(4, photoCount + 1);
  const step = 7.5;
  const points: Vector3[] = [];

  for (let index = 0; index < segments; index += 1) {
    const t = index / (segments - 1);
    const z = 4 - index * step;
    // 低频正弦漂移，叠加一次局部转向：弧线而非圆柱螺旋
    const x = Math.sin(t * Math.PI * 1.6) * 1.9 + Math.sin(t * Math.PI * 0.6) * 0.6;
    const y = Math.cos(t * Math.PI * 1.1) * 0.55 + Math.sin(t * Math.PI * 2.4) * 0.18;
    points.push(new Vector3(x, y, z));
  }

  const curve = new CatmullRomCurve3(points, false, 'catmullrom', 0.4);
  curve.updateArcLengths();
  const length = curve.getLength();
  const lut = buildDwellLut(Math.max(1, photoCount));

  const position = new Vector3();
  const ahead = new Vector3();
  // 注视点固定在相机前方约 14 个单位，而不是紧贴曲线切线：
  // 这样画面里能看到前方两侧的照片，而不是只盯着脚下的路。
  const lookAhead = Math.min(0.4, 14 / Math.max(1, length));

  return {
    curve,
    length,
    warp(raw: number) {
      const p = Math.min(1, Math.max(0, raw));
      const scaled = p * WARP_STEPS;
      const low = Math.floor(scaled);
      const high = Math.min(WARP_STEPS, low + 1);
      const f = scaled - low;
      return lut[low] * (1 - f) + lut[high] * f;
    },
    sample(progress: number, sample: SpatialCameraSample) {
      const t = Math.min(0.999, Math.max(0, progress));
      curve.getPointAt(t, position);
      curve.getPointAt(Math.min(1, t + lookAhead), ahead);
      ahead.y += 0.15;

      sample.position.x = position.x;
      sample.position.y = position.y;
      sample.position.z = position.z;
      sample.target.x = ahead.x;
      sample.target.y = ahead.y;
      sample.target.z = ahead.z;
      // 侧倾：随曲线横向位移与缓慢正弦变化，最大约 1.6°，不产生眩晕
      sample.roll = Math.sin(t * Math.PI * 2.2) * 0.02 + (ahead.x - position.x) * 0.012;
      return sample;
    },
  };
}
