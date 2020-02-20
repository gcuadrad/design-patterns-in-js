/*
  A diferencia de Modulo, modulo revelador contiene api pública y una privada,
  No es necesario usar la sintaxis de objetos literales para definir un módulo
  podemos utilizar una función o una función autoejecutable (IIFE, Immediately Invoked Function Expression)
*/

const myModuleRevealing = (() => {
  const x = {};
  return {
    a: () => console.log(x),
    b: (key, value) => x[key] = value
  }
})();

myModuleRevealing.a();
myModuleRevealing.b('color', 'red');
myModuleRevealing.a();
