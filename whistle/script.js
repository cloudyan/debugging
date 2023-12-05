
// https://github.com/whistle-plugins/whistle.script

// 设置规则
// exports.handleRequestRules = async (ctx) => {
//   // ctx.fullUrl 可以获取请求url
//   // ctx.headers 可以获取请求头
//   // ctx.options 里面包含一些特殊的请求头字段，分别可以获取一些额外信息，如请求方法、设置的规则等
//   ctx.rules = ['juejin.cn file://{test.html}'];
//   ctx.values = { 'test.html': 'Hello world.' };
// };

// 操作请求
exports.handleRequest = async (ctx, request) => {
	// ctx.fullUrl 可以获取请求url
	// ctx.headers 可以获取请求头
	// ctx.options 里面包含一些特殊的请求头字段，分别可以获取一些额外信息，如请设置的规则等
	// ctx.method 获取和设置请求方法
	// ctx.req
	// ctx.res
	const { req, res } = ctx;
	const client = request((svrRes) => {
		res.writeHead(svrRes.statusCode, svrRes.headers);
      	console.log('handleRequest res', res);
		svrRes.pipe(res);
		// try {
			// const body = await ctx.getStreamBuffer(svrRes);
			// delete svrRes.headers['content-encoding'];
			// res.writeHead(svrRes.statusCode, svrRes.headers);
			// res.end(body);
		// } catch (err) {}
	});
	req.pipe(client);
};


exports.handleRequest = function* (ctx, next) {
  // ctx.fullUrl 可以获取请求 url
  // ctx.headers 可以获取请求头
  // ctx.options 里面包含一些特殊的请求头字段，分别可以获取一些额外信息，如请设置的规则等
  // ctx.method 获取和设置请求方法
  // const reqBody = yield ctx.getReqBody(); // 获取请求 body 的 Buffer 数据，如果没有数据返回 null
  // const reqText = yield ctx.getReqText(); // 获取请求 body 的文本，如果没有返回 ''
  // const formData = yield ctx.getFormData(); // 获取表单对象，如果不是表单，返回空对象 {}
  // console.log(ctx.method, ctx.headers, reqBody);
  // ctx.req.body = String | Buffer | Stream | null，修改请求的内容
  // 只有执行 next 方法后才可以把征程的请求发送出去
  // 如果需要自定义请求，可以通过全局的 request 方法操作
  // console.log(request);
  const {statusCode, headers} = yield next();
  console.log(ctx.fullUrl, statusCode, headers);
  // const resBody = yield ctx.getResBody();
  // const resText = yield ctx.getResText();
  // ctx.status = 404; 修改响应状态码
  // ctx.set(headers); 批量修改响应头
  // ctx.set('x-test', 'abc'); 修改响应头
  // ctx.body = String | Buffer | Stream | null; 修改响应内容
}
