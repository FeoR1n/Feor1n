// 全局动效偏好：跟随 prefers-reduced-motion，变化时实时同步。
// 所有需要跳过 3D、视差、pin 的组件都从这里读取，不再各自查询媒体查询。

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function read(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia(QUERY).matches;
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(read);

  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia(QUERY);
    const onChange = () => setReduced(media.matches);
    media.addEventListener('change', onChange);
    setReduced(media.matches);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/** 供非 React 代码（引擎、事件回调）使用的一次性读取。 */
export function prefersReducedMotion(): boolean {
  return read();
}
