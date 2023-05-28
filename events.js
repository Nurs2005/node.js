const EventEmitter = require('events');

function createListener(arg) {
  const emitter = new EventEmitter();
  emitter.on('event', () => {
    console.log(arg);
  });
  return emitter;
}
function simulateEvent(emitter) {
  emitter.emit('event');
}
module.exports = {
  createListener,
  simulateEvent,
};