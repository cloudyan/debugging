
// whistle 的配置的生成和共享
// whistle 采用的配置文件默认文件名为 .whistle.js，该文件为支持cmd模块格式的js文件。

// .whistle.js
exports.name = '【本地环境】qq.ketang项目';
exports.rules = [
  'qq.ketang.com/  http://127.0.0.1:3000/ excludeFilter://^qq.ketang.com/cgi-*',
  'sass.ketang.com/  resCors://*'
].join('\n');
