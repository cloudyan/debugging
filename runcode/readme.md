# vscode runcode

实现 vscode 中选中代码，右键 RunCode 直接运行代码来做测试

~~单文件脚本没问题(仅需以下配置步骤 1)~~ 多文件相互引用也没有问题，看下文总结

~~但 **import 语法还未调试通, 会报错**, 可以直接使用 nodejse/src/index.js 右键 Run Code 测试~~

以前 `babel6` 时, 曾配置 OK 过, 现在升级为 babel7, 反而有问题了, 这里引出一个问题, 如果 babel 出问题了, 怎么去跟踪定位问题呢, 暂时能想到的是使用 `babel-node --inspect-brk` 能打断点跟进去

现在不再用 `babel6` 了，所以 `babel6` 之前的方案未再做验证了，仅做参考

1. 使用 `babel7` 需要全局安装 `npm i -g @babel/core @babel/node`
2. ~~需要配置 ~/.babel.config.js~~

```js
module.exports = {
  // 'rootMode': 'upward', // 针对 monorepo 配置
  // 允许这两个子 package 加载 babelrc 相对配置
  // babelrcRoots: ['.', './src'],
  'presets': [
    [
      '@babel/preset-env',
      {
        'targets': {
          node: 'current',
          modules: false, // 关于这个 云谦有篇介绍应该永久为 false
          // @babel/presets-env 会自动将ES6 Module转化为CommonJS形式，会导致Webpack中的tree-shaking特性失效，而将modules配置为false后会禁用模块化语句的转化，将Module的语法交给Webpack本身去处理，来避免这一问题的发生。
        }
      }
    ]
  ]
}
```

3. vscode 需要配置 Code Runner，按 `cmd + ,`

```js
// codeRunner 需要全局安装一下模块
// npm i -g @babel/cli @babel/node @babel/preset-env
// Error: Cannot find module '@babel/preset-env' from '/usr/local/lib' 报此错误需要改为当前项目为根目录再执行右键Run Code 或配置 `"code-runner.cwd": "/usr/local/lib/",`
{
  "code-runner.cwd": "/usr/local/lib/",
  "code-runner.defaultLanguage": "javascript",
  "code-runner.executorMap": {
    // babel 6
    // 需要全局安装 `npm i -g babel-cli babel-preset-stage-0`
    // "javascript": "babel-node --presets=stage-0",
    // 使用 babel 7
    // 需要全局安装 npm i -g @babel/core @babel/node
    "javascript": "babel-node", // https://babeljs.io/docs/en/babel-node
    // https://typestrong.org/ts-node/docs/imports
    "ts": "ts-node", // npm i -g ts-node
    "md": "babel-node",
    "rs": "rustc",
    "vue": "babel-node"
  },
  // executorMapByFileExtension 无需配置
  // "code-runner.executorMapByFileExtension": {
  //   "js": "babel-node",
  //   "md": "babel-node",
  //   "rs": "rustc",
  //   "vue": "babel-node"
  // },
}

// 无需配置 babel-node 配置项
// `babel-node --config-file=~/babel.config.js --presets=@babel/preset-env`
```

## 总结

- 使用 code run 需要配置 `code-runner.executorMap`
- es5 以及 commonjs 语法没有问题
- es6 模块
  - 方案 1：需要使用文件后缀 `mjs`，`import` 时需要带文件后缀 `.mjs` 引用
  - 方案 2：需要 `package.json` 配置 `"type": "modules",`, 可使用 `.js` 后缀， `import` 时同样需要带 `.js` 后缀引用

## 问题

- 是否可以 `import` 引用时无需后缀
- 让 `markdown` 文件中也支持直接 `runcode`

目前在 `package.json` 配置 `"type": "modules",` 的情况下，`.md` 文件中不能直接选中 js 运行 `coderun`，示例如下

无 `"type": "modules"` 配置可以正常 `runcode`

```js
console.log(111);
```
