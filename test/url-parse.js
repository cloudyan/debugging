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
log(urlParse('//m.mishifeng.com'))
log(urlParse('https://m.mishifeng.com'))
log(urlParse('https://m.mishifeng.com/'))
log(urlParse('https://m.mishifeng.com/detail/'))
log(urlParse('https://m.mishifeng.com/detail?id=123'))
log(urlParse('https://m.mishifeng.com:8080/detail?id=123'))
log(urlParse('https://m.mishifeng.com:8080/detail?id=123#hash?spm=123'))
log(urlParse('detail'))
log(urlParse('pages/index/index'))
log(urlParse('miniapp://pages/index/index?spm=123'))
log(urlParse('miniapp://?spm=456'))
log(urlParse('miniapp:///?spm=456'))
log(urlParse('dwd://msf/detail?id=123#abc'))
log(urlParse('https://m.haoshiqi.net/index.html?from=singlemessage&isappinstalled=1?sid=150'))
log(urlParse('https://m.haoshiqi.net/index.html#detail?from=singlemessage&isappinstalled=1?sid=150'))
log(urlParse('https://m.haoshiqi.net/index.html?sid=150#detail'))
