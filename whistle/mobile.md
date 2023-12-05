# 移动端开发

移动端开发，除了配置代理外，还可能使用 eruda 或者 vConsole 工具

- [erudu github](https://github.com/liriliri/eruda/blob/master/README_CN.md)
- [vConsole github](https://github.com/Tencent/vConsole/blob/dev/README_CN.md)

whistle 通过拓展插件方便地集成了这部分功能，省去了项目中手动引入的麻烦。

## whistle.inspect 插件

配置规则

```bash
qq.ketang.com/  http://127.0.0.1:3000/ whistle.inspect://vConsole
# 如果不想使用vConsole而是要使用eruda，可以用下面的规则
# qq.ketang.com/  http://127.0.0.1:3000/ whistle.inspect://eruda
```

一般来说，eruda/vConsle的功能已经满足移动端调试的基本使用需求，如果想要直接在开发机上查看移动端的console输出，或者有使用weinre等工具等更多的移动端调试需要，可以参考 whistle的作者aven的这一篇文章：

- [利用whistle调试移动端页面](https://juejin.cn/post/6844903592424374285#heading-2)
