/*
  Observer (publish suscriber):
  Consta de dos actores el publicador y el suscriptor, donde el suscriptor escuchará
  las modificaciones del publicador, si ocurre en evento en el publicador el suscriptor
  se enterará y reaccionará ejecutando algo.

  Ejemplo AddEventListener
*/


const user = new User()

const init = () => {
  user.on('login', userLoggedIn);
  user.on('login', retrieveInitData);
}

const userLoggedIn = () => {
  // usuario inició sesión
}

app.init();

// en algún lugar de la app
const login () => {
  // lógica de inicio de sesiónote

  // luego:
  user.trigger('login')
}

login()
