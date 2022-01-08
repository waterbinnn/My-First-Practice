//자료구조 - 어떤 방식 타입으로 데이터 담는지에 따라 다르다 
//배열 - !인덱스! 가 정해져있는 자료구조 / 삽입과 삭제가 쉽게 가능 

'use strict';

//Array

// 1. 배열 선언 -  두가지 방법
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍎', '🍌']; 
console.log(fruits); //(2) ['🍎', '🍌']
console.log(fruits.length); //2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // 없기때문에 undefined
console.log(fruits[fruits.length - 1]); //🍎 🍌

console.clear();

// 3. Looping over an array 
    //print all fruits
    // a. for 
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]); //🍎 🍌
}

    // b. for of 
for (let fruit of fruits) { //fruit라는 변수를 만들어 fruits 안에 들어있는 값을 순차적으로 할당해서 블록 실행 
    console.log(fruit); //🍎 🍌
}

console.clear();

    //c. for each 
    // Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

    fruits.forEach(function (fruit, index, array) {
  console.log(fruits, index, array); 
  //(2) ['🍎', '🍌'] 0 (2) ['🍎', '🍌'] 
  //(2) ['🍎', '🍌'] 1 (2) ['🍎', '🍌']
});

// 굳이 index 랑 array 까지 안써줘도 됨 
fruits.forEach((fruit) => console.log(fruits)); // 화살표 함수로 짧게 생략가넝  // (2) ['🍎', '🍌'] 

// 4. Addition, deletion, copy 
//push: add an item to the end
fruits.push('🥝','🍑')
console.log(fruits); // (4) ['🍎', '🍌', '🥝', '🍑']

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits); //(2) ['🍎', '🍌']

// unshift: add an item to the beginning
fruits.unshift('🥝','🍑');
console.log(fruits); // (4) ['🥝', '🍑', '🍎', '🍌']

//shitt: remove an item from the beginning
fruits.shift();
console.log(fruits); // (3) ['🍑', '🍎', '🍌']

//note! shift, unshift 는 push & pop 보다 느림 !!!! 앞에 데이터를 넣으려다 보니 다 옮겨가야하므로 

//splice : remove an item by index position 
fruits.push('🍓','🥝','🍑');
console.log(fruits); // (6) ['🍑', '🍎', '🍌', '🍓', '🥝', '🍑']
fruits.splice(1,1);
console.log(fruits); // (5) ['🍑', '🍌', '🍓', '🥝', '🍑']
fruits.splice(1,1,'🍉');
console.log(fruits); // (5) ['🍑', '🍉', '🍓', '🥝', '🍑']

//combine two arrays //concat : 다른 배열을 연결
const fruits2 = ['🥥','🍋'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // (7) ['🍑', '🍉', '🍓', '🥝', '🍑', '🥥', '🍋']

// 5. Searching 
console.log(newFruits); //(7) ['🍑', '🍉', '🍓', '🥝', '🍑', '🥥', '🍋']

//indexOf 몇번째에 있는지 인덱스 값 출력 / 없으면 -1 값 출력 
console.log(newFruits.indexOf('🍋')); //6
console.log(newFruits.indexOf('🍍')); //-1

//indexIncludes 값을 포함하는지 true / false
console.log(newFruits.includes('🥥')); // true
console.log(newFruits.includes('🍎')); //false


// lastIndexOf 같은 값이 있다면 뒤에 있는걸 알려줌 
console.clear();
newFruits.push('🍑');
console.log(newFruits); //(8) ['🍑', '🍉', '🍓', '🥝', '🍑', '🥥', '🍋', '🍑']
console.log(newFruits.indexOf('🍑')); //0
console.log(newFruits.lastIndexOf('🍑')); //7


