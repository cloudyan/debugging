# 调试 nodejs

方法是通用的，但凡是 nodejs 的脚本，都可以借鉴下面的方法调试

- nodejs cli
- express, koa
- es6

1. 使用 `--inspect`
    - `npx babel-node --inspect ./src/index.js`
2. 可以使用 vscode 调试

## 使用 `--inspect` 调试

- 在debugging 根目录调试，需要 `debugging/babel.config.js` 配置文件
- 在当前目录调试，需要 `nodejs/.babelrc.js` 配置文件

执行 `npm run dev1`

这个是小脚本，而一旦执行，就执行完退出了，没触发时机打断点，TODO: 待解决

这种方法目前针对 express 和 koa 是可行的，脚本运行起来并不会退出，可以打开 `chrome://inspect` 打开调试界面

## 使用 vscode 调试
