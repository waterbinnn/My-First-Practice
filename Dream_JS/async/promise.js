'use strict';

//Promise is a JavaScript object for asynchronous operation.
// State : pending => fulfilled or rejected
// Producer vs Consumer

// 1. Prodeucer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('noze');
        reject(new Error('no network')); // Uncaught Error: no network
    }, 2000);
});

// 2. consumers : then, catch, finally 
promise.then((value) => {
    console.log(value);
})
    .catch(error => {
        console.log(error);
    })
    .finally(() => { //성공하던 실패하던 상관없이 마지막에 호출 
        console.log('finally');
    });

    // 3. Primise chaining

    const fetchNumber = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1),1000);
    });

    fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1),1000);
        });
    })
    .then(num => console.log(num))

    //4. Error handling
    const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });

    const getEgg = hen => 
    new Promise((resolve,reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });

    const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });
    
    // getHen() 
    // .then(hen => getEgg(hen))
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal));
//간략한 코드 작성 가능 
    getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log);

    

