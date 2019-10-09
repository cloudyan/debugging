
export function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(timeout)
    }, timeout)
  })
}

export function noop() {}
