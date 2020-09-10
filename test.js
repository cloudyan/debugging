const hello = name => `hello ${name}`

console.log(hello('jack'))


const aa = /((\d){0,32}(\.)?(\d){0,32}){32,32}/g

function t(n) {
  console.log(aa.test(n))
}
t(12345678901234567890123456789012)
t(12345678901234567890.12345678901)
t(12345678901234567890.1234567890)
