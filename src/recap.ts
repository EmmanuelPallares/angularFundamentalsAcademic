const username: string = 'Emmanuel';
const suma = (a: number, b: number) => {
  return a + b;
};
suma(1, 1);

class Person {
  constructor(public age: number, public lastname: string) {}
}

const diego = new Person(18, 'Pallares');
