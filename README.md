# FEOR1N — A Living Memory

FEOR1N 是一个自托管的私密数字记忆网站：照片不是被放进网格，而是沿一条中央纵向轴线形成可滚动穿行的螺旋空间。它同时保留完整的记录、相册、纪念日、入口口令和后台管理能力。

> 当前仓库即为 FEOR1N 的完整实现：视觉、前端交互、接口、数据层与项目说明均以本仓库为准。

## 核心体验

1. **Opening**：深空式的品牌首屏，1 张主照片 + 1–2 张远景照片、中央光轴和低密度粒子。
2. **Memory Field**：照片围绕中央轴形成螺旋轨迹；原生滚动驱动面板靠近、掠过、远离，可正向和反向浏览。
3. **Chapters**：重要记忆以编辑式章节呈现，数据来自现有点滴。
4. **Letter**：以真实信件或站点短句安静收束。
5. **私密访问**：入口口令、私密点滴、相册权限和后台登录逻辑保持不变。

## 当前功能

| 模块 | 说明 |
| --- | --- |
| 首页 | Hero、中央轴、螺旋照片长廊、章节叙事、Letter |
| 点滴 | 档案索引、详情、上锁记录、评论 |
| 相册 | 相册列表、大图灯箱、管理员上传/删除 |
| 纪念日 | 时间轴、即将到来、公历/农历月历、详情 |
| 后台 | 照片、点滴、纪念日、站点设置、账号和通知 |
| 手机 | 响应式布局、底部导航、原生触控滚动 |
| PWA | 添加到主屏幕、Service Worker 与推送支持 |

## 视觉系统

- Void `#080A0F`
- Deep blue-black `#0D1420`
- Elevated dark `#151B25`
- Warm white `#F0EEE9`
- Muted text `#A4A7B0`
- Cool silver `#BFC7D3`
- Muted cyan `#72A8B5`
- Muted violet `#8E7BB8`
- Warm amber `#C29A75`

视觉原则是深色空间、真实照片优先、中央轴清晰、低密度粒子、编辑式字体层级和克制的交互。动画集中在镜头推进、照片景深和章节节奏，不使用满屏发光、随机粒子或通用卡片堆叠。

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
  src/components/            Hero、螺旋长廊、灯箱、布局等
  src/pages/                 路由页面
  src/lib/demoAssets.ts      演示素材统一配置
  public/assets/feor1n/      v2 视觉素材包（背景、占位照片、粒子、纹理）
  src/styles.css             全局设计系统与响应式样式
src/OurStory.Web/            ASP.NET Core 站点、API、后台
src/OurStory.Services/       业务服务
src/OurStory.Data/           EF Core 与 SQLite
screenshots/                 桌面与移动端验收截图
FEOR1N_*.md                 审查、风险和交付记录
```

## 素材与隐私

- 真实照片优先。首页和螺旋会优先使用 `/api/moments` 返回的 `coverUrl` / `coverThumb`。
- 没有真实照片时，使用 `frontend/public/assets/feor1n/` 中的演示素材。
- 演示素材由 `frontend/src/lib/demoAssets.ts` 统一配置，并在 UI 和代码中标记为占位内容，不代表真实回忆。
- 占位素材不会写入数据库、不会上传到用户照片存储，也不会发送到第三方图床。
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
- 螺旋滚动实测：62% 进度时章节索引更新到 `05 / 08`，进度线为 `scaleX(0.6235)`。
- 浏览器控制台无运行时错误。
- `prefers-reduced-motion` 下关闭相机、粒子与漂浮动画，保留静态内容。

截图：

- `screenshots/feor1n-desktop-hero.jpg`
- `screenshots/feor1n-mobile-hero.jpg`
- `screenshots/feor1n-helix-0.jpg`
- `screenshots/feor1n-helix-25.jpg`
- `screenshots/feor1n-helix-50.jpg`
- `screenshots/feor1n-helix-75.jpg`
- `screenshots/feor1n-helix-100.jpg`

## 维护真实照片

1. 登录后台。
2. 在「点滴」中创建记录并上传封面图。
3. 首页螺旋和章节会自动读取现有点滴数据。
4. 相册照片通过「相册」后台上传。
5. 只有没有真实封面时，前端才会回退到演示素材。

## 回滚

本轮改版集中在 `frontend/` 和 `src/OurStory.Web/wwwroot/spa/`，没有数据库迁移、鉴权改动或部署变更。需要通过 Git 回滚时，恢复对应前端文件并重新执行 `npm run build` 即可。

## 部署说明

本轮没有自动部署生产环境。正式发布前需要重新确认：

- 入口口令和 Cookie 配置。
- HTTPS / 反向代理。
- 数据卷和附件备份。
- 推送通知权限。
- 真实设备上的移动端性能。

不要在没有确认的情况下修改数据库迁移、鉴权、隐私边界或生产部署配置。
