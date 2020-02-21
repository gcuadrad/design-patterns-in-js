/*
  Patrón facade (se pronuncia fasád):
  Simplificar una llamado a una función, por ejemplo si una clase al ser llamada utiliza
  varios parámetros que siempre se repiten, puedes crear un facade intermedio que
  solicite solo los parámetros que cambian y el resto los agregue él.
  Ventajas: Simplificar la interacción del cliente con la clase.
*/


// Llamado get a Api de users del sitio jsonplaceholder
// const https = require('https');
//
// const options = {
//   hostname: 'jsonplaceholder.typicode.com',
//   path: '/users',
//   method: 'GET',
// }
//
// const request = https.request(options, (response) => {
//   response.setEncoding('utf8');
//   let body = '';
//   response.on('data', (dataFragment) => {
//     body += dataFragment;
//   });
//
//   response.on('end', () => {
//     const parsedBody = JSON.parse(body);
//     console.log(parsedBody);
//   });
// });
//
// request.on('error', (error) => {
//   console.log(error);
// });
//
// request.end();

// si el método siempre será get y la url siempre la misma (solo la ruta variará).
// Podemos crear un facade
const https = require('https');

const get = (path) => new Promise((resolve, reject) => {
  const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: path,
    method: 'GET',
  }

  const request = https.request(options, (response) => {
    response.setEncoding('utf8');
    let body = '';
    response.on('data', (dataFragment) => {
      body += dataFragment;
    });

    response.on('end', () => {
      const parsedBody = JSON.parse(body);
      resolve(parsedBody);
    });
  });

  request.on('error', (error) => {
    reject(error);
  });

  request.end();
});

const main = async () => {
  const result = await get('/users');
  console.log(result);
}

main();
