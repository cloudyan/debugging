// import cache from '../utils/cache';

// console.log(cache)

// cache.set('test1', [{id: 1, name: 'tab 1'}], 10000);

// cache.get('test1');

// setTimeout(() => {
//   cache.get('test1')
// }, 5000);
// setTimeout(() => {
//   cache.get('test1')
// }, 10000);
// setTimeout(() => {
//   cache.get('test1')
// }, 11000);

import LRU from 'lru-cache'

const cache = new LRU({
  max: 500,
  maxAge:  3600000, // 缓存一个小时
})

cache.set("key", "value", 1000)

console.log(cache.get("key")) // "value"

console.log(cache.dump())

setTimeout(() => {
  console.log(cache.get("key"))
}, 500)

setTimeout(() => {
  console.log(cache.get("key"))
}, 1000)


