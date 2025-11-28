---
title: "欢迎来到 AI Flow Blog"
description: "这是一个基于 Astro 和 Markdown 构建的博客网站，支持多种文章模板"
date: 2025-11-26
template: note
tags: ["博客", "Astro", "Markdown"]
toc: true
author: "AI Flow"
---

## 欢迎

欢迎来到 **AI Flow Blog**！这是一个基于 [Astro](https://astro.build) 框架构建的博客网站，专为 Markdown 内容创作者设计。

## 功能特点

### 多种文章模板

本博客支持三种文章模板：

1. **博客文章 (Post)**：标准的博客文章格式，适合分享观点和经验
2. **教程 (Tutorial)**：带有步骤导航的教程文档，适合技术教程
3. **笔记 (Note)**：简洁的笔记格式，适合快速记录

### 自动目录导航

文章会自动从 Markdown 标题生成目录导航，支持：

- 显示 H2 和 H3 级别的标题
- 滚动时高亮当前阅读位置
- 点击快速跳转到对应章节

### 图片画廊

支持在 MDX 文件中使用图片画廊组件：

```jsx
import ImageGallery from '../components/ImageGallery.astro';

<ImageGallery 
  images={[
    { src: '/image1.jpg', alt: '图片1', caption: '说明文字' },
    { src: '/image2.jpg', alt: '图片2' },
  ]} 
  columns={3}
/>
```

### 标签系统

每篇文章都可以添加标签，方便分类和检索。点击标签可以查看同类文章。

## 开始创作

在 `src/content/` 目录下创建 Markdown 文件即可开始创作：

- `src/content/posts/` - 博客文章
- `src/content/tutorials/` - 教程文档
- `src/content/notes/` - 快速笔记

### 文章 Frontmatter

每篇文章需要在开头添加 frontmatter：

```yaml
---
title: "文章标题"
description: "文章描述"
date: 2025-11-26
template: post  # post | tutorial | note
tags: ["标签1", "标签2"]
toc: true       # 是否显示目录
author: "作者名"
---
```

## 部署

本博客支持一键部署到 GitHub Pages：

1. 推送代码到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 GitHub Actions 作为部署源
4. 自动构建并部署

享受创作的乐趣吧！🎉

