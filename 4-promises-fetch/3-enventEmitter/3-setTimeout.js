const EventEmiter = require('events');

class Users extends EventEmiter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
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