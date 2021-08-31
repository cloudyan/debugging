# debugging

这里收集总结各种调试的手段

## 常见问题汇总

- 想调试 nodejs, 怎么处理?
  - 参看 [nodejs](./nodejs/readme.md) 方法通用
- 碰到了 npm 模块, 但感觉有异常想跟踪调试, 怎么办?
  - 本质仍然是 nodejs, 有可能会有新的参数需要配置, 如 jest
- 想跟踪 webpack 打包流程, 怎么调试?
- 想单独测试一个 vue 文件, 怎么快捷?
- 如何使用 vscode 配置调试 vue, nodejs 等?
- 怎么调试 npm scripts 命令?
- 怎么配置调试 typescript?
- 常规浏览器调试技巧?

## 各种调试

nodejs 调试, 下面两种方式都可以

1. 使用 `node --inspect-brk` 进行调试, 通过 `chrome://inspect` 打开 devtools 调试
2. 使用 [vscode](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) 内置调试支持, 直接断点调试(推荐)

- browser 浏览器(常规调试, 大家都会)
  - [ ] chrome
  - [ ] firefox
  - [ ] safari
  - [ ] [iOS devices debug](./ios/readme.md)
    - 使用 Safari：iphone 调试利器，查错改样式首选。
    - 使用 iOS 模拟器：不需要真机，适合调试 Webview 和 H5 有频繁交互的功能页面。
  - [ ] Chrome remote debug
- spy-debugger：移动端调试的利器，便捷的远程调试手机页面、抓包工具。
- whistle：基于 Node 实现的跨平台 Web 调试代理工具。
- [nodejs](./nodejs/readme.md) 方法通用
  - [nodejs](./nodejs/readme.md) 脚本
    - [x] 调试 es5
    - [x] 调试 es6, 也可以配到 vscode 全局配置中
  - [x] **npm 模块** (本质还是 nodejs 脚本), 如 gh-pages
  - [x] express/koa
  - [x] webpack plugin
  - [ ] babel plugin
  - [ ] vue-cli plugin
- [ ] typescript
- [x] [jest](./jest/readme.md)
- [ ] vue，可以直接在 vscode 内断点调试
- [ ] react 同 vue，也可以直接定位源码位置
- [x] 调试 [c/cpp](./cpp/readme.md)
- 使用代理调试 [Mac]Charles [Windows]Fiddler
  - 可以重定向远程域名或资源到本机
  - 可以重定向本地资源到远端
  - 我们可以用本地文件来替换线上文件，方便调试，远程定位线上问题。
- 当前设备安装 HTTPS 证书
  - iOS
  - Android
  - Mac

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
- https://mp.weixin.qq.com/s/IBXXJ8_Q_NzSWnzy04cKxw
