// 低密度空间尘埃：一组微小的 Points，沿走廊分布，缓慢上浮。
// 只在场景可见时由引擎推进时间；数量随设备能力调整。

import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  DynamicDrawUsage,
  Points,
  PointsMaterial,
  Color,
} from 'three';
import type { CameraPath } from './createCameraPath';

export interface ParticleField {
  points: Points;
  /** 每帧推进，speed 由引擎按帧间隔换算。 */
  update(delta: number): void;
  dispose(): void;
}

/** 稳定伪随机：同一套照片每次加载得到相同的粒子分布。 */
function hash01(seed: number): number {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

export function createParticles(path: CameraPath, count: number): ParticleField {
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const speeds = new Float32Array(count);

  // 沿整条曲线均匀铺开，再叠加上稳定的小幅扰动；不复制照片，也不挤在一端。
  for (let index = 0; index < count; index += 1) {
    const t = count <= 1 ? 0.45 : index / (count - 1);
    const point = path.curve.getPointAt(Math.min(0.999, Math.max(0, t)));
    const jitter = (seed: number) => hash01(index * 17.3 + seed) - 0.5;
    positions[index * 3] = point.x + jitter(0.7) * 16;
    positions[index * 3 + 1] = point.y + jitter(2.1) * 9;
    positions[index * 3 + 2] = point.z + jitter(5.4) * 6;
    phases[index] = hash01(index * 7.9 + 1.3) * Math.PI * 2;
    speeds[index] = 0.12 + hash01(index * 3.7 + 4.2) * 0.22;
  }

  const geometry = new BufferGeometry();
  const positionAttribute = new BufferAttribute(positions, 3);
  positionAttribute.setUsage(DynamicDrawUsage);
  geometry.setAttribute('position', positionAttribute);

  const material = new PointsMaterial({
    color: new Color('#d8cfbf'),
    size: 0.045,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
    blending: AdditiveBlending,
  });

  const points = new Points(geometry, material);
  points.frustumCulled = false;

  let elapsed = 0;

  return {
    points,
    update(delta: number) {
      elapsed += delta;
      const array = positionAttribute.array as Float32Array;
      for (let index = 0; index < count; index += 1) {
        const base = index * 3 + 1;
        array[base] += speeds[index] * delta * 0.18;
        if (array[base] > 6.5) array[base] = -6.5;
      }
      // 极轻微的呼吸感，避免尘埃像静止斑点
      material.opacity = 0.42 + Math.sin(elapsed * 0.35) * 0.07;
      positionAttribute.needsUpdate = true;
    },
    dispose() {
      geometry.dispose();
      material.dispose();
      points.removeFromParent();
    },
  };
}
