# Content guide

## Site identity and languages

Edit `content/config/locales/zh-CN/site.yaml`, `en/site.yaml`, and `zh-Hant/site.yaml`. Set `site.title`, `description`, `hero`, `footer`, and `navigation` to your own content. Simplified Chinese defines the base shape; English and Traditional Chinese supply translations. Keep field names and item IDs consistent, and add new optional fields to the base before translating them. All three languages are checked before building.

The header logo and browser icons are configured by `site.logo` and `site.favicon`. Copy images into `content/media/`; use `/content/…` paths (for example, `content/media/images/logo.svg` is `/content/images/logo.svg`). Update `alt`, `intrinsicWidth` and `intrinsicHeight`. Browser icons should be PNG files. Images and videos are only copied into the build if referenced by content. To add a hero image, use:

```yaml
media:
  type: image
  src: /content/images/your-image.png
  alt: A description of your image
  intrinsicWidth: 1600
  intrinsicHeight: 900
```

## Pages

Each language has seven Markdown files in `content/pages/`: `overview.md`, `about.md`, `projects.md`, `achievements.md`, `news.md`, `sponsors.md`, and `contact.md`. YAML between the opening `---` markers controls the page and its home card. Markdown below the second marker is the page body. Keep `navigationId`, `layout`, and `order`; customize their text labels in site configuration.

`emptyState` controls empty-list copy. `contactMethods` adds contact details; `seasons` adds achievement records; `partners` adds partner marks. Add matching structures with stable IDs in all three languages. See `framework/src/content-schema.ts` for optional fields. The achievement records page and the automatic achievement notifications are separate features.

Example contact field in the page frontmatter (replace the example address before publishing):

```yaml
contactMethods:
  - id: email
    label: Email
    value: hello@example.com
    href: mailto:hello@example.com
```

## Events

Copy `docs/examples/event.md` to `content/events/zh-CN/my-event.md`, then create matching `en/my-event.md` and `zh-Hant/my-event.md` files with translated text. Replace every placeholder, date, and image. Set `published: true` in all three files when ready. Use explicit time zone offsets in `startsAt` and `endsAt`; `dateText` and `timeText` control the displayed text. Optional `sessions` can split one event into multiple sessions; each needs `id`, `title`, `startsAt`, `endsAt`, `dateText`, `timeText`, and `venue`.

To feature an event on the home page, add these three fields under `site.hero` in all three language configuration files:

```yaml
featuredEventId: my-event
featuredEventLabel: Upcoming event
featuredEventLinkLabel: View event details
```

## Projects and news

Copy the files in `docs/examples/` into `content/projects/` or `content/news/`. Replace placeholders and set `published: true`. These two entry collections currently share one content body across languages, as in the Preview framework; the surrounding interface remains localized. Write bilingual bodies if needed. Events and the seven main pages support separate translated content.

## Appearance and notifications

Change the color and typography tokens in `skins/default/skin.css`. Language preferences are stored in the visitor's browser; the theme switch applies to the current page and otherwise follows the system appearance. Achievement progress is also stored locally, with no account or server. The two notification triggers are first visit and viewing every home showcase section. The first notification waits for a click, tap or key press so its sound and toast start together; edit `site.achievementMessages.unlocked` to change the translated notification text. The module lives in `achievements/` and is loaded by `framework/src/scripts/optional-achievements.ts`.

# 内容填写说明

## 名称、素材与语言

在 `content/config/locales/` 下分别修改 `zh-CN`、`en`、`zh-Hant` 的 `site.yaml`，填写名称、简介、导航、首页和页脚内容。简体中文定义基础结构，英文和繁体中文提供对应翻译。保持字段名和条目 ID 一致；新增可选字段时，先在基础文件中添加，再补充翻译。

标志和标签页图标分别由 `site.logo`、`site.favicon` 配置。把自己的图片放入 `content/media/`，引用路径写为 `/content/…`，并填写真实尺寸和替代文字。标签页图标使用 PNG 文件。只有被内容文件引用的素材会进入发布文件。上方示例展示了如何添加首页图片。

## 页面内容

三个语言目录中各有七个 Markdown 页面文件。文件顶部两条 `---` 之间是页面配置，其后是正文。保留 `navigationId`、`layout` 和 `order`；显示名称在站点配置中修改。`emptyState` 是空状态文字；`contactMethods` 可添加联系方式，`seasons` 可添加成果记录，`partners` 可添加合作伙伴。三个语言文件须具有对应结构及一致的条目 ID。完整字段见 `framework/src/content-schema.ts`。

## 活动、项目与动态

`docs/examples/` 提供未发布的样例。活动需复制到三个语言目录中，使用相同文件名，替换日期、文字和图片后，将三个文件的 `published` 均设为 `true`。时间字段须写明时区；`dateText` 和 `timeText` 决定页面显示的文字。一个活动可用 `sessions` 添加多个场次。需要在首页展示活动时，在三个语言的 `site.hero` 中添加上方列出的三个 `featuredEvent` 字段。

项目和动态条目分别放入 `content/projects/`、`content/news/`。这两类条目沿用 Preview 的单份正文机制，各语言界面共享正文；如有需要，可在正文中先写英文、再写中文。活动和主要页面支持分别填写三种语言内容。

## 外观与成就通知

外观变量位于 `skins/default/skin.css`。首次访问及浏览完全部首页板块会触发成就通知。首次通知会等待点击、触摸或按键操作，再同时播放提示音和显示弹窗；提示文字在 `site.achievementMessages.unlocked` 中修改。语言偏好和成就进度保存在访客自己的浏览器中；主题切换作用于当前页面，默认跟随系统外观，不需要账户或服务器。源码保留 MIT 许可声明；网站上的占位素材与文字均可替换为自己的内容。
