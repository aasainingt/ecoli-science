# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **AI**: coze-coding-dev-sdk (LLM)

## 项目简介

大肠埃希菌（E. coli）交互科普网页应用。包含 7 张信息卡片（概述、形态与结构、致病性、传播途径、预防措施、治疗方法、研究进展）和 AI 智能问答。站点为**纯只读展示**，无在线内容编辑能力。

## 内容机制（重要）

- 全部展示内容固化在 `public/content-final.json`（含首屏自述、首屏图片、7 张卡片正文），通过 `useContent()` hook 在客户端只读加载；SSR/首帧使用 `src/data/ecoli-data.ts` 的 `getDefaultContent()` 兜底，避免 Hydration 不一致。
- 富文本为受限 HTML，仅使用 `strong.r-strong`、`em.r-em`、`mark.r-mark`、`span.r-warn`、`a.r-link`（样式定义在 `globals.css`）。
- 如需修改内容：直接编辑 `public/content-final.json`，或同步更新 `src/data/ecoli-data.ts` 的默认内容。

## 目录结构

```
├── public/
│   ├── content-final.json   # 固化的最终展示内容（只读数据源）
│   └── ecoli-hero.svg       # 首屏占位插图
├── src/
│   ├── app/
│   │   ├── page.tsx         # 首页（Hero + 卡片网格 + 搜索/筛选 + AI 入口）
│   │   ├── layout.tsx       # 根布局
│   │   ├── globals.css      # 全局样式、富文本类（r-strong/r-mark/r-em/r-warn/r-link）
│   │   ├── card/[slug]/     # 卡片详情页（page 服务端 + client 渲染富文本）
│   │   ├── ai/              # AI 智能问答页
│   │   └── api/ai-chat/     # AI 聊天 API（SSE 流式）
│   ├── components/
│   │   ├── navbar.tsx       # 顶部导航栏
│   │   ├── sidebar-nav.tsx  # 侧边栏目录导航（支持 currentSlug/onNavigate）
│   │   └── ecoli-card.tsx   # 科普卡片组件
│   ├── data/
│   │   └── ecoli-data.ts    # 卡片元数据 + 默认富文本内容 + SiteContent 类型
│   ├── hooks/
│   │   └── use-content.ts   # 只读内容 hook（读取 content-final.json）
│   └── components/ui/       # Shadcn UI 组件库
├── DESIGN.md
├── next.config.ts
├── package.json
└── tsconfig.json
```

- 项目文件（如 app 目录、pages 目录、components 等）默认初始化到 `src/` 目录下。

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码；优先复用当前作用域已声明的变量、函数、类型和导入，禁止引用未声明标识符或拼错变量名。
- 禁止隐式 `any` 和 `as any`；函数参数、返回值、解构项、事件对象、`catch` 错误在使用前应有明确类型或先完成类型收窄，并清理未使用的变量和导入。

### next.config 配置规范

- 配置的路径不要写死绝对路径，必须使用 path.resolve(__dirname, ...)、import.meta.dirname 或 process.cwd() 动态拼接。

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。**必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染**；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。
2. **禁止使用 head 标签**，优先使用 metadata，详见文档：https://nextjs.org/docs/app/api-reference/functions/generate-metadata
   1. 三方 CSS、字体等资源可在 `globals.css` 中顶部通过 `@import` 引入或使用 next/font
   2. preload, preconnect, dns-prefetch 通过 ReactDOM 的 preload、preconnect、dns-prefetch 方法引入
   3. json-ld 可阅读 https://nextjs.org/docs/app/guides/json-ld

## UI 设计与组件规范 (UI & Styling Standards)

- 模板默认预装核心组件库 `shadcn/ui`，位于`src/components/ui/`目录下
- Next.js 项目**必须默认**采用 shadcn/ui 组件、风格和规范，**除非用户指定用其他的组件和规范。**
