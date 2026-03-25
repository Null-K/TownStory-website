# TownStory 服务器官网

TownStory Minecraft 服务器的官方网站，使用 VitePress 构建。

## 项目简介

这是一个基于 VitePress 的静态网站，用于展示 TownStory Minecraft 服务器的信息、团队介绍、玩家评价等内容。

## 技术栈

- VitePress
- Vue 3
- TypeScript

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

### 构建生产版本

```bash
npm run docs:build
```

### 预览生产版本

```bash
npm run docs:preview
```

## 项目结构

```
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # VitePress 配置
│   │   └── theme/              # 自定义主题
│   │       ├── components/     # Vue 组件
│   │       ├── style.css       # 全局样式
│   │       └── index.ts        # 主题入口
│   ├── public/                 # 静态资源
│   ├── index.md                # 首页
│   └── links.md                # 友情链接
└── package.json
```

## 部署

本项目可以部署到以下平台：

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

## 许可证

MIT License

## 联系方式

- 服务器地址: play.townstory.top
- QQ 群: 1234567890
