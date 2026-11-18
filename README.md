# FEOR1N — A World Made of Us.

FEOR1N 是一个自托管的私密数字记忆网站。当前 **V3.1 Cinematic Experimental** 把首页变成一部由真实照片驱动的私人电影：先以滚动镜头完成照片显影、靠近与穿行，再把相机交给 Three.js 三维记忆走廊，随后转入编辑式故事章节与克制的时间收束。

它同时保留完整的记录、相册、纪念日、私密内容、入口口令和后台管理能力。本仓库不是视觉原型，也不是其他开源项目的主题副本；前端、接口、数据层和运行方式均以当前代码为准。

> 当前仓库即为 FEOR1N 的完整实现：视觉、前端交互、接口、数据层与项目说明均以本仓库为准。

## 核心体验

1. **Film Hero**：深墨色电影式开场，主照片从暗部显影后靠近镜头并掠过；远景照片、中央纵向轴线、标题和 HUD 各自位于独立运动层。桌面为横向电影构图，手机为独立竖屏片头。
2. **Memory Field**：Three.js 三维照片空间。照片沿 `CatmullRomCurve3` 曲线分布在镜头两侧，滚动驱动相机产生 XYZ 位移、朝向和轻微侧倾，具有前中远景、焦点驻留与低密度尘埃粒子。
3. **Story Editorial**：3–6 个编辑式故事章节，篇幅构图轮换使用，数据来自现有点滴。
4. **Together**：相伴天数、初见天数、记录数量与下一个纪念日，大字号数字收束全页。
5. **私密访问**：入口口令、私密点滴、相册权限和后台登录逻辑保持不变。

## 当前功能

| 模块 | 说明 |
| --- | --- |
| 首页 | V3.1 滚动电影 Hero、Three.js 记忆空间、故事章节、Together |
| 点滴 | 档案索引、详情、上锁记录、评论 |
| 相册 | 相册列表、大图灯箱、管理员上传/删除 |
| 纪念日 | 时间轴、即将到来、公历/农历月历、详情 |
| 后台 | 照片、点滴、纪念日、站点设置、账号和通知 |
| 手机 | 独立竖屏构图、折叠菜单、Hero 后浮现的底部导航、原生触控滚动 |
| PWA | 添加到主屏幕、Service Worker 与推送支持 |

## 视觉系统

- Void `#090B10` / Night `#11151D` / Night soft `#1A202A`（空间）
- Paper `#EEEAE2` / Paper soft `#E5E0D6`（阅读）
- Ink `#202127` / Ink muted `#77766F`
- Copper `#B99470`（点缀，仅用于进度、标记与反馈）
- 深色模式下纸张翻成 `#101319`，通过 `<html data-theme>` 切换

视觉原则是深色空间与暖纸阅读交替、真实照片优先、编辑式字体层级和克制的交互。动效集中在镜头推进、照片焦点和章节节奏，不使用满屏发光、高密度粒子或通用卡片堆叠。

样式按职责拆分在 `frontend/src/styles/`：`tokens` / `typography` / `global` / `chrome` / `editorial` / `misc-pages` / `responsive`，页面局部样式跟随组件放在 `features/*` 下。

## 技术架构

首页使用的关键依赖：

- `three`：独立懒加载的三维场景、相机路径、照片空间与 GPU 粒子。
- `gsap` + `ScrollTrigger`：Hero 时间线与三维场景进度；只使用原生滚动，不引入 Lenis。
- React 只管理业务数据与少量章节状态；滚动进度直接写入 Three.js 引擎，不触发逐帧 React 重渲染。

```mermaid
flowchart LR
  SPA[React SPA<br/>Vite 6 + React 18 + TypeScript] -->|Cookie / JSON / CSRF| WEB[ASP.NET Core 10]
  WEB --> GATE[SiteGate 入口保护]
  WEB --> API[SPA JSON API]
  WEB --> ADMIN[Razor 后台]
  API --> SERVICES[OurStory.Services]
  SERVICES --> DATA[EF Core]
  DATA --> DB[(SQLite / App_Data)]
  API --> MEDIA[/media 图片与缩略图]
  WEB --> STATIC[wwwroot/spa 前端构建产物]
```

主要目录：

```text
frontend/                    React 访客端
  src/components/layout/     站点外壳：导航、页脚、手机底栏、首屏加载
  src/components/editorial/  编辑式基础组件（标题、元信息、图片、空/错状态）
  src/features/home/         首页 Hero、故事章节、Together
  src/features/spatial/      Three.js 空间引擎（相机、照片、粒子、释放）
  src/features/moments/      点滴列表与详情
  src/features/gallery/      相册列表、相册详情
  src/features/anniversaries/纪念日列表与详情
  src/features/motion/       减少动效监听与揭示观察器
  src/pages/                 登录、404
  src/styles/                Design tokens、排版、全局、组件、响应式
  src/lib/api.ts             现有 API client（未改动契约）
src/OurStory.Web/            ASP.NET Core 站点、API、后台
src/OurStory.Services/       业务服务
src/OurStory.Data/           EF Core 与 SQLite
screenshots/                 桌面与移动端验收截图
FEOR1N_*.md                 审查、风险和交付记录
```

## 素材与隐私

- 全部页面只使用 `/api/*` 返回的真实内容；首页空间优先使用 `coverThumb`，点击后才加载原图。
- 前端资源目录不内置演示照片或装饰素材，也不会复制同一张图来填充空间。没有照片时首页显示明确的空空间引导。
- 如果当前页面仍出现心形“示例照片”，它们不是前端占位图，而是数据库中已上传的现有点滴封面文件。请登录后台，在「点滴」中替换封面；不要直接删除数据库或上传目录。
- 真实私密照片仍然只通过现有同源 `/media` 和权限逻辑读取。
- 不要提交 `.env`、数据库、上传附件、数据保护密钥或真实私密照片。

## 本地运行

环境要求：

- .NET SDK 10
- Node.js 20+

启动后端：

```bash
dotnet run --project src/OurStory.Web
```

如果当前 shell 中 `dotnet` 不在 PATH，可以使用安装目录中的可执行文件：

```bash
/home/ubuntu/.dotnet/dotnet run --project src/OurStory.Web
```

后端默认监听 `http://localhost:5080`。首次启动会创建数据库和初始账号，随机口令只输出在后端启动日志中。

启动前端热更新：

```bash
cd frontend
npm install
npm run dev
```

开发地址：`http://localhost:5173/spa/`

构建并交由 ASP.NET 直接提供：

```bash
cd frontend
npm run build
```

产物输出到 `src/OurStory.Web/wwwroot/spa/`。之后访问 `http://localhost:5080/` 即可；入口保护会在 `/enter` 要求输入名字和口令。

## V3.1 性能与降级

照片纹理采用接近焦点才加载的策略，场景初始化时不会一次请求整条 24 张照片走廊。纹理关闭 mipmap，使用线性采样；照片离开可视范围后场景停止 RAF，页面卸载时释放 renderer、geometry、material、texture、RAF、ResizeObserver 和指针监听器。

同一 24 照片合成数据、1440×900、Chrome SwiftShader 软件 WebGL、整页 120 步滚动测试：

| 指标 | 优化中（全量纹理） | 优化后（按需纹理） |
| --- | ---: | ---: |
| 整页滚动耗时 | 14.7s | 8.1s |
| TaskDuration | 14.28s | 7.64s |
| ScriptDuration | 13.03s | 6.61s |
| 最大帧间隔 | 1499.7ms | 195.9ms |
| 首轮 `texSubImage2D` 主耗时 | 12.5s | 已不再是首要热点 |

SwiftShader 是最差情况，不代表有硬件 GPU 的桌面或手机实机。改动前基线构建在同一测试中为 7.5s，优化后已回到接近同一量级；真实设备性能仍需在上线前复测。

## 测试

构建：

```bash
cd frontend
npm run build
```

2026-11-18 本轮已完成的验收包括：

- TypeScript 类型检查通过。
- Vite 生产构建通过。
- 桌面 1440×900 实测 Hero 的 0 / 28 / 68 / 88% 四个关键节点：主照片从 0.3 透明度显影到 1，靠近后放大并在 88% 前退场，收束 CTA 在 88% 显示。
- Memory Field 实测 HUD 从 `01 / 03` 切换到 `02 / 03`、`03 / 03`，WebGL canvas 正常创建。
- 手机 390×844 实测主照片与标题最小间距 8px，无横向溢出；底部导航在 Hero 中隐藏、滚过后恢复。
- 手机菜单可打开和关闭，`aria-expanded` 正确变化，5 个入口均可聚焦。
- `prefers-reduced-motion: reduce` 下不创建 WebGL canvas，Hero 和照片空间切换为完整静态布局。
- 禁用 WebGL 时自动使用 DOM 照片 fallback，语义化照片链接仍可访问。
- 生产包 Three.js 仍为独立懒加载块；首页主包 gzip 约 124KB，Three.js 场景块 gzip 约 139KB。

截图位于 `screenshots/v31/`，包括桌面和手机 Hero 节点、Memory Field 进度、移动菜单、reduced-motion 与 WebGL fallback。

## 维护真实照片

1. 登录后台。
2. 在「点滴」中创建记录并上传封面图。
3. 首页记忆空间与故事章节会自动读取现有点滴数据（最多各取 24 / 6 条）。
4. 相册照片通过「相册」后台上传。
5. 没有封面照片时，首页显示空空间引导，而不是占位素材。

如果示例图仍存在，请确认它是后台点滴的封面上传文件；前端没有可覆盖它的默认素材逻辑。

## 回滚

V3 改版集中在 `frontend/` 和 `src/OurStory.Web/wwwroot/spa/`，没有数据库迁移、鉴权改动或部署变更。需要通过 Git 回滚时，恢复对应前端文件并重新执行 `npm run build` 即可。

## 部署说明

本轮没有修改数据库迁移、API 契约、鉴权、上传或生产部署，也没有自动部署生产环境。正式发布前需要重新确认：

- 入口口令和 Cookie 配置。
- HTTPS / 反向代理。
- 数据卷和附件备份。
- 推送通知权限。
- 真实设备上的移动端性能。

不要在没有确认的情况下修改数据库迁移、鉴权、隐私边界或生产部署配置。
