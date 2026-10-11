# 森田太郎のポートフォリオ・ブログ

Astroで構築する静的サイトです。GitHub Pagesの `/my-portfolio-2026/` 配下に公開する設定になっています。

## 開発

```sh
npm ci
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
```

## ブログ記事を追加する

`src/content/blog/` に `.md` ファイルを追加してください。例えば `hello-world.md` のURLは `/my-portfolio-2026/blog/hello-world/` です。サブディレクトリにも対応しています。

```markdown
---
title: '記事のタイトル'
description: '記事一覧とメタ情報に表示する紹介文'
pubDate: 2026-10-11
updatedDate: 2026-10-12
tags: ['日記', 'Web']
draft: true
---

## 見出し

ここから本文をMarkdownで書きます。
```

- `title`、`description`、`pubDate` は必須です。
- `updatedDate`、`tags`、`draft` は任意です。
- `draft: true` の記事は開発中も本番も一覧・個別ページから除外します。
- 公開時は `draft: false` に変更してください。省略時も公開されます。
- 公開日は一覧の並び順に使います（新しい順）。未来の日付も公開されるため、予約公開の機能ではありません。
- 記事の追加・変更後はビルドとデプロイが必要です。
- `markdown-guide.md` は公開サンプルです。不要なら削除するか下書きにしてください。

公開パスを変更する場合は `astro.config.mjs` の `site` と `base` を更新してください。サイト内のリンクは `base` に追従します。

## Astroスターターの参考情報

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev -- --background` | Starts background local dev server           |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
