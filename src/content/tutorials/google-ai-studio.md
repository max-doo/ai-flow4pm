---
title: "Google AI Studio 使用教程"
description: "Google官方教程，用氛围编程助力产品设计"
date: 2025-11-26
template: tutorial
tags: ["AI", "产品开发", "Cursor"]
toc: true
cover: "/img/google-ai-studio/banner.png"
author: "Doo"
series: "AI 产品设计"
order: 2
---

<div class="video-container-vertical">
  <iframe 
    src="https://open.douyin.com/player/video?vid=7577247249781001526&autoplay=0" 
    referrerpolicy="unsafe-url"
    allowfullscreen>
  </iframe>
</div>

## 第一部分：视频核心内容总结

本视频由 Google for Developers 发布，主要演示了**Gemini 3 Pro** 模型在 **Google AI Studio** 中的全新**Vibe Coding（氛围编程）**能力。[观看教程](https://v.douyin.com/GW5RmZQmnpw/ )

**核心亮点：**

1.  **Gemini 3 Pro 发布：** 展现了更强的推理能力和现实世界的 Agentic（代理）编程能力。
2.  **Vibe Coding 概念：** 用户无需编写代码，只需描述想法、风格（Vibe）或上传素材，AI 即可自动构建完整的应用程序。
3.  **三大实战演示：**
    * **AI 课程落地页：** 展示了从文本提示到现代 UI（新野兽派风格）的生成，以及通过\*\*标注模式（Annotation Mode）\*\*进行可视化修改。
    * **SaaS 数据仪表板：** 展示了多模态能力，通过上传 **CSV 数据文件**和**风格参考截图**，生成交互式图表和内置 AI 问答机器人。
    * **3D 网页游戏：** 展示了处理复杂指令（Tech Stack、游戏机制、物理效果）的能力，以及 AI \*\*自动修复（Auto-fix）\*\*运行时错误的功能。
-----

## 第二部分：Gemini 3 Vibe Coding 实战攻略

所谓的 "Vibe Coding" 是指不纠结于具体代码语法，而是专注于描述应用的感觉、氛围和功能，让 AI 替你完成实现。以下是基于视频提炼的操作指南：

### **准备工作**

* **入口：** 访问 [ai.studio/builds](https://aistudio.google.com/apps)
* **模型选择：** 确保在顶部下拉菜单中选择 **Gemini 3 Pro (Preview)**。

### **核心操作流程 (The Workflow)**

1. **描述你的想法 (Prompting)**

    * **文本描述：** 在输入框中用自然语言描述你想做的应用。
        * *技巧：* 使用具体的形容词描述 UI 风格（如：Neo-brutalism, Minimalist, Dark mode, Googly colors）。
        * *示例：* "制作一个名为'Hidden Layer'的 AI 课程落地页，风格要新潮、有趣，带有平滑滚动动画。"
    * **素材投喂 (Multimodal Input)：**
        * **文件上传：** 点击 `+` 号上传数据文件（如 CSV），让 AI 基于真实数据构建应用。
        * **视觉参考：** 上传一张你喜欢的 UI 截图，让 AI 模仿其配色和布局风格（"Take inspiration from the attached screenshot"）。

2. **生成与预览 (Build & Preview)**

    * 点击 **Build**。AI 会展示其思考步骤（Thinking Process），并在右侧预览窗口实时生成应用。
    * Gemini 3 具备 **Auto-fix（自动修复）** 功能。如果在生成过程中代码报错，它会自我分析错误信息并自动修正，无需人工干预。

3. **交互式修改 (Iterate with Annotation)**
这是视频中最酷的功能之一。如果你对生成的 UI 细节不满意，不需要描述代码位置，只需：

    1.  点击预览窗口上方的 **Annotation Mode (标注模式)** 图标。
    2.  直接在预览界面上**点击或框选**你想修改的元素（如按钮、图表）。
    3.  输入修改指令（例如：“把这个按钮改成绿色”、“用截图里的蓝色渲染这个图表”）。
    4.  Gemini 会截取带有你标注的屏幕截图，理解你的意图并更新代码。

### **进阶 Vibe Coding 技巧**

* **混合能力堆叠：**
在提示词中，你可以要求 AI 集成其他 AI 工具（如 "添加 Nano Banana 用于生成图像" 或 "添加聊天机器人功能"），视频中的仪表板就内置了基于 Gemini API 的问答功能。

* **复杂指令处理：**
不要害怕长 Prompt。视频中的 3D 游戏案例证明，Gemini 3 Pro 可以理解极度详细的技术栈要求（如指定使用 React, Three.js, React Three Fiber）、物理反馈（碰撞检测）和操作逻辑（空格键射击）。

* **数据可视化神器：**
如果你有业务数据（Excel/CSV），直接扔给它，并要求："分析数据，生成交互式图表，关注 MRR 增长和流失率"。这比手写 Python 或 Excel 公式要快得多。

### 适合练手的三个方向（参考视频）

* **营销落地页 (Landing Page)：** 练习 UI 风格描述和动画效果。
* **业务仪表板 (Dashboard)：** 练习数据处理、文件上传和参考图风格迁移。
* **网页小游戏 (Web Game)：** 练习复杂逻辑描述和 AI 的纠错能力。

<br>

> **一句话总结：** 现在的编程不再是写 `if/else`，而是关于如何清晰地描述你的Vibe（感觉）和Requirements（需求），剩下的交给 Gemini 3 Pro。