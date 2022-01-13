'use strict';

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id == 'waterbin' && password == '123') ||
                    (id == 'nozeworld' && password == '456')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('Not found!'));
                }
            }, 1000);

        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'waterbin' || 'nozeworld') {
                    resolve({name:`${id}`, role:`${id}`});
                } else {
                    reject(new Error('Who are you?'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
        
