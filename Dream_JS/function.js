'use strict';

// Function 

// Function decalration 함수 선언 
// functio name(parm1,param2) {body ... return;}

// js 에서 funtion 은 object 이다 

function printHello(){
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello');

// 2. Parameters
//premitive parameters : passed by value / 메모리에 value가 저장되어있어 value 값을 추출
// object Parameters: passed by Reference / 메모리에 reference가 저장되어있어서 ref 추출
function changeName(obj) { //전달된 오브젝트로 이름을 coder 로 무조건 나오게 된 함수
    obj.name = 'coder';
}
const subin = { name: 'subin' }; 
changeName(subin); // subin 이 가리키고 있는 이름이 coder로 변경하게 됨 
console.log(subin); // name : 'coder'

// 3. Defaulr paeameters (added in ES6)
function showemssage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showemssage('Hi!');
showemssage('Hi!','sis');

// 4. Rest parameters 
function printAll(...args) { //... 배열형태 전달 arg : 3개의 값이 담겨있는 배열을 의미
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for(const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); 
}
printAll('a','b','c');

// 5. Local scope //밖에선 안이 보이지 않고 안에서만 밖을 볼 수 있다 ! 
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable 지역변수 이걸 밖에서 출력하면 오류뜸 
    console.log(globalMessage); //밖에서 선언되었지만 출력됨 
}
printMessage();

// 6.Return a value
function sum (a,b) {
    return a + b; // return 으로 결과값을 출력 . return이 선언되지 않은건 return undefined 이 생략되어있는것 
}
const result = sum(1,2); //3
console.log(`${sum(1,2)}`);

//7. Early return , early exit 
//bad if 문에 else if , else 까지 해서 업그레이드가 오래 걸리는 로직
function upgradeUser(user) {
    if (user.point > 10) {
        //long logic... 
    }
}
//Good
function upgradeUser(user) {
    if (user.point <= 10) {
        return; // return 값을 빨리 내라 ! 
    }
    // 그리고 여기에 필요한 long logic 쓰는게 낫다 
}

//First-class function 
//functions are treated like any other variable 다른 변수와 마찬가지로 변수에 할당
// can assigned as a value to variable 
// can be as an argument to other function /parameter 로 전달가능
// can be returned by another function 리턴값으로도 전달이 가능  

// 1. function expression 
// a. function declaration can be eariler than it is defined. (hoisted) 
//      var 같은거 함수가 선언되기 이전에 호출해도 호출이 가능 
// b. function expression is created when the execution reaches it.
    
const print = function() { // 함수를 선언함과 동시에 바로 print라는 변수에 할당 
    //anonymous function 함수에 이름이 없이 그냥 필요한 부분만 작성해서 변수에 할당
    console.log('print');
};
print(); // 프린트라는 변수에 함수를 호출하듯이 하면 호출됨
const printAgain = print; // 또 다른 변수에 print 할당
printAgain(); 
const sumAgain = sum; //sum이라고 만든 함수를 sumAgain 에 할당
console.log(sumAgain(1,3));

// 2. Callback function using function expressions  
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}
//anonymous function
const printYes = function() {
    console.log('yes!');
};

const printNo = function() {
    console.log('No!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo); 

// Arrow function
//always anonymous function

const simplePrint = function () {
    console.log('simplePrint');
};

const simplePrint = () => console.log('simplePrint');

const add = (a,b) => a + b; // 훨 간결 ! 

const add = function(a,b) {
    return a + b;
} ; 

//IIFE : Immediately Invoked Function Expressions
(function hello() {
    console.log('IIFE');
})();
//함수 바로바로 실행하고 싶을때 사용 

