/*
  Command:
  Interfaz unificada para que podamos ejecutar los métodos de un objeto en particular
  En vez de llamar un método de un objeto llamaremos una interfaz o método que se llamará
  execute o run, donde le indicaremos cuál es el método que queremos ejecutar seguido de los argumentos
  Ventajas:
  Desacoplar código, ya no estamos llamando el método directamente, los objetos lo podríamos
  definir en otros archivos y luego  importarlos.
*/


const Commander= (() => {
  const o = {
    buy: (x) => {
      console.log(`Buying ${x}`);
    },
    sell: (x) => {
      console.log(`Selling ${x}`);
    }
  }

  return {
    run: (command, args) => {
      if (!o[command]) {
        console.log('Command not found!');
        return;
      }
      o[command](args)
    }
  }
})()


Commander.run('buy', 'Car');
Commander.run('change', 'Moto');
