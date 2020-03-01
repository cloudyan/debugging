
import { qs } from 'url-parse';




console.log(qs.parse('?aa=' + encodeURIComponent('https://baidu.com?id=123')))
console.log(qs.parse('1111'))
const reg = /^([A-Za-z0-9])+([-|_]([a-z0-9]+)){0,3}$/;

console.log(reg.test('about_us'))
console.log(reg.test('detail'))
console.log(reg.test('product-tab-list'))
