const EventEmiter = require('events');

const emitter = new EventEmiter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: 'Alessandra' });
// { user: 'Alessandra' }