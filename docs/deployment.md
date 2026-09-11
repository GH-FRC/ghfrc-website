# Deploy your fork

## Cloudflare Pages with Git integration

Create a new Cloudflare Pages project linked to **your fork**, select `template` (or your chosen default branch) as the production branch, and use:

| Setting | Value |
| --- | --- |
| Root directory | Repository root |
| Build command | `npm run build` |
| Build output directory | `framework/dist` |
| `NODE_VERSION` | `24.14.0` |
| `SITE_URL` | Your own final HTTPS site URL |
| `SITE_NOINDEX` | `true` for a template/demo; `false` when your real site is ready |

Leave `SITE_CONTENT_DIR` unset to use the included `content/`. If your content lives elsewhere, set it to that directory explicitly. This template does not use a private content repository. Changing `SITE_URL` requires a rebuild because it determines canonical and alternate-language URLs.

## Direct upload

With Node.js 24 and Wrangler installed, run `wrangler login`, create your own Pages project, then build and deploy:

```sh
npm ci
SITE_URL=https://your-project.pages.dev SITE_NOINDEX=true npm run build
npm run test:dist
wrangler pages deploy framework/dist --project-name=your-project --branch=main
```

Replace `your-project`, URL and branch with your own settings. Do not deploy your fork to the upstream demo project. The checked-in GitHub workflow validates changes; it has no deployment credentials and does not publish automatically.

# 部署自己的仓库

## 连接 GitHub

在 Cloudflare Pages 新建项目并连接自己的 fork，将 `template` 或自己选定的默认分支设为生产分支。项目根目录为仓库根目录，构建命令为 `npm run build`，输出目录为 `framework/dist`。环境变量按上表填写：`SITE_URL` 必须替换为自己网站的最终 HTTPS 地址；展示模板时使用 `SITE_NOINDEX=true`，正式内容准备好后可改为 `false`。

`SITE_CONTENT_DIR` 留空即可使用仓库中的 `content/`；只有使用独立内容目录时才需要显式指定。此模板不依赖私有仓库。修改网站地址后需要重新构建。

## 直接上传

安装 Node.js 24 和 Wrangler，登录 Cloudflare 并创建自己的 Pages 项目，再执行上方命令。请替换项目名称、网站地址和分支。仓库内的 GitHub 工作流只执行验证，不包含部署凭据，也不会自动发布到原项目。
