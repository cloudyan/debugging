export function hello(name: string) {
  console.log(`hello ${name}`)
}

export class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  say() {
    return 'Hi, my name is ' + this.name + ', my age is ' + this.age
  }
}
