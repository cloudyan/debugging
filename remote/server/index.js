const http = require('http');
const qs = require('querystring');

// 协议名必填, 如果同时存在 http 和 https 就写两条
const allowOrigin = [
  'http://127.0.0.1:5000',
  'http://localhost:5000',
  'http://localhost:8090',
  'http://127.0.0.1:8090',
  // 'https://localhost:5500',
];

// 用于测试 xhr.html
// node
const PORT = 8888;
http.createServer((req, res) => {
  const { method, headers: { origin } } = req;
  if (allowOrigin.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // res.setHeader('Access-Control-Allow-Origin', '*');

  // 通过参数控制返回结果
  // code

  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end('');
  } else {
    const search = req.url.split('?')[1] || '';
    const params = qs.parse(search) || {};
    let status = 200;
    let errno = 0;
    let errmsg = '成功';
    if (params.timeout) {
      console.log('模拟请求超时')
      return
    }
    status = Number(params.code);
    console.log(status);
    if (Number.isInteger(status)) {
      if (status.toString().length === 3) {
        res.statusCode = status
        if (!(status >= 200 && status <= 299 || status == 304)) {
          errno = 1
          errmsg = '网络请求错误';
        }
      } else {
        errno = status || 0;
      }
      if (errno != 0) {
        errmsg = '业务逻辑发生错误';
      }
    } else {
      errno = 2;
      errmsg = '请求参数 code 错误，请输入正整数';
    }
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    const data = JSON.stringify({
      data: {
        message: '数据',
      },
      errno,
      errmsg,
    })
    res.end(data);
  }
}).listen(PORT, () => {
  console.log('服务启动成功, 正在监听: ', PORT);

  // node 日志，数字为黄色，字符串为正常色
  console.log(200, '200')
})
