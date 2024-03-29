# 调试 nodejs

方法是通用的，但凡是 nodejs 的脚本，都可以借鉴下面的方法调试

- nodejs cli
- express, koa
- es6

其他

1. 使用 `--inspect`
    - `npx babel-node --inspect ./src/index.js`
2. 可以使用 vscode 调试

## 使用 `--inspect` 调试

直接使用 `node --inspect` 或 `node --inspect-brk` 运行脚本, chrome 打开 `chrome://inspect` 调试即可

TIP 注意

- 在根目录 debugging/ 调试，需要配置 `debugging/babel.config.js` 文件
  - `npm run dev1`
- 在当前目录 nodejs/ 调试，需要配置 `nodejs/.babelrc.js` 文件
  - `npm run dev`

如果是纯执行脚本，使用 `--inspect` 一旦执行，就会执行完退出，没触发时机打断点

这时可以使用 `--nolazy --inspect-brk` 之后打开 `chrome://inspect` 即可调试，但是此时调试，devtools 面板没有文件列表，不好定位执行文件

`--inspect-brk` 会在用户代码启动之前中断。[--inspect-brk 和 --inspect 的区别](https://nodejs.org/en/docs/guides/debugging-getting-started/#command-line-options)

以上方法针对 express 和 koa 也是可行的，脚本运行起来并不会退出，可以打开 `chrome://inspect` 打开调试界面, 然后访问服务

## 使用 vscode 调试 nodejs

1. 修改配置vscode

```js
// 调试 es5 脚本
{
  "type": "node",
  "request": "launch",
  "name": "nodejs: es5",
  "program": "${workspaceFolder}/nodejs/src/es5.js",
  "skipFiles": [
    "<node_internals>/**"
  ]
},

// 调试 es6 脚本
{
  "type": "node",
  "request": "launch",
  "name": "nodejs: es6",
  // npx babel-node --presets=@babel/preset-env
  "program": "${workspaceFolder}/nodejs/src/index.js",
  // 或者使用全局安装的 babel-node `npm i -g @babel/node @babel/core @babel/preset-env`
  "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/babel-node", // 改用 babel-node 执行, 而不是 node
  "skipFiles": [
    "<node_internals>/**"
  ]
},

// 调试 npm script 命令
// 执行 npm run debug
{
  "type": "node",
  "request": "launch",
  "name": "npm script: debug",
  "runtimeExecutable": "npm",
  "runtimeArgs": [
    "run-script",
    "debug"
  ],
  "port": 9229,
  "skipFiles": [
    "<node_internals>/**"
  ]
},
```

或 `cmd + ,` 修改全局配置

```js
"launch": {
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "es6: debug",
      // workspaceFolder 当前工作路径：当前文件所在的工作空间
      // 或者使用全局安装的 babel-node `npm i -g @babel/node @babel/core @babel/preset-env`
      "program": "${workspaceFolder}/test.js",
      // 改用 babel-node 执行, 而不是 node
      "runtimeExecutable": "babel-node",
      "skipFiles": [
        "<node_internals>/**"
      ]
    }
  ]
},
```

2. 安装依赖

`npm i @babel/preset-env @babel/core --save-dev`

3. 配置 babel

项目根目录配置 `babel.config.js`

```js
module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'targets': {
          node: 'current',
          esmodules: true,
        }
      }
    ]
  ]
}
```

此时你就可以修改路径，比如调试根目下的 test.js 文件(可 import es6 文件)
