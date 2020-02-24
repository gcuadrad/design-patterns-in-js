/*
  Mediator in node:

*/


const Emmiter = require('events');
const emmiter = new Emmiter();

emmiter.on('new-event', (x) => console.log(x));

emmiter.emit('new-event', { event: 'new-event 001' });
