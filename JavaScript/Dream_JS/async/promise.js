'use strict';

//Promise is a JavaScript object for asynchronous operation.
// State : pending => fulfilled or rejected
// Producer(원하는 데이터 생성) vs Consumer(원하는 데이터 소비하는)

// 1. Producer
// !!! 새로운 프로미스 만들어질땐 전달한 executor 함수가 자동으로 실행됨 !!! 
const promise = new Promise((resolve, reject) => { //new 오브젝트 생성 
    //doing some heavy work (network, read files) //비동기적으로 처리하는게 좋다 
    console.log('doing something...');
    setTimeout(() => {
        // resolve('noze'); // 성공적으로 네트워크에서 읽어온 데이터를 전달 
        reject(new Error('no network')); // Uncaught Error: no network / Error 은 JS에서 제공하는 오브젝트 함수임 
    }, 2000);
});

// 2. consumers : then, catch, finally 
promise
    .then((value) => { // promise가 정상적으로 잘 수행이 된다면 , then . 성공한 값
    console.log(value); //value : resolve 로 전달받은 값 
    })
    .catch(error => { // 에러가 발생했을때 어떻게 처리할건지 콜백함수로 처리 . 실패한 값    
        console.log(error);
    })
    .finally(() => { //성공하던 실패하던 상관없이 마지막에 호출 
        console.log('finally');
    });

    // 3. Promise chaining 프로미스 연결하기 

    const fetchNumber = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1),1000); // 1초있다가 1 전달 
    });

    fetchNumber
    .then(num => num * 2) // 잘되면 2배로 곱하고 :2
    .then(num => num * 3) // 되면 또 3배로 곱하고 :6
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1),1000); // 되면 이제는 새로운 promise 를 리턴  :5
        });
    })
    .then(num => console.log(num)) //그리고 그 숫자를 출력 : 5
    //then은 값을 바로 전달해도 되고 또 다른 비동기인 promise를 전달해도 됨  

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
        // setTimeout(() => resolve(`${egg} => 🍳`), 1000);
        setTimeout(() => reject(new Error('error')),1000);
    });
    
    // getHen() 
    // .then(hen => getEgg(hen))
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal));
//위 코드를 간략하게 작성 가능 
    getHen() //
    .then(getEgg) // 한가지만 받아서 그대로 전달하는 경우 생략 가능 
    .then(cook) //여기서 에러가 난다면
    .catch(error => { // catch로 에러처리 
        return '😆';
    })
    .then(console.log)
    .catch(console.log);

    

