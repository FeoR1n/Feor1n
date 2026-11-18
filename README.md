# FEOR1N — A Living Memory

FEOR1N 是一个自托管的私密数字记忆网站。V3 把它重构成一个由记忆、光线和时间构成的私人空间：进入首页像走进一个房间，向下滚动时镜头穿过一条真实的三维照片走廊，随后转入暖纸色的艺术杂志式叙事。它同时保留完整的记录、相册、纪念日、入口口令和后台管理能力。

> 当前仓库即为 FEOR1N 的完整实现：视觉、前端交互、接口、数据层与项目说明均以本仓库为准。

## 核心体验

1. **Hero**：深墨色电影式开场，站点标题、人物名、年份；主照片为真实回忆，远景另有 1–2 张低对比照片。
2. **Memory Field**：Three.js 三维照片空间。照片沿 `CatmullRomCurve3` 曲线分布在镜头两侧，滚动驱动相机沿曲线连续前进，具有 XYZ 位移、朝向变化、前中远景与低密度尘埃粒子。
3. **Story Editorial**：3–6 个编辑式故事章节，篇幅构图轮换使用，数据来自现有点滴。
4. **Together**：相伴天数、初见天数、记录数量与下一个纪念日，大字号数字收束全页。
5. **私密访问**：入口口令、私密点滴、相册权限和后台登录逻辑保持不变。

## 当前功能

| 模块 | 说明 |
| --- | --- |
| 首页 | Hero、Three.js 记忆空间、故事章节、Together |
| 点滴 | 档案索引、详情、上锁记录、评论 |
| 相册 | 相册列表、大图灯箱、管理员上传/删除 |
| 纪念日 | 时间轴、即将到来、公历/农历月历、详情 |
| 后台 | 照片、点滴、纪念日、站点设置、账号和通知 |
| 手机 | 响应式布局、底部导航、原生触控滚动 |
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
- 不再内置演示照片或装饰素材，也不会用同一张图重复填充空间。没有照片时首页显示明确的空空间引导。
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

## 测试

构建：

```bash
cd frontend
npm run build
```

当前已完成的验收包括：

- TypeScript 类型检查通过。
- Vite 生产构建通过。
- 入口服务保持 302 跳转，未修改鉴权逻辑。
- 桌面 1440×900 和移动 390×844 截图已生成。
- Hero 实测 1 张主照片 + 2 张远景，横向溢出为负值。
- 首页空间实测：滚动驱动相机从起点推进到走廊终点，HUD 计数随焦点更新，控制台无错误。
- 浏览器控制台无运行时错误；九个访客路由在桌面 1440 与手机 390 视口下均可加载，无横向溢出。
- `prefers-reduced-motion` 与 WebGL 不可用时均自动切换为静态照片墙，内容完整可读。
- 桌面端 `npm run build` 后 Three.js 单独分块，不进入首包。

截图位于 `screenshots/v3/`，覆盖首页 Hero、空间、故事、Together 与各内页的桌面/手机视口。

## 维护真实照片

1. 登录后台。
2. 在「点滴」中创建记录并上传封面图。
3. 首页记忆空间与故事章节会自动读取现有点滴数据（最多各取 24 / 6 条）。
4. 相册照片通过「相册」后台上传。
5. 没有封面照片时，首页显示空空间引导，而不是占位素材。

## 回滚

V3 改版集中在 `frontend/` 和 `src/OurStory.Web/wwwroot/spa/`，没有数据库迁移、鉴权改动或部署变更。需要通过 Git 回滚时，恢复对应前端文件并重新执行 `npm run build` 即可。

## 部署说明

本轮没有自动部署生产环境。正式发布前需要重新确认：

- 入口口令和 Cookie 配置。
- HTTPS / 反向代理。
- 数据卷和附件备份。
- 推送通知权限。
- 真实设备上的移动端性能。

不要在没有确认的情况下修改数据库迁移、鉴权、隐私边界或生产部署配置。
