/*
   El patron prototipo es tomar un objeto ya definido para generar prototipos
   para otros objetos. Se puede hacer con Object.create que creará un nuevo objeto
   y dejará todos los atributos y métodos del objeto original en su prototype
   Ventajas: Elimina la duplicidad de código
*/


const dog = {
  race: 'Kilterrier',
  // No es posible usar funcionen arrow porque estás no contienen contexto de this
  bark: function() {
    console.log(`Woof!, im a ${this.race}`);
  }
}

const kiltro = Object.create(dog);
kiltro.bark();

// el objeto se retornará vacío porque las propiedades y métodos se encuentan en el prototipo
console.log(kiltro);
kiltro.race = 'Super Dog!';
kiltro.bark();
