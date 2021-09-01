# vscode runcode

vscode 右键 RunCode 直接运行 es6

单文件脚本没问题(仅需以下配置步骤 1)

但 **import 语法还未调试通, 会报错**, 可以直接使用 nodejs/src/index.js 右键 Run Code 测试

以前 babel6 时, 曾配置 OK 过, 现在升级为 babel7, 反而有问题了, 这里引出一个问题, 如果 babel 出问题了, 怎么去跟踪定位问题呢, 暂时能想到的是使用 `babel-node --inspect-brk` 能打断点跟进去

1. 使用 babel7 需要全局安装 @babel/node
2. 需要配置 ~babel.config.js

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
          // @babel/presets-env会自动将ES6 Module转化为CommonJS形式，会导致Webpack中的tree-shaking特性失效，而将modules配置为false后会禁用模块化语句的转化，将Module的语法交给Webpack本身去处理，来避免这一问题的发生。
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
    "vue": "babel-node",
    // babel 7
    // 需要全局安装 npm i -g @babel/core @babel/node
    "javascript": "npx babel-node --config-file=~/babel.config.js --presets=@babel/preset-env"
  }
}
```
