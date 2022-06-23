export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('bsuke', 37);
console.log(me);
