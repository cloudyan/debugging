# 新建规则 Rules

## 本地环境

以下为配置学习示例

```bash

# 示例 1
# 将 qq.ketang.com 转发到 本地路径
# 但 cgi 接口不需要转发，依然走线上

# bad, 不是我们所希望的
# 这条规则将所有 qq.ketang.com/ 及其子路径下的请求 转发到了http://127.0.0.1:3000/下
# qq.ketang.com/cgi-proxy/xxxxx 也会转发至 http://127.0.0.1:3000/cgi-proxy/xxxx
# qq.ketang.com/  http://127.0.0.1:3000/

# good，使用excludeFilter规则, 路径匹配
# qq.ketang.com/cgi-proxy/ 及其子路径下的请求不会被转发至 http://127.0.0.1:3000/cgi-proxy/
qq.ketang.com/  http://127.0.0.1:3000/ excludeFilter://qq.ketang.com/cgi-proxy/

# also good, 使用excludeFilter规则, 通配符匹配
# qq.ketang.com/cgi-proxy/, qq.ketang.com/cgi-bin/ ... 这类的请求都不会被转发
qq.ketang.com/  http://127.0.0.1:3000/ excludeFilter://qq.ketang.com/cgi-*

# also good, 使用excludeFilter规则, 正则匹配
# qq.ketang.com/cgi-proxy/, qq.ketang.com/cgi-bin/ ... 这类的请求都不会被转发
qq.ketang.com/  http://127.0.0.1:3000/ excludeFilter:///^\w+://qq\.ketang\.com/cgi-/

# 详细 [Whistle规则的模式匹配](https://wproxy.org/whistle/pattern.html)



# 示例 2
# 以本地文件作为响应
# qq.ketang.com/cgi-proxy/getMyName 以本地的//User/dug/test/getMyName.json文件作为响应,
qq.ketang.com/cgi-proxy/getMyName  file:///User/dug/data/getMyName.json


# 分别将线上的css和js的访问 指向本机的项目路径
qq.ketang.com/assets/css/ xfile:///User/myName/myWork/ketang_pro/assets/css/
qq.ketang.com/assets/js/  xfile:///User/myName/myWork/ketang_pro/assets/js/


# 示例 3
# 以插件支持特殊的需求场景
# http://i.cdn.com/??x.js,y.js,z.js
# 可通过社区的whistle.combo插件可以实现将combo url切割成数组 [x.js, y.js, z.js]并分别组合成 http://i.cdn.com/x.js, http://i.cdn.com/y.js, http://i.cdn.com/z.js
# whisle.combo https://github.com/whistle-plugins/whistle.combo

# whislte插件列表 https://github.com/whistle-plugins

```

