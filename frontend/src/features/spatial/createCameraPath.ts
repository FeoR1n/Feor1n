// 相机路径：沿一条平滑三维曲线前进，并在每一帧给出朝向目标点。
// 所有几何只在创建时分配一次；采样复用同一个结果对象，避免滚动时逐帧产生垃圾。

import { CatmullRomCurve3, Vector3 } from 'three';
import type { SpatialCameraSample } from './spatial.types';

export interface CameraPath {
  curve: CatmullRomCurve3;
  /** 按 0–1 进度采样相机位置与注视点，结果写入可复用的 sample。 */
  sample(progress: number, sample: SpatialCameraSample): SpatialCameraSample;
  /** 曲线总长度，用于把照片挂在曲线参数上。 */
  length: number;
}

/**
 * 生成镜头轨迹。photoCount 决定走廊长度：照片越多，镜头走得越远。
 * 曲线带轻微 S 形横向漂移与高度起伏，避免机械的直线推进。
 */
export function createCameraPath(photoCount: number): CameraPath {
  // 照片越多，走廊越长；每张照片大约占 4.6 个单位的穿行距离。
  const segments = Math.max(4, photoCount + 1);
  const step = 7.5;
  const points: Vector3[] = [];

  for (let index = 0; index < segments; index += 1) {
    const t = index / (segments - 1);
    const z = 4 - index * step;
    // 低频正弦漂移：整条走廊缓慢左右摆动，幅度限定在 ±1.9 个单位内
    const x = Math.sin(t * Math.PI * 1.6) * 1.9 + Math.sin(t * Math.PI * 0.6) * 0.6;
    const y = Math.cos(t * Math.PI * 1.1) * 0.55;
    points.push(new Vector3(x, y, z));
  }

  const curve = new CatmullRomCurve3(points, false, 'catmullrom', 0.4);
  curve.updateArcLengths();
  const length = curve.getLength();

  const position = new Vector3();
  const ahead = new Vector3();
  // 注视点固定在相机前方约 14 个单位，而不是紧贴曲线切线：
  // 这样画面里能看到前方两侧的照片，而不是只盯着脚下的路。
  const lookAhead = Math.min(0.4, 14 / Math.max(1, length));

  return {
    curve,
    length,
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
      return sample;
    },
  };
}
