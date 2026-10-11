---
title: astroで作成したページをgithub pagesにデプロイする
description: astroで作成したページをgithub pagesにデプロイする方法のメモ
pubDate: 2026-10-11
tags:
  - astro
  - dev
draft: false
---
`astro.config.mjs` に以下を設定。

```typescript
export default defineConfig({
  site: 'https://taro0079.github.io',
  base: '/my-portfolio-2026',
});
```



github actionsでpush時に自動でデプロイするように設定。

`.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v7
      - name: Install, build, and upload site
        uses: withastro/action@v6
        with:
          node-version: 24

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5

```

