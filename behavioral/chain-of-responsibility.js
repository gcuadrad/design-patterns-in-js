/*
  Cadena de responsabilidad:
  Encapsular un dato y agregando métodos a este para alternar el  valor que contiene.
  Concatenar métodos, se utiliza bastante en programación funcional.
  Va a quedar explicito con los métodos que estamos cambiando el valor dentro del contenedor.
  Ejemplo Jquery o Lodash
*/

class Add {
  constructor(v = 0) {
    this.val = v;
  }

  add(v) {
    // al retornar this podremos encadenar el valor n veces
    this.val += v;
    return this;
  }
}

const value = new Add(1);
console.log(value
  .add(1)
  .add(2)
  .add(4)
  .val);
