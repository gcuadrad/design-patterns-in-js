/*
  Mediator:
  Parecido al patrón observador pero en cambio de que uno escucho al otro esa responsabilidad
  se le entrega a otro objeto, llamado mediador,
  Librerías que lo implementan de ejemplo: Redux
*/


const Emitter = (() => {
  const topics = {};
  const hOP =  topics.hasOwnProperty;

  return {
    // suscribir funciones a un evento en particular
    on: (topic, listener) => {
      if (!hOP.call(topics, topic)) {
        topics[topic] = [];
      }
      topics[topic].push(listener)
    },
    // Despachar las funciones con información extra
    emit: (topic, info) => {
      if (!hOP.call(topics, topic)) {
        return;
      }
      topics[topic].forEach((item) => {
        item(info != undefined ? info : {})
      });
    }
  }
})()


Emitter.on('new-event', (x) => console.log(x));

Emitter.emit('new-event', { event: 'new-event 001' });
