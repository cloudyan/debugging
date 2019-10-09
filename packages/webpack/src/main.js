import { sleep } from './utils'

sleep(3000).then(() => {
  console.log('after sleep')
})
console.log('main.js')
