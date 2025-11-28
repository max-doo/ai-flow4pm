/**
 * 内容集合配置
 * 定义不同类型文章的 schema，支持多模板系统
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 模板类型枚举：作品(work)、教程(tutorial)、笔记(note)
const templateEnum = z.enum(['work', 'tutorial', 'note']);

// 通用的文章 schema
const baseSchema = z.object({
  // 文章标题
  title: z.string(),
  // 文章描述/摘要
  description: z.string().optional(),
  // 发布日期
  date: z.coerce.date(),
  // 更新日期
  updatedDate: z.coerce.date().optional(),
  // 模板类型：work(作品), tutorial(教程), note(笔记)
  template: templateEnum.default('note'),
  // 标签
  tags: z.array(z.string()).default([]),
  // 是否启用目录
  toc: z.boolean().default(true),
  // 是否为草稿
  draft: z.boolean().default(false),
  // 封面图片
  cover: z.string().optional(),
  // 作者
  author: z.string().default('匿名'),
});

// 教程文档集合
const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutorials' }),
  schema: baseSchema.extend({
    // 教程特有字段
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    // 预计阅读时间（分钟）
    readingTime: z.number().optional(),
    // 所属系列
    series: z.string().optional(),
    // 系列中的顺序
    order: z.number().optional(),
  }),
});

// 作品集合
const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: baseSchema,
});

// 笔记集合
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: baseSchema.omit({ toc: true }).extend({
    // 笔记默认不显示 TOC
    toc: z.boolean().default(false),
  }),
});

// 导出所有集合
export const collections = {
  works,
  tutorials,
  notes,
};

