# http-proxy-middleware

- https://github.com/chimurai/http-proxy-middleware

```js
const { createProxyMiddleware, responseInterceptor } = require('http-proxy-middleware')
createProxyMiddleware({
  target: "https://xxx.com/xxapp/api",
  changeOrigin: true,
  logLevel: "debug",
  pathRewrite: {
    "^/api/common": "",
  },
  selfHandleResponse: true,
  ...decodeResProxy(),
  on: {
    onProxyRes(proxyRes, req, res) {

    },
    // 下面的方式不生效？
    proxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
      // onProxyRes(proxyRes, req, res) {
      proxyRes.headers['x-added'] = 'createProxyMiddleware'; // add new header to response
      if (req.baseUrl === '/api/common') {
        const exchange = `[DEBUG] ${req.method} ${req.path} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path} [${proxyRes.statusCode}]`;
        console.log(exchange);

        proxyRes.headers['x-added'] = 'createProxyMiddleware deal';
        // proxyRes.statusCode === 200
        if (proxyRes.headers['content-type'].includes('application/json')) {
          proxyRes.headers['x-added'] = 'createProxyMiddleware 0';
          let data = JSON.parse(responseBuffer.toString('utf8'));

          // manipulate JSON data here
          data = Object.assign({}, data, { extra: 'foo bar' });

          // return manipulated JSON
          const result = JSON.stringify(data);
          console.log(result);
          // return result;
        } else {
          proxyRes.headers['x-added'] = 'createProxyMiddleware 1';
        }

      }
      return responseBuffer;
    }),
  },
})

```

以下方式经测试可行

```js
function decodeResProxy() {
  return {
    selfHandleResponse: true,
    onProxyRes(proxyRes, req, res) {
      const contentType = proxyRes.headers["content-type"];

      if (contentType && contentType.includes("application/json")) {
        let body = "";
        proxyRes.on("data", (chunk) => {
          body += chunk;
        });
        proxyRes.on("end", () => {
          try {
            const data = JSON.parse(body);
            // 修改JSON值, 处理数据解密
            data.fedFormat = "数据已解密";
            data.dataOrigin = data.data;
            data.data = decode(data.data);
            // 将修改后的JSON作为响应返回
            res.setHeader("content-type", "application/json; charset=utf-8");
            res.end(JSON.stringify(data));
            // proxyRes.pipe(res);
          } catch (error) {
            console.log("req.originalUrl", req.originalUrl);
            console.error("Error parsing JSON:", error);
          }
        });
      } else {
        // 对于非JSON数据，将原始响应返回
        proxyRes.pipe(res);
      }
    },
  };
}

function decode(str) {
  return str
}
```
