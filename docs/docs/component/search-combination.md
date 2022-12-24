---
title: SearchCombination
lang: zh-CN
---

# SearchCombination

通过配置 render json 查询选择列表堆

## 基础使用

传入一份 json 配置，自动渲染出对应的表单

:::demo

search-combination/basic

:::

## SearchCombination API

### SearchCombination Attributes

| Name       | Description                      | Type                       | Default | Required |
| ---------- | -------------------------------- | -------------------------- | ------- | -------- |
| `offset`   | offset distance.                 | ^[number]                  | `0`     | No       |
| `position` | position of affix.               | ^[enum]`'top' \| 'bottom'` | `'top'` | No       |
| `target`   | target container. (CSS selector) | ^[string]                  | —       | No       |
| `z-index`  | `z-index` of affix               | ^[number]                  | `100`   | No       |

### SearchCombination Events

| Name     | Description                        | Type                                                                |
| -------- | ---------------------------------- | ------------------------------------------------------------------- |
| `change` | triggers when fixed state changed. | ^[Function]`(fixed: boolean) => void`                               |
| `scroll` | triggers when scrolling.           | ^[Function]`(value: { scrollTop: number, fixed: boolean }) => void` |

### SearchCombination Exposes

| Method       | Description                 | Type                    |
| ------------ | --------------------------- | ----------------------- |
| `update`     | update affix state manually | ^[Function]`() => void` |
| `updateRoot` | update rootRect info        | ^[Function]`() => void` |

### SearchCombination Slots

| Name      | Description                |
| --------- | -------------------------- |
| `default` | customize default content. |
