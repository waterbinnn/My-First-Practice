'use strict';

//JavaScript is synchoronous. 
// Execute the code block by orger after hoisting.
// hoisting : var, function declaration

console.log('1');
setTimeout(() => console.log('2'), 1000); //1초 뒤 실행 
console.log('3'); 
//1 3 (1초 뒤) 2 (순으로 출력) 

// Synchronous callback 즉각적 동기적 실행 
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); 
//1 3 hello 2(1초뒤)

// Asynchronous callback 언제 실행될지 모르는 비동기 콜백 
function printWithDelay(print, timeout) { //전달받은 print 라는 인자와 몇초후 printWithDelay가 나오게 하고싶은지 
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
                onSuccess(id); //onSuccess 콜백함수 실행 id 받아옴 
            } else {
                onError(new Error('Not found!'));  
            }//onError라는 콜백함수실행 - Error 라는 오브젝ㅌ 새로 만들어서 not found 전달
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