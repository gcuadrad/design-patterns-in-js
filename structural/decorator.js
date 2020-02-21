/*
  Patrón decorator:
  Es similar al patrón mixin pero en vez de trabajar con clases trabaja con las instancias
  Le agregará métodos nuevos a las instancias sin necesidad de modificar cla clase original
*/

// Simple way

class Macbook {
  constructor() {
    this.price = 1000;
  }
}

const macbook = new Macbook();

macbook.addMomory = function() {
  this.price += 100;
}

macbook.addMomory();

console.log(macbook.price);

// Wrapper way

class Iphone {
  price() {
    return 1000;
  }
}


const addMemory = (iphone) => {
  const value = iphone.price();
  iphone.price = function() {
    return value + 100;
  }
}

const iphone = new Iphone();

addMemory(iphone);
console.log(iphone.price());
