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
- [JavaScript反调试技巧](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651228450&idx=1&sn=ed4c0323bddaf3ad91c8a8e429bccf6e)

## 各种调试

nodejs 调试, 下面两种方式都可以

1. 使用 `node --inspect-brk` 进行调试, 通过 `chrome://inspect` 打开 devtools 调试
2. 使用 [vscode](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) 内置调试支持, 直接断点调试(推荐)

- browser 浏览器(常规调试, 大家都会)
  - [x] chrome
  - [x] firefox
  - [x] safari
  - [x] [iOS devices debug](./ios/readme.md)
    - iOS 真机设备调试。使用电脑端 Safari: iphone 真机调试利器，查错改样式首选。
      1. 手机上开启网页检查器：设置-> safari 浏览器 -> 高级 -> 网页检测器
      2. 电脑上开启Safari上的Develop功能：菜单 -> Preferences（偏好设置） -> Advanced（高级）
      3. 使用数据线连接手机个开发主机 -> 信任电脑
      4. 打开devTool: Develop -> 你的ios设备 -> 要调试的页面
    - 使用 iOS 模拟器: 不需要真机，适合调试 Webview 和 H5 有频繁交互的功能页面。
  - [x] Chrome remote debug
    - Android 真机设备调试
      1. 打开开发者选项，不同手机可能打开方法不同
      2. 在手机上开启USB调试功能：设置-> 开发者选项 -> USB调试
      3. 使用数据线连接手机和开发主机：允许USB调试
      4. 打开Chrome DevTools：在地址栏输入 `chrome://inspect`，进入调试页面
         1. 确保开启了 Discover USB devices
- 移动端调试，注入调试器
  - [erudu github](https://github.com/liriliri/eruda/blob/master/README_CN.md)
  - [vConsole github](https://github.com/Tencent/vConsole/blob/dev/README_CN.md)
  - [mdebug github](https://github.com/ihtml5/mdebug)
  - 推荐使用 whistle.inspect 集成以上调试器
- spy-debugger: 移动端调试的利器，便捷的远程调试手机页面、抓包工具。
- [whistle](https://wproxy.org/whistle/): 基于 Node 实现的跨平台 Web 调试代理工具。
- [nohost](https://nohost.pro/): 基于 Whistle 实现的多账号多环境远程配置及抓包调试平台
- [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/Home.html): 全称是网页远程审查（Web Inspector Remote），发音同winery [ˈwaɪn(ə)ri]。可以在PC上调试运行在移动端上的页面。
  - 无线调试工具 [weinre](https://segmentfault.com/a/1190000010017457) 不能调试 js
  - 无需数据线，pc和移动都可以调试
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
- [ ] 点击组件，可直接定位到源码位置
  - React
  - Vue
- [x] 调试 [c/cpp](./cpp/readme.md)
- vscode 调试
  - VSCode 调试 JS 的方法有很多，目前比较推荐的就是无需配置的 `auto-attach`。这里推荐阅读若川的博客 [nodejs 调试](https://github.com/lxchuan12/nodejs-debugging/blob/main/README.md)
  - 按 `ctrl + shift + p`，打开输入 >`auto attach`。
  - 官方文档 [nodejs-debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- 使用代理工具调试
  - [Mac] Charles
  - [Windows] Fiddler
  - 功能
    - 可以重定向远程域名或资源到本机
    - 可以重定向本地资源到远端
    - 我们可以用本地文件来替换线上文件，方便调试，远程定位线上问题。
  - [当前设备安装 HTTPS 证书](https://www.yuque.com/cloudyan/faq/yxr48q)
    - Mac
    - iOS
    - Android
- 浏览器插件
  - [xswitch](https://github.com/yize/xswitch) 用来做请求链接转发
  - [anyproxy](https://github.com/alibaba/anyproxy) 不再维护了
- andriod
  - [scrcpy](https://github.com/Genymobile/scrcpy/blob/master/README.zh-Hans.md)
- 内网穿透：在公网访问本地服务
  - localtunnel
  - ngrok

## 使用

```bash
npm i

# 全局安装
npm i -g @babel/core @babel/node @babel/preset-env

# 然后可以运行
npx babel-node
```

https://babeljs.io/docs/en/babel-node

## 使用 weinre

环境准备与安装

```bash
npm install -g weinre

weinre -h  #获取帮助信息
weinre --boundHost=-all- --httpPort=1000 # 启动，boundHost为all是允许本机所有有效ip访问，默认端口8080
```

浏览打开：ip:1000 或 http://localhost:1000/

## Target 页面配置

```html
<!-- 往被调试页面添加脚本 -->
<script src="http://ip:端口/target/target-script-min.js#anonymous"></script>
<!-- 示例 -->
<script src="http://172.20.10.11:1000/target/target-script-min.js#anonymous"></script>
```

调试

调试移动手机的页面需要手机访问局域网内的页面服务（例如react开启了3000端口的服务，那么手机访问ip+3000）

- [weinre 官方文档](https://people.apache.org/~pmuellr/weinre/docs/latest/Home.html)

## vscode 配置全局调试

有更新的调试方案，可以参考 https://github.com/microsoft/vscode-js-debug 这里也有许多案例

`cmd + ,` 打开 setting 配置, 写入以下内容

你可以使用本项目下 `./debugging/test.js` 来测试全局调试 `es6: debug`

```json
  "launch": {
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "es6: debug",
        "program": "${workspaceFolder}/test.js", // workspaceFolder 当前工作路径: 当前文件所在的工作空间
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

- https://github.com/microsoft/vscode-js-debug
- https://github.com/Microsoft/vscode-recipes
- https://github.com/katopz/vscode-debug-nodejs-es6
- https://juejin.im/post/5c6b6defe51d45798b51e4b2
- https://mp.weixin.qq.com/s/IBXXJ8_Q_NzSWnzy04cKxw
- https://juejin.cn/post/6844903982888910861
- [Awesome Chrome DevTools](https://github.com/ChromeDevTools/awesome-chrome-devtools#chrome-devtools-protocol)
- [揭秘浏览器远程调试技术](https://fed.taobao.org/blog/taofed/do71ct/chrome-remote-debugging-technics/)
