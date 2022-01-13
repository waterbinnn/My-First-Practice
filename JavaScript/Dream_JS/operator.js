'use strict';

// 1. string concatenation +기호를 이용해 새로운 문자열 
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

console.log('subin\'s book');
console.log("subin's \nbook");
console.log("subin's \n\tbook");

// 2. Numeric operators
console.log(1 + 1); // 2 add
console.log(1 - 1); // 0 substract
console.log(1 / 1); // 1 divide
console.log(1 * 1); // 1 multiply
console.log(5 % 2); // 1 remainder
console.log(2 ** 3); // 8 exponentation

// 3. Increment and decrement operators ( ++ 기호 )
let counter = 2;
const preIncrement = ++counter;
// 이것과 같음 ; counter 에 1을 더해서 counter에 값을 할당한 다음 즉 하나가 증가한 변수에 counter에 다음 값을 할당 
// counter =   counter + 1;
// // preIncrement = counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// //preIncrement: 3, counter: 3


const postIncrement = counter++;
// //이것과 같음 ; 변수 다음에 ++ 붙이면 먼저 counter라는 변수의 값을 post에 할당한 다음 그 뒤에 counter의 값을 증가시킴 
// // postIncrement = counter;
// // counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// // postIncrement: 3, counter: 4

const preDecrement = --counter;
// //Decrement 값을 하나씩 감소 
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
// // preDecrement: 3, counter: 3

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
// //postDecrement: 3, counter: 2


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators 비교 
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) 세개라도 하나가 true 일때 true, 처음으로 true 가 나오면 멈춤 
// 심플한 value 를 앞에두고 함수로 호출하는 애들은 젤 뒤로 배치해야 효율적인 코드
console.log(`or: ${value1 || value2 || check()}`); //or : true

//&& (and), 세개가 다 true 여야 true return! value1 이 false나오면 뒤는 자동으로 실행 안함 
// 심플한 value 를 앞에두고 함수로 호출하는 애들은 젤 뒤로 배치해야 효율적인 코드

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
    }
    return true;
}

//! (not) 값을 반대로 바꿔줌 
console.log(!value1); //true

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// ==  loose equality, with type conversion
console.log(stringFive == numberFive); //false
console.log(stringFive != numberFive); //false

// === strict equality, no type convertion 웬만하면 이거 사용 
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference 
// 같은 데이터지만 서로 다른 오브젝트를 가리킴
const subin1 = { name : 'subin' };
const subin2 = { name : 'subin' };
const subin3 = subin1;
console.log(subin1 == subin2); // false 같은 데이터지만 서로 다른 오브젝트를 가리킴 
console.log(subin1 === subin2); // false 각각 다른 레퍼런스가 저장되어있기 때문에 
console.log(subin1 === subin3); // true 

console.log(0 == false); // true 
console.log(0 === false); // false 0이 boolean 타입 아니기때문
console.log('' == false); // true
console.log('' === false); //false ''이 boolean 타입 아니기때문
console.log(null == undefined); //true
console.log(null === undefined); //false 


// 8. Condition operators: if
//if , else if , else

const name = 'coder';
if(name === 'subin') {
    console.log('Welcome,subin!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2; true 면 왼쪽 아니면 오른쪽 값 출력 
console.log(name === 'subin' ? 'yes' : 'no');

// 10. Swich statement
//use for multiple if checks
//use for enum-Like value check
//use for multiple type checks in TS
const browser = 'IE';
switch(browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love u');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops 반복문
// while loop, while the condition is truthy,
// body code is executed. /조건문이 맞을때만 블록을 실행하고 싶을때 while 
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
} 
// while : 3
// while : 2
// while : 1 반복해서 실행하다가 0이 되기 전까지의 값을 출력

//do while loop, body code is executed first,
// then check the condition. /블록을 먼저 실행하고 싶을때 do while 씀 
// let e = 3;

do {
    console.log(`do while: ${i}`);
    i--;
} while (i> 0);  //do while: 0 

//for loop, for(begin; condition; step) 
for (i = 3; i > 0; i--){
    console.log(`for : ${i}`); // begin 은 처음 한번만 실행하고 condition이 안맞을때까지 계속 실행
} 
//for : 3
//for : 2
//for : 1

for (let i =3; i > 0; i = i - 2){
    //inline variable declaration 블록안에 let이라는 지역변수 선언해서 작성 
    console.log(`inline variable for : ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; i < 10; i++){
        console.log(`i : ${i}, j : ${j}`);
    }
}

// Q1. iterate from 0 to 10 and print only even numbers (use continue;)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
    }
  console.log(`q1.${i}`);
}
//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 10; i++){
    if (i > 8) {
        break;
    }
    console.log(`q2.${i}`);
} 



