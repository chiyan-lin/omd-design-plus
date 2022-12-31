---
title: 开发 FAQ

---

# 开发 FAQ


## 遇到奇怪的问题，先去掉 node_modules

```shell
rm -fr node_modules
pnpm i
```

## Link 本地依赖

```shell
# 1 打包
pnpm build
cd dist/omd-design-plus
# 设置 omd-design-plus 到全局的 `node_modules`
pnpm link --global omd-design-plus

# 跳转到工作项目, link `omd-design-plus`
cd your-work-project
pnpm link --global omd-design-plus
```

> 参见 [pnpm link](https://pnpm.io/cli/link).
