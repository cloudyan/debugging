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

## 使用

```bash
lerna bootstrap

# 全局安装
npm i -g @babel/core @babel/cli @babel/node @babel/preset-env
# 然后可以运行
npx babel-node
```

https://babeljs.io/docs/en/babel-node

参考：

- https://github.com/Microsoft/vscode-recipes
- https://github.com/katopz/vscode-debug-nodejs-es6
- https://juejin.im/post/5c6b6defe51d45798b51e4b2
