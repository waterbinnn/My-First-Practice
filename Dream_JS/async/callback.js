'use strict';

//JavaScript is synchoronous. 
// Execute the code block by orger after hoisting.
// hoisting : var, function declaration

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 비동기 콜백 
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//callback Hell example 콜백지옥 예시 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id == 'waterbin' && password == '123') ||
                (id == 'nozeworld' && password == '456')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('Not found!'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'waterbin') {
                onSuccess({ name: 'subin', role: 'admin' });
            } else {
                onError(new Error('Who are you?'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);