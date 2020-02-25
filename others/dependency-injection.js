/*
  Depency injection:
  Entregarle el control de los métodos que se van a ejecutar a una librería que nosotros
  le vamos a injectar, que no sabemos que es, es transparente y lo otro es el eliminar los require
  al principio de la aplicación
  ventajas: hace el testeo más sencillo
*/


const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  res.send(data)
});

app.listen(port, () => console.log(`example ${port}`));


// En otro archivo
// handlers.js función que cuando la ejecutemos devolverá otra función
module.exports.get = (axios) => async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  res.send(data)
}

// main.js
const express = require('express');
const axios = require('axios');
const { get } = require('./handlers');
const app = express();
const port = 3000;

app.get('/', get(axios));
