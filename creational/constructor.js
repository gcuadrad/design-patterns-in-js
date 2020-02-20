/*
  Patrón Constructor:
  Permite crear objetos en base a una clase.
  Y sus propiedades y métodos van a ser copiados en la nueva instancia.
*/

class MyClass {
  constructor(myParam) {
    this.myProperty = myParam
    this.myMethod = () => {
      // im a method
    }
  }
}

const instance = new MyClass(4);
console.log(instance);
