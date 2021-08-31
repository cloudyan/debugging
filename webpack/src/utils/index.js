import { Version } from '@dwdjs/utils'
import { noop } from './utils'

export function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(timeout)
    }, timeout)
  })
}

const version = new Version('3.4.0')
noop('version gt: ' + version.gt('3.4.0'))
