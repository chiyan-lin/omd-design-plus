---
title: Development FAQ

---

# Development FAQ

Here are the problems that are easy to encounter in development.

## If you encounter dependency related issues

```shell
rm -fr node_modules
pnpm i
```

## Link local dependencies

```shell
# get dist
pnpm build
cd dist/omd-design-plus
# set cur omd-design-plus to global `node_modules`
pnpm link --global
# for esm we also need link omd-design-plus for dist
pnpm link --global omd-design-plus

# go to your project, link to `omd-design-plus`
cd your-project
pnpm link --global omd-design-plus
```

> More info see [pnpm link](https://pnpm.io/cli/link).

## Theme

We should not write Chinese comments in scss files.

It will generate warning `@charset "UTF-8";` in the header of css file when built with vite.

> More info see [#3219](https://github.com/omd-design-plus/omd-design-plus/issues/3219).
