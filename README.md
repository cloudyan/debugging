# debugging

这里收集总结各种调试的手段

## 各种调试

nodejs 调试, 下面两种方式都可以

1. 使用 `node --inspect-brk` 进行调试, 通过 `chrome://inspect` 打开 devtools 调试
2. 使用 [vscode](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) 内置调试支持, 直接断点调试(推荐)

- browser 浏览器(常规调试)
  - [ ] chrome
  - [ ] firefox
  - [ ] safari
  - [ ] [iOS devices debug](./packages/ios/readme.md)
  - [ ] Chrome remote debug
- [nodejs](./packages/nodejs/readme.md)
  - [nodejs](./packages/nodejs) 小脚本
    - [x] 调试 es5
    - [x] 调试 es6, 也可以配到 vscode 全局配置中
  - [x] express/koa
  - [x] webpack plugin
  - [ ] babel plugin
  - [ ] vue-cli plugin
- [ ] typescript
- [x] [jest](./packages/jest/readme.md)
- [ ] vue
- [ ] react
- [x] 调试 [c/cpp](./packages/cpp/readme.md)

## 使用

```bash
npm i

# 全局安装
npm i -g @babel/core @babel/node @babel/preset-env

# 然后可以运行
npx babel-node
```

https://babeljs.io/docs/en/babel-node


## vscode 配置全局调试

`cmd + ,` 打开 setting 配置, 写入以下内容

你可以使用本项目下 `./debugging/test.js` 来测试全局调试 `es6: debug`

```json
  "launch": {
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "es6: debug",
        "program": "${workspaceFolder}/test.js", // workspaceFolder 当前工作路径：当前文件所在的工作空间
        // 或者使用全局安装的 babel-node `npm i -g @babel/node @babel/core @babel/preset-env`
        "runtimeExecutable": "babel-node", // 改用 babel-node 执行, 而不是 node
        "skipFiles": [
          "<node_internals>/**"
        ]
      },
      {
        "name": "Launch Webpack",
        "program": "${workspaceFolder}/node_modules/webpack/bin/webpack.js",
        "request": "launch",
        "type": "node"
      }
    ]
  },
```

参考：

- https://github.com/Microsoft/vscode-recipes
- https://github.com/katopz/vscode-debug-nodejs-es6
- https://juejin.im/post/5c6b6defe51d45798b51e4b2
