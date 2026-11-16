# FEOR1N Redesign Audit

审查日期：2026-11-09  
目标：在不破坏现有数据、鉴权、上传和后台能力的前提下，把访客侧升级为 **FEOR1N — A World Made of Us.**

## 1. 当前架构

```mermaid
flowchart LR
  Browser[React SPA<br/>Vite + React 18 + TypeScript] -->|JSON / Cookie / CSRF| Web[ASP.NET Core 10]
  Web --> Gate[SiteGate 入口口令]
  Web --> Admin[Razor 后台]
  Web --> Api[SPA JSON API]
  Api --> Services[OurStory.Services]
  Services --> Data[EF Core]
  Data --> SQLite[(App_Data/ourstory.db)]
  Api --> Media[/media 缩略图与原图]
  Media --> Storage[本地 / OSS 存储]
  Web --> SPA[wwwroot/spa 构建产物]
```

关键文件：

- `frontend/`：访客侧 SPA，Vite 6、React 18、TypeScript、Tailwind 4，现有 Lenis。
- `frontend/src/App.tsx`：SPA 路由。
- `frontend/src/pages/HomePage.tsx`：首页。
- `frontend/src/lib/api.ts`：SPA API 客户端。
- `frontend/src/styles.css`：全站视觉和动效。
- `src/OurStory.Web/Api/Spa*.cs`：SPA JSON API。
- `src/OurStory.Web/Infrastructure/SiteGate*`：入口口令和访客保护。
- `src/OurStory.Web/Areas/Admin/`：照片、点滴、纪念日、设置后台。
- `src/OurStory.Data/`：EF Core + SQLite，现有迁移完整。

## 2. 首页当前数据流

1. 浏览器请求 `/`。
2. `SiteGateMiddleware` 检查入口 Cookie；未通过时跳转 `/enter`。
3. `SpaShellEndpoints.MapSpaFallback` 返回 `wwwroot/spa/index.html`。
4. React `BootstrapProvider` 请求 `/api/bootstrap`，获取站点设置、身份、统计和防伪令牌。
5. `HomePage` 分页请求 `/api/moments`，按日期排序；同时请求 `/api/anniversaries`。
6. 现有封面、缩略图和正文媒体继续通过 `/media` 读取，不改变权限。

## 3. 功能清单

- 入口口令 / 访客身份。
- 首页电影式首屏、章节叙事、相伴计时、下一个纪念日。
- 点滴分页、详情、上锁记录解锁、评论。
- 纪念日总览、时间轴、即将到来、公历 / 农历月历、详情。
- 相册列表、相册详情、灯箱、管理员上传 / 删除。
- 登录、主题切换、PWA、后台管理。

## 4. 模块判断

可保留：

- 所有后端 API、数据库和实体。
- `BootstrapContext`、登录、防伪令牌、上传、私密内容逻辑。
- `MomentCard`、`AlbumPhoto`、`AnniversaryItem` 等数据模型。
- 现有路由和页面功能。
- `PagePreloader`、`Cursor`、`ImageMotionRunner`、Lenis。
- 相册和文章 Lightbox、评论和后台页面。

应重构：

- 首页叙事结构：Hero → Our Moments → Our Story → Letter。
- 首页照片展示：从静态章节 / 简化滚动横切，升级为滚动驱动的 3D 螺旋照片长廊。
- 全站视觉 token：深空黑、暖白、银灰、低饱和冷紫和香槟色。
- 首页内容组织：使用真实 `moments` 和 `loveLetter` 数据，不编造故事。

应新增：

- `HelixGallery`：CSS 3D 螺旋照片长廊，滚动驱动、可逆行、可点击。
- 照片详情层：键盘、Esc、焦点返回、图片错误占位。
- 首页 Letter / Epilogue 区域。
- 设计包 SVG 素材的本地位图化引用（仅本地静态资源）。

## 5. 数据与风险

- 不改 API 契约、不改数据库结构、不新增数据表。
- 螺旋照片使用现有 `MomentCard.coverUrl/coverThumb`；点击进入现有点滴详情。
- 照片详情层使用已有标题、日期、地点、摘要；字段为空时不生成假文案。
- 信件使用 `/api/home` 的 `loveLetter`；为空时显示明确空状态。
- 私密记录和上锁逻辑继续由现有 API 与详情页负责，不在首页绕过权限。
- 当前 `frontend` 与后端通过同源 API 协作，不能把 `/media` 路径改成第三方 CDN。

## 6. 视觉方案

- 主色：Void `#07080B`、Deep `#101218`、Warm White `#F2F0EB`。
- 少量强调：Silver `#C9CDD8`、Violet `#8C83B8`、Champagne `#C7AE8A`。
- Hero：双生光晕、轨道线、超大 FEOR1N 字标、短暂进入提示。
- Our Moments：中央轴 + 3D 螺旋照片 + 深浅层次 + 当前章节标识。
- Our Story：编辑式章节排版，不做后台式时间轴卡片。
- Letter：减少特效，增加留白，以大字和少量信息收束。

## 7. 依赖与体积

第一轮不新增 Three.js / GSAP。原因：

- 现有 React 18 + CSS 3D 足以完成可逆的螺旋滚动叙事。
- 避免额外约 150KB+ gzip 的 3D 运行时和纹理管理复杂度。
- 保持首屏和数据页面的加载稳定，移动端可直接降级为 DOM 透视布局。

如果后续需要真实体积雾、材质、景深和 WebGL 后期，再单独评估 `three` + `@react-three/fiber`，并通过动态 import 与移动端降级接入。

## 8. 分阶段实施

1. 视觉 token、Hero、页面骨架。
2. `HelixGallery` 与照片详情层。
3. Our Story 和 Letter。
4. 移动端、减少动态、空数据、图片错误。
5. 构建、真实页面滚动和原有路由回归。

## 9. 回滚

- 新增首页组件放在独立文件，旧首页结构可由 Git 恢复。
- 不改后端、数据库、API、部署配置，回滚只需恢复前端文件并重新构建。
- 构建产物仍输出到 `src/OurStory.Web/wwwroot/spa/`。

## 10. 验收标准

- 入口口令、登录、照片和故事数据仍可用。
- 首页正向和反向滚动都平滑且可逆。
- 照片可点击打开详情，Esc 关闭并恢复焦点。
- 1440px、1280px、390px、360px 无横向溢出。
- WebGL/CSS 3D 不可用时有可读的静态照片布局。
- `npm run build` 通过，真实页面无 React 运行时错误。
