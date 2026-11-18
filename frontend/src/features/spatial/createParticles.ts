// 低密度空间尘埃：一组微小的 Points，沿走廊分布，缓慢上浮。
// 只在场景可见时由引擎推进时间；数量随设备能力调整。

import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
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

export function createParticles(path: CameraPath, count: number): ParticleField {
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const speeds = new Float32Array(count);

  // 沿曲线铺开整段走廊：留出头发丝般的稀疏，不会盖住照片。
  const spans = Math.max(1, Math.ceil(count / 24));
  for (let index = 0; index < count; index += 1) {
    const span = Math.floor(index / spans) / spans;
    const point = path.curve.getPointAt(Math.min(0.999, span + Math.random() * 0.02));
    positions[index * 3] = point.x + (Math.random() - 0.5) * 16;
    positions[index * 3 + 1] = point.y + (Math.random() - 0.5) * 9;
    positions[index * 3 + 2] = point.z + (Math.random() - 0.5) * 6;
    phases[index] = Math.random() * Math.PI * 2;
    speeds[index] = 0.12 + Math.random() * 0.22;
  }

  const geometry = new BufferGeometry();
  const positionAttribute = new BufferAttribute(positions, 3);
  positionAttribute.setUsage(35048); // DynamicDrawUsage
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
