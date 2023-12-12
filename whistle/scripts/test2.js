

// https://github.com/whistle-plugins/whistle.script

// 设置规则

// 操作请求

// script://test2.js(a,b,c) juejin.cn www.qq.com www.baidu.com echo.websocket.org
exports.handleRequest = async (ctx, request) => {
  console.log(process.args); // output: ["a", "b", "c"]
  // ctx.fullUrl 可以获取请求url
  // ctx.headers 可以获取请求头
  // ctx.options 里面包含一些特殊的请求头字段，分别可以获取一些额外信息，如请设置的规则等
  // ctx.method 获取和设置请求方法
  // ctx.req
  // ctx.res
  const { req, res } = ctx;
  const client = request((proxyRes) => {
    const contentType = proxyRes.headers["content-type"];
    console.log('handleRequest contentType', contentType)
//     res.writeHead(svrRes.statusCode, svrRes.headers);
//     console.log('handleRequest res', res);

    if (contentType && contentType.includes("application/json")) {
      console.log(111111)
        let body = "";
        proxyRes.on("data", (chunk) => {
          body += chunk;
        });
        proxyRes.on("end", () => {
          try {
            console.log('body');
            console.log(body);
            const data = body;
            // 掘金接口是 fetch 请求
            res.end(data);
            // 修改JSON值, 处理数据解密
//             data.fedFormat = "bizData数据已解密";
//             data.bizDataOrigin = data.bizData;
//             data.bizData = decode(data.bizData);
            // 将修改后的JSON作为响应返回
            res.setHeader("content-type", "application/json; charset=utf-8");
            res.end(JSON.stringify(data));
            // proxyRes.pipe(res);
          } catch (error) {
            console.log("req.realUrl", req.realUrl);
            console.log("req.url", req.url);
            console.error("Error parsing JSON:", error);
            proxyRes.pipe(res);
          }
        });
      } else {
        // 对于非JSON数据，将原始响应返回
        proxyRes.pipe(res);
      }

//     svrRes.pipe(res);
    // try {
      // const body = await ctx.getStreamBuffer(svrRes);
      // delete svrRes.headers['content-encoding'];
      // res.writeHead(svrRes.statusCode, svrRes.headers);
      // res.end(body);
    // } catch (err) {}
  });
  req.pipe(client);
};




// exports.handleReqWrite = (req, res, options) => {
//   req.pipe(res);
// };

// exports.handleResWrite = (req, res, options) => {
//   req.pipe(res);
// };
