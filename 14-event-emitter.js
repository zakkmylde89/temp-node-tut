// Event Emitter

// The two main things we listen for from the Events class are:
//      on - listen for an event
//      emit - emit an event

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with ID: ${id}`);
});

customEmitter.on('response', () => {
    console.log(`some other logic here `);
});

customEmitter.emit('response', 'zack', 35);