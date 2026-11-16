/**
 * 转场场景共用的几何层：所有尺寸都从「当前视口」实时求值，
 * 函数式取值交给 GSAP，ScrollTrigger 刷新时会重新调用，resize 后无需重建时间轴。
 * 这里不依赖 GSAP，纯计算。
 */

export type FrameState = {
  width: number;
  height: number;
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  opacity: number;
};

export const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export function metrics() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const mobile = w < 768;
  const tablet = w >= 768 && w < 1024;
  const cardW = mobile
    ? clamp(w * 0.56, 168, 236)
    : tablet
      ? clamp(w * 0.27, 190, 252)
      : clamp(w * 0.235, 250, 356);
  return {
    w,
    h,
    mobile,
    tablet,
    cardW,
    cardH: cardW / 0.74,
    farW: cardW * 0.66,
    farH: (cardW / 0.74) * 0.66,
    side: mobile ? 0 : clamp(w * 0.29, 210, 420),
  };
}

/** 帧的布局锚点在视口左上角，x/y 始终是「尺寸算出的居中量 + 偏移」。 */
export const place = (
  width: number,
  height: number,
  offsetX: number,
  offsetY: number,
  rest: Omit<FrameState, 'width' | 'height' | 'x' | 'y'>,
): FrameState => {
  const m = metrics();
  return {
    width,
    height,
    x: (m.w - width) / 2 + offsetX,
    y: (m.h - height) / 2 + offsetY,
    ...rest,
  };
};

export type TweenVars = Record<string, number | (() => number)>;

/** 把一帧状态包成 GSAP 函数式取值，保证刷新后按新视口重算。 */
export const fromState = (state: () => FrameState): TweenVars => ({
  width: () => state().width,
  height: () => state().height,
  x: () => state().x,
  y: () => state().y,
  z: () => state().z,
  rotationX: () => state().rotationX,
  rotationY: () => state().rotationY,
  rotationZ: () => state().rotationZ,
  opacity: () => state().opacity,
});

/* ---------- 转场：A 全屏 / 卡片 / 远景 ---------- */

export const full = (): FrameState => {
  const m = metrics();
  return place(m.w, m.h, 0, 0, {
    z: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    opacity: 1,
  });
};

export const fullDrift = (dx: number): FrameState => {
  const m = metrics();
  return place(m.w * (1 + dx * 0.0006), m.h * (1 + dx * 0.0011), dx, 0, {
    z: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    opacity: 1,
  });
};

export const enter = (): FrameState => {
  const m = metrics();
  return place(m.cardW * 0.94, m.cardH * 0.94, 0, m.h * (m.mobile ? 0.86 : 0.72), {
    z: -240,
    rotationX: m.mobile ? 4 : 7,
    rotationY: 0,
    rotationZ: 0,
    opacity: 0,
  });
};

export const deep = (): FrameState => {
  const m = metrics();
  return place(m.farW, m.farH, 0, m.h * 0.06, {
    z: -900,
    rotationX: 3,
    rotationY: 0,
    rotationZ: 0,
    opacity: 0,
  });
};

export const card = (side: -1 | 1): FrameState => {
  const m = metrics();
  return place(m.cardW, m.cardH, m.mobile ? 0 : m.side * side, m.mobile ? -m.h * 0.16 : -m.h * 0.02, {
    z: m.mobile ? -150 : -190,
    rotationX: 0,
    rotationY: m.mobile ? 0 : -18 * side,
    rotationZ: m.mobile ? -1.2 : 1.6 * side,
    opacity: 1,
  });
};

export const far = (side: -1 | 1): FrameState => {
  const m = metrics();
  return place(m.farW, m.farH, m.mobile ? 0 : m.side * 1.18 * side, m.mobile ? -m.h * 0.3 : -m.h * 0.1, {
    z: -560,
    rotationX: 0,
    rotationY: m.mobile ? 0 : -24 * side,
    rotationZ: 0,
    opacity: 0.55,
  });
};

/* ---------- Hero：首屏主照片是一个有透视的立体画框，左侧留白给轴线 ---------- */

export const heroMain = (): FrameState => {
  const m = metrics();
  const width = m.mobile ? m.w * 0.74 : clamp(m.w * 0.31, 300, 452);
  const height = width * 1.3;
  // 主视觉落在右侧，左侧整块留给光轴与标题，两者不叠。
  return place(width, height, m.mobile ? 0 : m.w * 0.205, m.mobile ? -m.h * 0.04 : m.h * 0.01, {
    z: 40,
    rotationX: m.mobile ? 0 : 1.5,
    rotationY: m.mobile ? 0 : -7,
    rotationZ: 0,
    opacity: 1,
  });
};

export const heroDrift = (): FrameState => {
  const m = metrics();
  const base = heroMain();
  return {
    ...base,
    x: base.x + (m.mobile ? 0 : m.w * 0.012),
    y: base.y - m.h * 0.03,
    z: base.z + 40,
    rotationY: base.rotationY + (m.mobile ? 0 : -2.5),
  };
};

/** 首屏的两张远景照片：一张藏在光轴后方，一张从右边缘露一角；移动端保持 opacity 0。 */
export const heroFar = (side: -1 | 1): FrameState => {
  const m = metrics();
  const width = m.mobile ? m.cardW * 0.7 : clamp(m.w * 0.15, 160, 240);
  const height = width * 1.32;
  const offsetX = side === -1 ? -m.w * 0.035 : m.w * 0.45;
  const offsetY = side === -1 ? -m.h * 0.14 : m.h * 0.22;
  return place(width, height, m.mobile ? 0 : offsetX, m.mobile ? -m.h * 0.2 : offsetY, {
    z: -430,
    rotationX: 0,
    rotationY: m.mobile ? 0 : -14 * side,
    rotationZ: 0,
    opacity: m.mobile ? 0 : 0.4,
  });
};
