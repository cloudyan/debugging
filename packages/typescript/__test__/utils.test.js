import { hello, Person } from './utils'

test('hello', () => {
  expect(hello('mm')).toBe('hello mm');
});

test('Person', () => {
  const p = new Person('jack', 20)
  expect(p.say()).toBe('Hi, my name is jack, my age is 20');
});
