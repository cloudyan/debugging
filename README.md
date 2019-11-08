# debugging

这里收集总结各种调试的手段

## 各种调试

- browser 浏览器
  - [ ] chrome
  - [ ] firefox
  - [ ] safari
  - [ ] [iOS devices debug](./packages/ios/readme.md)
  - [ ] Chrome remote debug
- [nodejs](./packages/nodejs/readme.md)
  - [x] nodejs 脚本
  - [x] express/koa
  - [x] webpack plugin
  - [ ] babel plugin
  - [ ] vue-cli plugin
- [ ] typescript
- [x] [jest](./packages/jest/readme.md)
- [ ] vue
- [ ] react
- [x] [c/cpp](./packages/cpp/readme.md)
- vscode
  - [x] 调试 es5
  - [x] 调试 es6, 也可以配到 vscode 全局配置中

## 使用

```bash
lerna bootstrap

# 全局安装
npm i -g @babel/core @babel/cli @babel/node @babel/preset-env
# 然后可以运行
npx babel-node
```

https://babeljs.io/docs/en/babel-node


## vscode 全局配置调试

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
