// 照片画框：把业务数据映射成空间节点。
// 每张照片挂在镜头轨迹的某个位置，向轨迹方向倾斜，略微错开左右与高度，
// 形成有节奏的走廊。所有几何、材质只创建一次；外部只读取 position/rotation。

import {
  CanvasTexture,
  Color,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  SRGBColorSpace,
  ClampToEdgeWrapping,
  LinearFilter,
  Texture,
  TextureLoader,
  Vector3,
} from 'three';
import { focusProgressFor } from './createCameraPath';
import type { CameraPath } from './createCameraPath';
import type { SpatialPhoto } from './spatial.types';

const loader = new TextureLoader();

export interface PhotoFrame {
  index: number;
  photo: SpatialPhoto;
  group: Group;
  /** 命中检测目标（照片本体）。 */
  hitMesh: Mesh;
  /** 在镜头推进中的焦点位置（0–1）。 */
  focusAt: number;
  width: number;
  height: number;
  /** 远景/近景的基准透明度，供引擎按距离微调。 */
  baseOpacity: number;
  disposed: boolean;
  /** 同时设置照片与背板的透明度：photo 是 0–1，背板自动按比例跟随。 */
  setOpacity(photo: number): void;
  /** 焦点临近时把缩略图替换为原图；每帧只调用一次，已升级则直接返回。 */
  requestHighRes(): void;
  /** 镜头接近时才请求缩略图，避免一次上传整条走廊的纹理。 */
  requestThumbnail(): void;
  dispose(): void;
}

interface FrameCallbacks {
  /** 纹理就绪（用于渐进淡入）。 */
  onTextureReady?: (frame: PhotoFrame) => void;
  onTextureError?: (frame: PhotoFrame) => void;
}

// 稳定伪随机：同一张照片在任何一次构建里都得到相同的位置和倾斜。
function hash01(seed: number): number {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

/**
 * 每张照片挂在镜头稍前方的一侧：镜头走到焦点时，照片正落在画面侧边。
 * 序号按 5 张一组形成节奏：三张中景主照片 + 一张近景（更大、更贴近轨迹）
 * + 一张远景（更小、更靠外），避免整条走廊均匀等距。
 */
function framePlacement(index: number, count: number) {
  const rhythm = index % 5;
  const layer = rhythm === 3 ? 'near' : rhythm === 4 ? 'far' : 'mid';
  const side = index % 2 === 0 ? 1 : -1;

  // 横向偏移：中景贴着视野侧边，近景更靠内（掠过时占大画面），远景更靠外
  const lateralBase = layer === 'near' ? 1.35 : layer === 'far' ? 2.9 : 2.1;
  const lateral = lateralBase + hash01(index * 3.1 + 0.7) * (layer === 'far' ? 1.2 : 0.9);
  const heightRange = layer === 'far' ? 2.6 : 1.9;
  const height = (hash01(index * 5.7 + 2.3) - 0.5) * heightRange;
  const tilt = (hash01(index * 9.3 + 1.9) - 0.5) * 0.1;
  const yaw = (hash01(index * 1.7 + 4.1) - 0.5) * 0.2;

  // 尺寸：近景 1.25×，远景 0.72×，中景保持基准
  const layerScale = layer === 'near' ? 1.25 : layer === 'far' ? 0.72 : 1;
  const scale = (0.92 + hash01(index * 2.9 + 0.3) * 0.34) * layerScale;
  const aspect = index % 4 === 2 ? 1.24 : index % 3 === 1 ? 1 : 0.78;
  const focusAt = focusProgressFor(index, count);

  return {
    side,
    lateral,
    height,
    tilt,
    yaw,
    focusAt,
    // 照片挂在焦点稍前方，穿过时需要一点时间；近景更贴近镜头
    forward: layer === 'near' ? 3.4 : 5.0,
    frameWidth: 4.0 * scale * Math.min(1.26, aspect),
    frameHeight: 4.0 * scale,
    // 远景本身压暗，由引擎再按焦点提亮
    baseOpacity: layer === 'far' ? 0.72 : 1,
  };
}

/** 根据贴图真实比例计算 cover 采样，避免照片被拉伸。 */
function applyCoverUV(texture: Texture, planeAspect: number) {
  const image = texture.image as { width?: number; height?: number } | undefined;
  if (!image?.width || !image?.height) return;
  const textureAspect = image.width / image.height;
  texture.wrapS = texture.wrapT = ClampToEdgeWrapping;
  if (textureAspect > planeAspect) {
    const repeat = planeAspect / textureAspect;
    texture.repeat.set(repeat, 1);
    texture.offset.set((1 - repeat) / 2, 0);
  } else {
    const repeat = textureAspect / planeAspect;
    texture.repeat.set(1, repeat);
    texture.offset.set(0, (1 - repeat) / 2);
  }
  texture.needsUpdate = true;
}

/** 尚未加载完成时的暖灰占位纹理（1×1 渐变在材质上直接取色即可）。 */
function createPlaceholderTexture(): Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 4;
  canvas.height = 4;
  const context = canvas.getContext('2d');
  if (context) {
    const gradient = context.createLinearGradient(0, 0, 4, 4);
    gradient.addColorStop(0, '#2b303a');
    gradient.addColorStop(1, '#40444d');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 4, 4);
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = LinearFilter;
  return texture;
}

/** 焦点照片升级为原图；失败时保留缩略图，不打断场景。 */
function loadHighRes(
  url: string,
  material: MeshBasicMaterial,
  planeAspect: number,
  isDisposed: () => boolean,
) {
  loader.load(
    url,
    (texture) => {
      if (isDisposed()) {
        texture.dispose();
        return;
      }
      texture.colorSpace = SRGBColorSpace;
      texture.anisotropy = 4;
      texture.generateMipmaps = false;
      texture.minFilter = LinearFilter;
      applyCoverUV(texture, planeAspect);
      const previous = material.map;
      material.map = texture;
      material.needsUpdate = true;
      if (previous) previous.dispose();
    },
    undefined,
    () => {
      /* 原图失败：继续使用缩略图 */
    },
  );
}

export function createPhotoFrames(
  photos: SpatialPhoto[],
  path: CameraPath,
  callbacks: FrameCallbacks = {},
): PhotoFrame[] {
  const count = photos.length;
  const point = new Vector3();
  const tangent = new Vector3();
  const lateralAxis = new Vector3();
  const up = new Vector3(0, 1, 0);
  const lookTarget = new Vector3();
  const frames: PhotoFrame[] = [];

  photos.forEach((photo, index) => {
    const placeholder = createPlaceholderTexture();
    const placement = framePlacement(index, count);
    const frameWidth = placement.frameWidth;
    const frameHeight = placement.frameHeight;
    const t = placement.focusAt;

    path.curve.getPointAt(t, point);
    path.curve.getTangentAt(t, tangent).normalize();
    lateralAxis.crossVectors(up, tangent).normalize();

    // 只挂横向偏移，不沿切线推进：镜头从轨迹正中穿过，照片在两侧铺开
    const group = new Group();
    group.position
      .copy(point)
      .addScaledVector(lateralAxis, placement.lateral * placement.side)
      .addScaledVector(up, placement.height)
      .addScaledVector(tangent, placement.forward);

    // 初始朝向焦点处的镜头位置；引擎每帧会让画框轻微转向镜头（billboard）。
    path.curve.getPointAt(t, lookTarget);
    lookTarget.y = group.position.y - placement.height * 0.3;
    group.lookAt(lookTarget);
    group.rotation.y += placement.yaw;
    group.rotation.z += placement.tilt;

    const geometry = new PlaneGeometry(frameWidth, frameHeight);
    const material = new MeshBasicMaterial({
      map: placeholder,
      transparent: true,
      opacity: 0,
      side: DoubleSide,
      toneMapped: false,
    });

    const hitMesh = new Mesh(geometry, material);
    hitMesh.userData.photoIndex = index;
    group.add(hitMesh);

    // 背板：照片后一层暖纸色的细边，模拟实体相纸
    const backingGeometry = new PlaneGeometry(frameWidth + 0.07, frameHeight + 0.07);
    const backingMaterial = new MeshBasicMaterial({
      color: new Color('#ded7c8'),
      transparent: true,
      opacity: 0,
      side: DoubleSide,
      toneMapped: false,
    });
    const backing = new Mesh(backingGeometry, backingMaterial);
    backing.position.z = -0.012;
    group.add(backing);

    let upgraded = false;
    let thumbnailRequested = false;

    const loadThumbnail = () => {
      if (frame.disposed || thumbnailRequested) return;
      thumbnailRequested = true;
      loader.load(
        photo.thumbnailUrl || photo.imageUrl,
        (texture) => {
          if (frame.disposed) {
            texture.dispose();
            return;
          }
          if (upgraded) {
            texture.dispose();
            callbacks.onTextureReady?.(frame);
            return;
          }
          texture.colorSpace = SRGBColorSpace;
          texture.anisotropy = 4;
          texture.generateMipmaps = false;
          texture.minFilter = LinearFilter;
          applyCoverUV(texture, planeAspect);
          const previous = material.map;
          material.map = texture;
          material.needsUpdate = true;
          if (previous && previous !== texture) previous.dispose();
          callbacks.onTextureReady?.(frame);
        },
        undefined,
        () => {
          if (frame.disposed) return;
          // 加载失败：保留占位底，并标记出来，供引擎降饱和处理
          material.userData.failed = true;
          material.opacity = 0.35;
          backingMaterial.opacity = 0.25;
          callbacks.onTextureError?.(frame);
        },
      );
    };

    const frame: PhotoFrame = {
      index,
      photo,
      group,
      hitMesh,
      focusAt: placement.focusAt,
      width: frameWidth,
      height: frameHeight,
      baseOpacity: placement.baseOpacity,
      disposed: false,
      setOpacity(photo: number) {
        material.opacity = photo;
        backingMaterial.opacity = Math.min(0.85, photo * 0.9);
      },
      requestHighRes() {
        if (frame.disposed || upgraded) return;
        if (!photo.imageUrl || photo.imageUrl === photo.thumbnailUrl) return;
        upgraded = true;
        loadHighRes(photo.imageUrl, material, planeAspect, () => frame.disposed);
      },
      requestThumbnail: loadThumbnail,
      dispose() {
        if (frame.disposed) return;
        frame.disposed = true;
        geometry.dispose();
        backingGeometry.dispose();
        const map = material.map;
        material.dispose();
        backingMaterial.dispose();
        if (map) map.dispose();
        else placeholder.dispose();
        group.removeFromParent();
      },
    };
    frames.push(frame);

    const planeAspect = frameWidth / frameHeight;
  });

  return frames;
}
