# FEOR1N Audit Report — v2 Full Development Kit

日期：2026-11-09  
目标：在不改动数据库、鉴权、上传和部署的前提下，把访客侧升级为 **FEOR1N — A Living Memory**。

## 当前架构

```mermaid
flowchart LR
  SPA[frontend<br/>React 18 + Vite 6 + TS] -->|Cookie / JSON / CSRF| WEB[ASP.NET Core 10]
  WEB --> GATE[SiteGate 入口保护]
  WEB --> ADMIN[Razor 后台]
  WEB --> API[SPA JSON API]
  API --> SERVICES[OurStory.Services]
  SERVICES --> EF[EF Core]
  EF --> DB[(App_Data/ourstory.db)]
  API --> MEDIA[/media 缩略图与原图]
  WEB --> STATIC[wwwroot/spa 构建产物]
```

## 已确认的现有技术栈

- 前端：`frontend/package.json`，React 18、React Router 6、Vite 6、TypeScript、Tailwind 4、Lenis。
- 入口：`frontend/src/main.tsx`、`frontend/src/App.tsx`。
- 首页：`frontend/src/pages/HomePage.tsx`，当前已有 Hero → 螺旋照片 → Story → Letter。
- 螺旋组件：`frontend/src/components/HelixGallery.tsx`。
- 视觉：`frontend/src/styles.css`。
- API：`frontend/src/lib/api.ts`，复用 `/api/moments`、`/api/home`、`/api/anniversaries`、`/api/gallery/albums`。
- 后端：`src/OurStory.Web/Api/Spa*.cs`。
- 入口保护：`src/OurStory.Web/Infrastructure/SiteGate*`。
- 数据：EF Core + SQLite，数据库位于 `src/OurStory.Web/App_Data/ourstory.db`。

## 必须原样保留

- `/enter` 入口口令与会话 Cookie。
- 点滴上锁、评论、私密可见性和后台权限。
- 现有 API 契约、数据表、迁移和照片存储。
- 相册上传 / 删除、纪念日、日历、设置和通知。
- 构建输出路径 `src/OurStory.Web/wwwroot/spa/`。

## 照片数据能力

`GET /api/moments?page=N` 返回 `MomentCard`，其中已经包含：

- `id`、`slug`、`title`、`excerpt`
- `coverUrl`、`coverThumb`
- `momentDate`、`mood`、`location`、`loveDay`

因此 3D 螺旋不需要新增后端字段，也不需要新增缩略图接口。当前 `coverThumb` 可直接用于首屏和邻近面板。

## 可复用与待重构

可复用：

- React 路由、BootstrapContext、PagePreloader、ImageMotionRunner、Lenis。
- 现有 `HelixGallery` 的滚动映射、键盘/焦点和详情层逻辑。
- 现有 Story / Letter 数据来源。

待重构：

- Hero：增加中央轴线、1 张主照片 + 1–2 张远景照片、低密度粒子。
- 素材：新增统一 `demoAssets.ts`，明确 `isPlaceholder: true`。
- 螺旋：接入真实照片优先、占位素材兜底；增加轴线 ribbon、粒子、前后景明暗控制。
- 视觉 token：更新为 v2 的 `#080A0F / #0D1420 / #72A8B5 / #8E7BB8 / #C29A75`。

## 不需要新增依赖

当前 CSS 3D 螺旋 + 原生 scroll progress 已满足 v2 的可逆滚动、景深和交互要求。第一阶段不引入 Three.js / R3F / GSAP：

- 减少首屏体积和 GPU 初始化风险。
- 保持 DOM 可访问性和真实照片懒加载。
- 后续若需要真实体积雾、物理材质和复杂相机，再单独评估 Three.js 并动态 import。

## 测试基线

- `cd frontend && npm run build`
- 测试入口口令、登录、点滴详情、相册和纪念日路由。
- 测试 1440×900、1280×800、390×844、360×800。
- 检查正向 / 反向滚动、照片详情、Esc 关闭、焦点返回和 reduced motion。
