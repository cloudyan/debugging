
import { Version } from '@dwdjs/utils'
import { sleep } from './utils'
import { noop } from './utils/utils'

sleep(3000).then(() => {
  console.log('after sleep')
})

console.log('main.js')

const version = new Version('3.4.0')
noop('version gt: ' + version.gt('3.4.0'))
