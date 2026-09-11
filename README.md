# Organization Website Template

A content-first static website for organizations, companies, and robotics teams. This `template` branch is based on the Preview framework. It includes English, Simplified Chinese, Traditional Chinese, a light/dark theme switch, and Steam-style achievement notifications for a first visit and exploring every home section. No organization data, real events, posters, or contact details are included.

## Start your own site

1. Fork this repository on GitHub. **Uncheck “Copy the default branch only”** so your fork includes `template`. In your fork, select `template` and optionally make it the default branch.
2. Clone **your fork's** `template` branch. Use Node.js 24 (the exact version is in `.node-version`).
3. Run `npm ci`, then `npm run dev`. No separate content repository or secret is required.
4. Edit the files under `content/`; follow [the content guide](docs/content.md). Replace bracketed placeholders and the three generic assets with your own content.
5. Run `npm run check`, `npm test`, `npm run build`, and `npm run test:dist`.
6. Deploy to **your own** Cloudflare Pages project following [the deployment guide](docs/deployment.md).

The demo is available at [template.ghfrc.pages.dev](https://template.ghfrc.pages.dev). The demo does not provide an online editor or save visitors' content. Your content is edited and versioned in your fork.

## Structure

| Path | Purpose |
| --- | --- |
| `content/config/locales/` | Site name, logo, icons, navigation labels, home and footer copy |
| `content/pages/` | Page introductions, body text, achievements, partners and contacts |
| `content/events/` | Events, with one file per language |
| `content/projects/`, `content/news/` | Optional project and news entries |
| `content/media/` | Your images and videos |
| `framework/` | Page layouts, navigation, localization and theme switching |
| `achievements/` | Optional Steam-style notification module |
| `skins/default/skin.css` | Colors, typography and motion tokens |

## License

The framework is available under the [MIT license](LICENSE). Retain its copyright and license notice when redistributing the source. Replace the generic placeholder assets with material you are authorized to publish.

# 组织网站模板

此 `template` 分支基于 Preview 的网站框架，适用于组织、公司和机器人队伍。保留英文、简体中文、繁体中文切换、明暗主题切换，以及首次访问、浏览全部首页板块时出现的 Steam 风格成就通知。模板不包含任何组织的真实信息、活动、海报或联系方式。

## 开始使用

1. 在 GitHub 上 fork 此仓库。**取消勾选 “Copy the default branch only”**，确保自己的仓库包含 `template` 分支；随后可将它设为默认分支。
2. 克隆自己仓库的 `template` 分支，使用 Node.js 24（准确版本见 `.node-version`）。
3. 执行 `npm ci`，再执行 `npm run dev`。无需额外的内容仓库或密钥。
4. 按照[内容填写说明](docs/content.md)修改 `content/`，替换方括号中的占位文字及三张通用占位素材。
5. 依次执行 `npm run check`、`npm test`、`npm run build` 和 `npm run test:dist`。
6. 按照[部署说明](docs/deployment.md)发布到自己的 Cloudflare Pages 项目。

[在线模板](https://template.ghfrc.pages.dev)用于浏览效果；当前没有网页编辑或保存内容的功能。内容在使用者自己的仓库中修改和管理。

源码遵循 [MIT 许可证](LICENSE)，再次分发源码时须保留版权和许可声明。
