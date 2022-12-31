---
title: Installation

---

# 安装

## 环境支持

支持 ES2018 和 ResizeObserver 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill 。

不再支持 IE 浏览器。

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

## 使用包管理器

我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 OMD Design Plus，然后您就可以使用打包工具，例如 Vite 或 webpack。

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install omd-design-plus --save

# Yarn
$ yarn add omd-design-plus

# pnpm
$ pnpm install omd-design-plus
```

如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) 或者 [Alibaba](https://registry.npmmirror.com/).

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 OMD Design Plus，然后就可以使用全局变量 `OmdDesignPlus`.

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/omd-design-plus/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/omd-design-plus"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/omd-design-plus/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/omd-design-plus"></script>
</head>
```

如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节: [快速使用](/docs/guide/quickstart).
