export function noop(tip = 'noop') {
  console.log(tip)
  let sum
  for (let i = 0; i < 1000; i++) {
    sum += i
  }
  console.log(sum)
}
