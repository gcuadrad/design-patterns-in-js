/*
  Iterator:
  Mediante una función, onjeto o clase accederemos a dos metodos, un next y otro de value
  También saber si hemos terminado de iterar una colacción
*/

//  función generadora
function* iterator(col) {
  var nextIndex = 0;

  while (nextIndex < col.length) {
    yield col[nextIndex++];
  }
}

const x = [1, 2, 3, 4, 5, 6, 7];
const gen = iterator(x);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
