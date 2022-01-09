//async & await
//clear style of using promise

//1. async
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do request
        resolve('subin');
    });
}

// promise 함수를 async 를 사용해 자동으로 코드 블록이 프로미스를 간편하게 사용할 수 있게 됨 
async function fetchUser() {
    // do request
    return 'subin';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await 
function delays(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
    await delays(2000);
    return '🍎';
}

async function getBanana() {
    await delays(1000);
    return '🍌';
}

// function pickfruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

async function pickfruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickfruits().then(console.log); //🍎 + 🍌

//3. usefull promise APIs // 프로미스 배열을 전달하면 병렬적으로 작동하게 모여줌 

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]) // 배열을 전달 
    .then(fruits => fruits.join(' + ')); // 다 받아지면 -> 과일의 배열이 전달이 됨 
}
pickAllFruits().then(console.log); //🍎 + 🍌

function pickOnlyOne() { // 어떤거든 상관없고 하나만 가져오고싶을때 
    return Promise.race([getApple(), getBanana()]); //  race : 배열에서 먼저 수행되는 값을 리턴 
}

pickOnlyOne().then(console.log); //🍌

