// A demás de crear clases podemos extenderlas para agregar nuevas funciones
// Estamos sobrescribiendo la clase Object para agregar el método log
Object.prototype.log = function () {
  // this en este contexto significa el objeto en si
  console.log(this);
}

// Sintaxis preferida a new Object
const x = { a: 1 };

console.log(x.log());
// las versiones antiguas de js no soportan la función trim
// Aquí agregamos el método en caso no existir
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    try {
      return this.replace(/^\s+|\s+$/g, '');
    } catch (e) {
      return this;
    }
  }
}

const y = '        lol          '.trim();
// Puedes usar el método log porque String hereda de Object
y.log();
