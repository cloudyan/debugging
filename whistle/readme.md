# Whistle

背景

因为接口响应内容是加密的，不方便开发调试，所以想研究下通过控制代理的脚本动态修改响应内容。

于是又要增强下调试手段了，Whistle 老早就听说过，但未做了解，目前觉得这个可以做到脚本动态解密响应内容，所以下面学习下。

- [whistle github](https://github.com/avwo/whistle)
  - [Mac client](https://github.com/avwo/whistle-client/releases)
  - [Windows client](https://github.com/avwo/whistle-client/releases)
- [whistle](https://wproxy.org/whistle/): 基于 Node 实现的跨平台 Web 调试代理工具。
- 教程
  - Whistle 系列入门教程
    - [Whistle系列之（一）我为什么推荐大家使用Whistle](https://juejin.cn/post/6844904167404732430)
    - [Whistle系列之（四）Whistle项目配置文件](https://juejin.cn/post/6844904167400554510)
  - [Whistle 实现原理](https://juejin.cn/post/7037302072815026207)

## 功能

- NetWork: 查看请求响应的详细信息及请求列表的Timeline
- Rules: 匹配规则，whistle核心，详见配置方式
- Values: 配置key-value的数据，在Rules里面配置可以通过{key}获取
- Plugins: 显示所有已安装的插件列表，开启关闭插件功能

## 配置方式

whistle 默认的配置方式是将匹配模式(pattern)写在左边，操作uri(operatorURI)写在右边。这样，whistle会将请求的url与pattern进行匹配

pattern和operatorURI也可以左右互换（[在这里](https://wproxy.org/whistle/mode.html)）

```bash
# 默认方式
# pattern operatorURI
qq.ketang.com/  http://127.0.0.1:3000/ excludeFilter://qq.ketang.com/cgi-*

# 传统 hosts
# operatorURI pattern
127.0.0.1  www.domain1.com www.domain2.com www.domainN.com
```

### 示例

Rules

```bash
# 此处使用的 {juejinList.json} 在 Values 中配置
https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed file://{juejinList.json}
# https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed resCors://{cors.json}

# 解决跨域
# 添加 access-control-allow-origin: * 响应头
# www.baidu.com resCors://*

# resScript 示例
https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed resScript://{resScript.js}

# 页面注入 vConsole
https://juejin.cn/ whistle.inspect://vConsole


# 跨域
*.xxx.com/ resHeaders://{Allow-Origin.json}
# Access-Control-Allow-Origin: *
```

Values

- juejinList.json
- resScript.js

```js
// resScript.js 示例
const options = parseUrl(url);
console.log('options', options);
rules.push(`${options.host} resCookies://{cookies.json}`);
values['cookies.json'] = {
  serverIp,
  clientIp,
  from: 'resScript'
};
```

cors.json

```json
origin: https://juejin.cn
```

怎么通过脚本修改 body 响应体内容？

### whistle.script

handleRequestRules

```bash
# 测试已生效
whistle.script://test1 juejin.cn www.qq.com www.baidu.com echo.websocket.org
```

handleRequest

```bash
# 这里不能用 whistle.script，否则请求不会转发到 handleRequest
# whistle.script只会执行handleXxxRules
# 你也可以通过在 handleXxxRules 里面设置 script://test(a,b,c)，实现转发
script://test2.js juejin.cn www.qq.com www.baidu.com echo.websocket.org
```

### 脚本

参见 [scripts](./scripts)

## 插件开发

- [插件开发-文档](https://wproxy.org/whistle/plugins.html)
- 插件示例 https://github.com/whistle-plugins/examples
- 插件仓库 https://github.com/whistle-plugins

### 常用插件

| 插件名称        | 描述 |
| -------------- | --- |
| whistle.script | The plugin for the extension script for whistle |
| whistle.proxyauth | 给whistle代理的请求设置用户名密码 |
| whistle.inspect | 集成 vConsole、eruda、mdebug 等调试H5页面工具的插件 |
| whistle.test-ui |  |
| whistle.autosave | 自动保存指定抓包数据到本地目录 |

## 操作示例

- server
- client

其他文章

- https://juejin.cn/post/6861882596927504392
  - Juejin 操作案例
  - jsAppend://{myJS}
  - 查看移动端 DOM 样式 weinre://test
- https://juejin.cn/post/7077385311642189832
  - jsPrepend 语法对某个页面注入 JS 脚本
- [使用whistle开发插件修改请求参数和响应body](https://zhuanlan.zhihu.com/p/580964180)
