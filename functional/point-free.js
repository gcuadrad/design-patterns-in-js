/*
  Programación tácita o point free:
  paradigma o estilo en el que nos olvidamos de los argumentos de una función
  Ventajas: sirve para la composición o para ordernar código
*/

// Haciendo un ejemplo similar a express
// dónde se llama a un método y el se le entrega un callback como parámetro
// Y en ese callback escribimos nuestra lógica
app.get('/users', (req, res) => {
  // Do something
})

// Método interno
const f = (ruta, callback) => {
  const requestResult = requestMethod(ruta);
  callback(requestResult);
}

// llamado a método, esto sería una mala idea
// ya que costaría hacer test unitarios
f('/users', (result) => {
  // Do something
});

// Le pasamos la función y declaramos la función fuera
// El resultado es más ordenado
const handleResult = (result) => {
  // Do something
}

f('/users', handleResult);
