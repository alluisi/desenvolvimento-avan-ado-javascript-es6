const EventEmiter = require('events');

class Users extends EventEmiter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Alessandra' });
users.userLogged({ user: 'Celso' });
// { user: 'Alessandra' }
// { user: 'Celso' }