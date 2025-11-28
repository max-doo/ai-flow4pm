# AI Flow Blog

基于 Astro 框架构建的 Markdown 博客网站，支持多种文章模板，可部署到 GitHub Pages。

## 特性

- 📝 **多种模板**：支持博客文章、教程文档、快速笔记三种模板
- 📑 **自动目录**：从 Markdown 标题自动生成目录导航
- 🖼️ **图片画廊**：内置图片画廊组件，支持点击放大
- 🏷️ **标签系统**：文章标签分类和检索
- 🌙 **深色主题**：现代化的深色 UI 设计
- 🚀 **自动部署**：GitHub Actions 自动构建部署

## 快速开始

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 本地开发

```bash
npm run dev
# 或
pnpm dev
```

访问 http://localhost:4321 查看网站

### 构建

```bash
npm run build
# 或
pnpm build
```

## 创作内容

### 目录结构

```
src/content/
├── posts/        # 博客文章
├── tutorials/    # 教程文档
└── notes/        # 快速笔记
```

### 文章 Frontmatter

```yaml
---
title: "文章标题"
description: "文章描述"
date: 2025-11-26
template: post        # post | tutorial | note
tags: ["标签1", "标签2"]
toc: true            # 是否显示目录
draft: false         # 是否为草稿
author: "作者名"
cover: "/images/cover.jpg"  # 封面图（可选）
---
```

### 教程特有字段

```yaml
---
difficulty: beginner  # beginner | intermediate | advanced
readingTime: 10      # 预计阅读时间（分钟）
series: "系列名称"   # 所属系列
order: 1            # 系列中的顺序
---
```

## 部署到 GitHub Pages

1. 修改 `astro.config.mjs` 中的 `site` 和 `base` 配置：

```javascript
export default defineConfig({
  site: 'https://你的用户名.github.io',
  base: '/仓库名',
  // ...
})
```

2. 推送代码到 GitHub 仓库

3. 在仓库 Settings > Pages 中：
   - Source 选择 "GitHub Actions"

4. 推送后会自动触发构建和部署

## 技术栈

- [Astro](https://astro.build) - 静态网站生成器
- [TailwindCSS](https://tailwindcss.com) - CSS 框架
- [MDX](https://mdxjs.com) - 增强的 Markdown

## 许可证

MIT License

