# 调试 TypeScript

## 即时编译

如下操作

1. 修改 tsconfig.json -> `outDir: './lib/'`
2. 开启监视模式

    点击 vscode 菜单 -> 终端 -> 运行任务 -> tsc: 监视 packages/typescript/tsconfig.json

这样每当TS文件有变动就会自动编译，构建模式是手动命令编译时才会去编译
