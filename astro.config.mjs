// Astro 配置文件
// 集成 MDX 和 TailwindCSS，配置 GitHub Pages 部署
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ======== GitHub Pages 部署配置 ========
  // 部署前请修改以下两项：
  // 1. site: 替换为你的 GitHub Pages 地址
  //    - 用户站点：https://你的用户名.github.io
  //    - 组织站点：https://组织名.github.io
  // 2. base: 替换为你的仓库名（以 / 开头）
  //    - 如果仓库名是 "my-blog"，则设置为 '/my-blog'
  //    - 如果是用户主页仓库（用户名.github.io），则设置为 '/'
  // ========================================
  site: 'https://max-doo.github.io',
  base: '/ai-flow4pm',
  
  // 集成 MDX 支持
  integrations: [mdx()],
  
  // Vite 配置 - 集成 TailwindCSS v4
  vite: {
    plugins: [tailwindcss()],
  },
  
  // Markdown 配置
  markdown: {
    // 启用语法高亮
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});

