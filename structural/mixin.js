/*
  Patrón mixin:
  Tomar una clase existente y agregarle funciones sin necesidad de alterar la clase.
*/


let mixin = {
  sayHi() {
    console.log(`Hello ${this.name}!`);
  },
  sayBye() {
    console.log(`Bye ${this.name}!`);
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}
// Agregamos los métodos del mixin en el prototipo con Object.assign()
Object.assign(User.prototype, mixin);

const user = new User('John');
console.log(user.sayHi());
