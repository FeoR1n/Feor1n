// 空间场景的纯数据类型：Three.js 引擎只认识这些字段，不接触业务 API。

export interface SpatialPhoto {
  id: string;
  title: string;
  imageUrl: string;
  thumbnailUrl?: string;
  dateLabel?: string;
  href?: string;
  /** 原始宽高比（宽 / 高）。缺省时按 4:3 处理。 */
  aspect?: number;
}

export interface SpatialCameraSample {
  position: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
}

export type SpatialQuality = 'high' | 'medium' | 'low';
