// Three.js 空间引擎：相机、照片、粒子、雾、命中检测与资源释放。
// 只认识 SpatialPhoto 这类纯数据；进度由外部（ScrollTrigger）写入，
// 引擎在 RAF 中读取目标值并做平滑插值。React 不参与逐帧更新。

import {
  Color,
  FogExp2,
  Group,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import type { PhotoFrame } from './createPhotoFrames';
import { createPhotoFrames } from './createPhotoFrames';
import { createCameraPath } from './createCameraPath';
import type { CameraPath } from './createCameraPath';
import { createParticles } from './createParticles';
import type { ParticleField } from './createParticles';
import type { SpatialCameraSample, SpatialPhoto, SpatialQuality } from './spatial.types';

export interface SpatialEngineOptions {
  container: HTMLElement;
  photos: SpatialPhoto[];
  quality: SpatialQuality;
  onSelect: (photo: SpatialPhoto) => void;
  onHover: (photo: SpatialPhoto | null) => void;
  onReady?: () => void;
  onFrame?: (activeIndex: number) => void;
}

const QUALITY_PRESETS: Record<SpatialQuality, { particles: number; maxPixelRatio: number; frames: number }> = {
  high: { particles: 320, maxPixelRatio: 1.5, frames: 24 },
  medium: { particles: 170, maxPixelRatio: 1.25, frames: 16 },
  low: { particles: 80, maxPixelRatio: 1, frames: 10 },
};

export class SpatialSceneEngine {
  private container: HTMLElement;
  private renderer: WebGLRenderer;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private root: Group;
  private frames: PhotoFrame[] = [];
  private particleField: ParticleField | null = null;
  private cameraPath: CameraPath | null = null;
  private raycaster = new Raycaster();
  private pointer = new Vector2(-2, -2);
  private sample: SpatialCameraSample = {
    position: { x: 0, y: 0, z: 0 },
    target: { x: 0, y: 0, z: 0 },
  };
  private targetProgress = 0;
  private smoothProgress = 0;
  private raf = 0;
  private lastTime = 0;
  private visible = true;
  private disposed = false;
  private callbacks: Pick<SpatialEngineOptions, 'onSelect' | 'onHover' | 'onReady' | 'onFrame'>;
  private activeIndex = -1;
  private frameTilt: number[] = [];
  private facing = new Vector3();
  private hoverIndex = -1;
  private frameOpacity: number[] = [];
  private loaded = new Set<number>();
  private failed = new Set<number>();
  private resizeObserver: ResizeObserver | null = null;
  private pointerDown: { x: number; y: number; time: number } | null = null;
  private handlePointerMove: (event: PointerEvent) => void;
  private handlePointerLeave: () => void;
  private handlePointerDown: (event: PointerEvent) => void;
  private handlePointerUp: (event: PointerEvent) => void;

  constructor(options: SpatialEngineOptions) {
    this.container = options.container;
    this.callbacks = options;
    const preset = QUALITY_PRESETS[options.quality];
    const photos = options.photos.slice(0, preset.frames);

    this.renderer = new WebGLRenderer({
      antialias: options.quality === 'high',
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, preset.maxPixelRatio));
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.domElement.setAttribute('aria-hidden', 'true');
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.touchAction = 'pan-y';
    this.container.appendChild(this.renderer.domElement);

    this.scene = new Scene();
    this.scene.fog = new FogExp2(new Color('#090b10').getHex(), 0.016);

    this.camera = new PerspectiveCamera(52, 1, 0.1, 240);
    this.root = new Group();
    this.scene.add(this.root);

    this.cameraPath = createCameraPath(photos.length);
    this.frames = createPhotoFrames(photos, this.cameraPath, {
      onTextureReady: (frame) => {
        this.loaded.add(frame.index);
      },
      onTextureError: (frame) => {
        this.loaded.add(frame.index);
        this.failed.add(frame.index);
      },
    });
    this.frameOpacity = this.frames.map(() => 0);
    this.frameTilt = this.frames.map((_, index) => (index % 2 === 0 ? -0.06 : 0.06));
    this.frames.forEach((frame) => this.root.add(frame.group));

    if (photos.length > 0) {
      this.particleField = createParticles(this.cameraPath, preset.particles);
      this.scene.add(this.particleField.points);
    }

    this.handlePointerMove = (event: PointerEvent) => {
      const rect = this.renderer.domElement.getBoundingClientRect();
      this.pointer.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1,
      );
    };
    this.handlePointerLeave = () => {
      this.pointer.set(-2, -2);
      this.setHover(-1);
    };
    this.handlePointerDown = (event: PointerEvent) => {
      this.pointerDown = { x: event.clientX, y: event.clientY, time: performance.now() };
    };
    this.handlePointerUp = (event: PointerEvent) => {
      const start = this.pointerDown;
      this.pointerDown = null;
      if (!start) return;
      const moved = Math.hypot(event.clientX - start.x, event.clientY - start.y);
      if (moved > 8 || performance.now() - start.time > 650) return;
      const frame = this.pick();
      if (frame) this.callbacks.onSelect(frame.photo);
    };

    const canvas = this.renderer.domElement;
    canvas.addEventListener('pointermove', this.handlePointerMove, { passive: true });
    canvas.addEventListener('pointerleave', this.handlePointerLeave, { passive: true });
    canvas.addEventListener('pointerdown', this.handlePointerDown, { passive: true });
    canvas.addEventListener('pointerup', this.handlePointerUp, { passive: true });

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
    this.resize();

    // 初始镜头落在轨迹起点
    this.updateCamera(0);
    this.callbacks.onReady?.();
    this.lastTime = performance.now();
    this.raf = requestAnimationFrame(this.tick);
    if (import.meta.env.DEV) {
      (window as unknown as Record<string, unknown>).__spatialEngine = this;
    }
  }

  /** 调试用：暴露相机、照片世界坐标与屏幕投影。 */
  debugSnapshot() {
    const camera = this.camera;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    return {
      camera: [camera.position.x, camera.position.y, camera.position.z],
      progress: this.smoothProgress,
      frames: this.frames.map((frame) => {
        const ndc = frame.group.position.clone().project(camera);
        return {
          index: frame.index,
          position: [frame.group.position.x, frame.group.position.y, frame.group.position.z],
          screen: [Math.round((ndc.x * 0.5 + 0.5) * width), Math.round((-ndc.y * 0.5 + 0.5) * height)],
          ndcZ: Number(ndc.z.toFixed(3)),
          opacity: Number(this.frameOpacity[frame.index].toFixed(2)),
        };
      }),
    };
  }

  setProgress(progress: number) {
    this.targetProgress = Math.min(1, Math.max(0, progress));
  }

  setVisible(visible: boolean) {
    if (this.visible === visible) return;
    this.visible = visible;
    if (this.disposed) return;
    if (visible && !this.raf) {
      this.lastTime = performance.now();
      this.raf = requestAnimationFrame(this.tick);
    } else if (!visible && this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = 0;
    }
  }

  resize() {
    if (this.disposed) return;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    // 窄屏时略收视角，让照片在竖向视口里更完整
    this.camera.fov = width / height < 0.85 ? 62 : 52;
    this.camera.updateProjectionMatrix();
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.raf = 0;

    const canvas = this.renderer.domElement;
    canvas.removeEventListener('pointermove', this.handlePointerMove);
    canvas.removeEventListener('pointerleave', this.handlePointerLeave);
    canvas.removeEventListener('pointerdown', this.handlePointerDown);
    canvas.removeEventListener('pointerup', this.handlePointerUp);
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;

    this.frames.forEach((frame) => frame.dispose());
    this.frames = [];
    this.particleField?.dispose();
    this.particleField = null;

    this.scene.clear();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    canvas.remove();
  }

  private pick(): PhotoFrame | null {
    if (this.frames.length === 0) return null;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const meshes = this.frames.filter((frame) => !frame.disposed && this.frameOpacity[frame.index] > 0.15);
    const hits = this.raycaster.intersectObjects(
      meshes.map((frame) => frame.hitMesh),
      false,
    );
    if (hits.length === 0) return null;
    const mesh = hits[0].object;
    const index = mesh.userData.photoIndex as number | undefined;
    return index === undefined ? null : this.frames[index] ?? null;
  }

  private setHover(index: number) {
    if (this.hoverIndex === index) return;
    this.hoverIndex = index;
    this.renderer.domElement.style.cursor = index >= 0 ? 'pointer' : 'default';
    this.callbacks.onHover(index >= 0 ? this.frames[index]?.photo ?? null : null);
  }

  private updateCamera(progress: number) {
    if (!this.cameraPath) return;
    this.cameraPath.sample(progress, this.sample);
    const { position, target } = this.sample;
    this.camera.position.set(position.x, position.y, position.z);
    this.camera.lookAt(target.x, target.y, target.z);
  }

  private tick = (time: number) => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.tick);

    const delta = Math.min(0.05, (time - this.lastTime) / 1000);
    this.lastTime = time;

    // 平滑推进：scrub 给的是离散目标值，插值后镜头不会抖动
    this.smoothProgress += (this.targetProgress - this.smoothProgress) * Math.min(1, delta * 6);
    this.updateCamera(this.smoothProgress);

    const count = this.frames.length;
    let active = 0;
    for (let index = 0; index < count; index += 1) {
      const frame = this.frames[index];
      if (frame.disposed) continue;
      const focus = frame.focusAt;
      if (this.smoothProgress >= focus - 0.03) active = index;

      // 焦点附近的照片提亮；远离镜头的照片降低存在感
      const distance = Math.abs(this.smoothProgress - focus);
      const focusBoost = Math.max(0, 1 - distance / 0.18);
      const base = this.failed.has(index) ? 0.35 : this.loaded.has(index) ? frame.baseOpacity : 0.2;
      const targetOpacity = base * (0.62 + focusBoost * 0.38);
      this.frameOpacity[index] += (targetOpacity - this.frameOpacity[index]) * Math.min(1, delta * 4);
      frame.setOpacity(this.frameOpacity[index]);

      if (focusBoost > 0.55) frame.requestHighRes();

      // 画框始终面向镜头（保留一点侧斜），保证照片在穿行时清晰可读
      this.facing.copy(this.camera.position);
      frame.group.lookAt(this.facing);
      frame.group.rotation.y += this.frameTilt[index] ?? 0;

      // 焦点经过时轻微向前探出，形成短暂的视觉停留
      const emphasis = 1 + focusBoost * 0.06;
      frame.group.scale.set(emphasis, emphasis, emphasis);
    }

    if (active !== this.activeIndex) {
      this.activeIndex = active;
      this.callbacks.onFrame?.(active);
    }

    // 悬停：只在指针在画布内时检测，桌面端才会设置 hover
    if (this.pointer.x > -1.5) {
      const frame = this.pick();
      this.setHover(frame ? frame.index : -1);
    }

    this.particleField?.update(delta);
    this.renderer.render(this.scene, this.camera);
  };
}
