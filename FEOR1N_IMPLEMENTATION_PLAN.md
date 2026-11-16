# FEOR1N Implementation Plan — v2

## Phase 0 — 审查

- 已完成：`FEOR1N_AUDIT_REPORT.md`、`FEOR1N_RISK_REGISTER.md`、本文件。
- 不改后端、数据库、鉴权和部署。

## Phase 1 — 艺术指导

- 更新 v2 色彩 token、字体层级、中央轴线和章节节奏。
- 首屏密度控制在 20–30%。

## Phase 2 — 静态骨架

- Hero：品牌标题、1 张主照片、1–2 张远景、中央轴线、低密度粒子。
- 保留现有 Our Moments / Our Story / Letter 区块。

## Phase 3 — 空间原型

- 复用并升级 `HelixGallery`：真实照片优先，占位素材兜底。
- 增加前、中、后景透明度、亮度和尺寸层次。

## Phase 4 — 滚动驱动

- 保持原生滚动，不使用 wheel 劫持。
- 使用容器 progress 驱动照片位置、景深和章节索引。
- 验证 0/25/50/75/100% 与反向滚动。

## Phase 5 — 粒子与材质

- 使用视觉包的低密度粒子覆盖层和少量粒子图。
- 增加中央轴线 ribbon、玻璃/虹彩边缘，限制高光数量。

## Phase 6 — 真实照片

- 复用 `/api/moments` 的 `coverUrl/coverThumb`。
- 没有真实照片时使用 `demoAssets`，并在 UI 与代码中标记占位。
- 不改数据库、不上传占位图。

## Phase 7 — 性能与 QA

- `npm run build`。
- 入口、路由、点详情、Esc、移动端、reduced motion 回归。
- 截图 1440×900、390×844。

## 回滚

- 视觉改动集中在 `frontend/src/` 和构建产物。
- 使用 Git 恢复前端文件；不涉及数据库迁移和后端配置。
