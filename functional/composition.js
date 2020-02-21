/*
  Composition:
  Escribir el código de una forma desacoplada haciéndolo lo más reutilizable posible
*/

// Módulo original

const originalModule = (() => {
  const users = [
    { age: 12 , name: 'John', lastname: 'Doe' },
    { age: 6 , name: 'Juan', lastname: 'Perez' },
    { age: 32 , name: 'Hans', lastname: 'Meyer' },
  ];

  const getFirstAdult = (data) => {
    const adultUsers =  data.filter(x => x.age > 17);
    const firstAdult = adultUsers[0];
    const seletedAdult = {
      completeName: `${firstAdult.name} ${firstAdult.lastname}`,
      age: firstAdult.age,
    }
    return `${seletedAdult.completeName} has ${seletedAdult.age} ages`;
  }
  return {
    getFirstAdult: getFirstAdult(users)
  }
})();

console.log(originalModule.getFirstAdult);

// Podemos llevar partes del código a funciones

const moduleComposition = (() => {
  const users = [
    { age: 12 , name: 'John', lastname: 'Doe' },
    { age: 6 , name: 'Juan', lastname: 'Perez' },
    { age: 32 , name: 'Hans', lastname: 'Meyer' },
  ];

  const head = (xs) => xs[0];

  const formatUser = (x) => ({
    completeName: `${x.name} ${x.lastname}`,
    age: x.age,
  });

  const formatResult = (x) => `${x.completeName} has ${x.age} ages`;
  // El problema es que esto es difícil de leer
  const getFirstAdult = (data) => formatResult(formatUser(head(data.filter(x => x.age > 17))));
  return {
    getFirstAdult: getFirstAdult(users)
  }
})();

console.log(moduleComposition.getFirstAdult);

// compose (o pipe) recibe las funciones y las ejecuta en orden

const moduleCompositionWithCompose = (() => {
  const users = [
    { age: 12 , name: 'John', lastname: 'Doe' },
    { age: 6 , name: 'Juan', lastname: 'Perez' },
    { age: 32 , name: 'Hans', lastname: 'Meyer' },
  ];

  // Todas estas funciones nuevas se podrían ir a un archivo de utils o helpers
  // Con el fin de reutilizarlas en otra parte del código
  // reduceRight() es un reduce a la inversa
  const compose = (...functions) => (mainInput) => (
    //ejecuta la última función luego con el resultado ejecuta la siguiente, etc..
    functions.reduceRight((accumulator, currentFunction) => currentFunction(accumulator), mainInput)
  );
  const filter = (f) => (xs) => xs.filter(f)

  const head = (xs) => xs[0];

  const formatUser = (x) => ({
    completeName: `${x.name} ${x.lastname}`,
    age: x.age,
  });

  const formatResult = (x) => `${x.completeName} has ${x.age} ages`;

  // Ahora no lo leemos la implentación solo qué es lo que hace, no cómo lo hace
  // Se lee de abajo a arriba
  const getFirstAdult = compose(
      formatResult,
      formatUser,
      head,
      filter((x) => x.age > 17),
    )

  return {
    getFirstAdult: getFirstAdult(users)
  }
})();

console.log(moduleCompositionWithCompose.getFirstAdult);

// Pipe lo mismo pero con reduce normal, se leera de arriba a abajo

const moduleCompositionWithPipe = (() => {
  const users = [
    { age: 12 , name: 'John', lastname: 'Doe' },
    { age: 6 , name: 'Juan', lastname: 'Perez' },
    { age: 32 , name: 'Hans', lastname: 'Meyer' },
  ];

  const pipe = (...functions) => (mainInput) => (
    functions.reduce((accumulator, currentFunction) => currentFunction(accumulator), mainInput)
  );
  const filter = (f) => (xs) => xs.filter(f)

  const head = (xs) => xs[0];

  const formatUser = (x) => ({
    completeName: `${x.name} ${x.lastname}`,
    age: x.age,
  });

  const formatResult = (x) => `${x.completeName} has ${x.age} ages`;

  // Ahora no lo leemos la implentación solo qué es lo que hace, no cómo lo hace
  // Se lee de abajo a arriba
  const getFirstAdult = pipe(
    filter((x) => x.age > 17),
    head,
    formatUser,
    formatResult,
    )

  return {
    getFirstAdult: getFirstAdult(users)
  }
})();

console.log(moduleCompositionWithPipe.getFirstAdult);
