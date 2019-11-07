# 调试 TypeScript

- [x] 即时编译
  - "target": "es5" 配置为 es5, 报错了, 需要改为 es2015,
  - 原因是 packages 外部执行了 lerna bootstrap, 于是才出现报错 是因为其他包安装的依赖导致问题, 这里取消使用 lerna, 各个包独立维护管理各自依赖, 互不干扰
- [ ] ESlint 语法检查
- [ ] TS 语法错误提示
- [ ] Jest 测试用例

## 即时编译

如下操作

1. 修改 tsconfig.json -> `outDir: './lib/'`
2. 开启监视模式

    点击 vscode 菜单 -> 终端 -> 运行任务 -> tsc: 监视 packages/typescript/tsconfig.json

这样每当TS文件有变动就会自动编译，构建模式是手动命令编译时才会去编译
