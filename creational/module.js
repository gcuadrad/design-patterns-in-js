/*
 El patron modulo se encuentra basado en los objetos literales de JS,
 al definir un objeto literal estamos definiendo un módulo.
 Toda la api (o contenido visible) es pública
*/


const myModule = {
  prop: 'my prop',
  config: {
    lenguaje: 'en',
    cache: true
  },
  setConfig: (conf) => {
    myModule.config = conf
  },
  isCacheEnabled: () => {
    console.log(myModule.config.cache ? true : false);
  }
}

console.log(myModule.prop);
console.log(myModule.isCacheEnabled);
