/*
  IFFE:
  Es una expresión de función la que es ejecutada inmediatamente al momento de definirla
  nos ayudará con el patron módulo revelador, también con los nombres de la varias
  para que queden solo en el alcance de la función que hemos definido
*/


const result = (()=>{
  const x = 'Hi!';
  console.log(x);
})();
