# 调试 webpack

参看 [learn-webpack](https://github.com/cloudyan/learn-webpack/tree/master/packages/vscode-debug)

参考：

- https://github.com/hua1995116/debug/blob/master/webpack-plugin-debug

## 编译配置

必须按照依赖 `yarn add webpack webpack-cli --dev`

```js
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "webpack:plugin",
      "program": "${workspaceFolder}/node_modules/webpack/bin/webpack.js",
      // "program": "${workspaceFolder}/node_modules/webpack-dev-server/bin/webpack-dev-server.js",
      "args": [
        // 默认为 `./webpack.config.js`
        // "--host", "0.0.0.0",
        "--config", "./webpack/build/webpack.config.js"
      ],
      "env" : { "NODE_ENV" : "production" },
      // "envFile": "${workspaceFolder}/xxx.env",
    },
  ]
}
```

## webpack 命令行参数

- --progress: 能够看到打包进度
- --json: 可以将打包结果输出为 json
- --display-chunks: 可以看到打包出来的 chunk 信息

[更多命令行参数](https://webpack.js.org/api/cli/)

还可以通过 analyse 网站分析 webpack 的编译结果，可以分析 chunks, modules, Assets 等。

https://webpack.github.io/analyse/
