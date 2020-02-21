/*
  Patrón adapter:
  En el caso de que tengas una Api V1 y V2 y quieras actualizar el código legacy sin tener
  realizar cambios en cada clase, puedes crear una clase adaptador que emulará ser V1
  (Su forma de llamarse y sus parámetros) pero por dentro será V2.
*/

class ApiV1 {
  constructor() {
    this.operations = function(url, opts, verb) {
      switch (verb) {
        case 'get':
          // return fetch...
        case 'post':
          // return fetch...
        default:
          return;
      }
    }
  }
}

class ApiV2 {
  constructor() {
    this.get = function(url, opts) {
      // return axios.get...
    };
    this.post = function(url, opts) {
      // return axios.post...
    };
  }
}

class ApiAdapter {
  constructor() {
    const apiV2 = new ApiV2();
    this.operations = function(url, opts, verb) {
      switch (verb) {
        case 'get':
          return apiV2.get(url, opts);
        case 'post':
          return apiV2.post(url, opts);
        default:
          return;
      }
    }
  }
}

const apiV1 = new ApiV1();
apiV1.operations('www.google.com', { page: 10 }, 'get');

const apiV2 = new ApiV2();
apiV2.get('www.google.com', { page: 10 });

const apiAdapter = new ApiAdapter();
apiAdapter.operations('www.google.com', { page: 10 }, 'get');
