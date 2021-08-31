class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    return 'Hi, my name is ' + this.name + ', my age is ' + this.age
  }
}

const person = new Person('jack', 20)

console.log(person.say())
