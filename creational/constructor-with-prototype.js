/*
  Constructor con prototipo:
  Todos los metodos o propiedades que asignemos al prototipo
  se comparten entre todas las instancias.
  Ventaja, usar menos espacio en memoria.
  Desventaja, al modificar un prototypo de una instancia se modificará en todas.
*/

class MyClass {
  constructor(myParam) {
    this.myProperty = myParam
  }

  myMethod() {
    // im a prototype method
  }
}

const instance = new MyClass(4);
console.log(instance);
