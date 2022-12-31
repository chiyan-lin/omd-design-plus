---
title: Commit 栗子

---

# Commit 栗子


其实就是参考的 [Conventional Commits](https://chris.beams.io/posts/git-commit/)


## 提交消息的模板


```md
feat(components): [button] 我用按钮实现了某些功能

主体行和主体内容之间用空白行隔开(可以有预期时间)
通过一行或多行描述你的修改信息
每一行的首字母大写
且每一行的总字符数限制在72个以内最优, 超过了将不易于他人理解

- 你也可以通过添加子项列表符号来为内容布局
```

主题标题的格式是:

```
[type](scope): [messages]
```

### 参考

[提交历史简洁](https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/)
