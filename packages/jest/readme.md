# 调试 jest

Jest 功能强大，我们通常使用 Jest 来做单元测试，但如何调试 jest 测试脚本呢？

最近学习 tapable，但是看到它的测试用例，完全不明白啊，想来调试试试，于是就有了这个调试章节

```js
"scripts": {
  "debug": "node --inspect-brk ./node_modules/.bin/jest --runInBand ./__tests__/SyncHook.js"
},
```

- `--runInBand`: 别名 `-i`, 在当前进程中串行运行所有测试，而不是创建运行测试的子进程的工作程序池。这对于调试很有用。

参考：

- https://jestjs.io/docs/en/cli#options
