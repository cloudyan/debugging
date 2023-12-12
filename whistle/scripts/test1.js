

// https://github.com/whistle-plugins/whistle.script

// 设置规则(测试已生效)
// whistle.script://test1.js(a,b,c) juejin.cn www.qq.com www.baidu.com echo.websocket.org
exports.handleRequestRules = async (ctx) => {
  console.log(process.args); // output: ["a", "b", "c"]
  // ctx.fullUrl 可以获取请求url
  // ctx.headers 可以获取请求头
  // ctx.options 里面包含一些特殊的请求头字段，分别可以获取一些额外信息，如请求方法、设置的规则等
  ctx.rules = ['juejin.cn file://{test.html}'];
  ctx.values = { 'test.html': 'Hello world.' + JSON.stringify(process.args) };
};
