/*
  Currying:
  Es la técnica que transforma todas las funciones en unarias (solo reciben un argumento)
*/

const add = (a, b) => a + b;
add(1, 5);

// función que recibe un argumento, que retorna una función que recibe otro argumento, etc.
// finalmente cuando termine de recibir todos los argumento la función se ejecutará

const add = (a) => (b) => a + b;
add(1)(5);

// O también
result = add(1);
result(5);
