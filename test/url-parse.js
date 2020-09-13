
import urlParse from 'url-parse'

const log = (obj) => {
  console.log(JSON.stringify(filter(obj)))
  console.log('\n')
}

function filter(obj = {}, condition = ['', undefined, null]) {
  const temp = JSON.parse(JSON.stringify(obj))
  for (const key in temp) {
    if (condition.includes(temp[key])) {
      delete temp[key]
    }
  }
  return temp
}

// urlParse 输出
// {
//   slashes: false,
//   protocol: '',    // √ https: miniapp:
//   hostname: '',    // √ m.mishifeng.com 第一个斜线之前的部分
//   pathname: '',    // √ /detail /detail/ /index.html pages/index/index
//   query: '',       // √ ?id=123
//   hash: '',        // √ #hash hash应在 query 后
//   auth: '',
//   host: '',        // hostname + port
//   port: '',        // 8080
//   password: '',    // x
//   username: '',    // x
//   origin: 'null',  // protocol + '//' + host
//   href: 'pages/index/index', // https://m.mishifeng.com:8080/detail?id=123#hash
// }

log(urlParse('//m.mishifeng.com'))
log(urlParse('https://m.mishifeng.com'))
log(urlParse('https://m.mishifeng.com/'))
log(urlParse('https://m.mishifeng.com/detail/'))
log(urlParse('https://m.mishifeng.com/detail?id=123'))
log(urlParse('https://m.mishifeng.com:8080/detail?id=123'))
log(urlParse('https://m.mishifeng.com:8080/detail?id=123#hash?spm=123'))

// 小程序
log(urlParse('detail'))
log(urlParse('pages/index/index'))
log(urlParse('miniapp://pages/index/index?spm=123'))
log(urlParse('miniapp://?spm=456'))
log(urlParse('miniapp:///?spm=456'))
log(urlParse('dwd://msf/detail?id=123#abc'))

// 其他
// 多?号是异常的 url
log(urlParse('https://m.haoshiqi.net/index.html?from=singlemessage&isappinstalled=1?sid=150'))
// hash 在前是异常的 url
log(urlParse('https://m.haoshiqi.net/index.html#detail?from=singlemessage&isappinstalled=1?sid=150'))
log(urlParse('https://m.haoshiqi.net/index.html?sid=150#detail'))
