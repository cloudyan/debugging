export function hello(name) {
  console.log(`hello ${name}`)
}

export class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    return 'Hi, my name is ' + this.name + ', my age is ' + this.age
  }
}
