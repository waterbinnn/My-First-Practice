// 1. Use strict
// added in ES 5
// use this for Valina JavaScript.
'use strict';

// 2. Variable rw(read/write 가능)
// let (added in ES6)
let globalName = 'global name';
{
let name = 'subin';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

//var (don't even use this!)

// 3. Contant , r (read only)
//use const whenever possible.
// only use let if variable needs to change.

const daysInweek = 7;
const maxNumber = 5;

// Note! 
// Immutable date types : premitive types, frozen objects (i.e object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable date type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes 


// 4. Variable types 
// promotive(값 자체가 메모리에 저장 ),single item : Number, string, Boolean, null, undefined, Symbol
// Object(너무 커서 값을 다 올릴 수 없기에 obj를 가리키는 ref가 메모리에 저장된다), box container 
// function, first-class function 

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); //value: hellobrendan, type: string
const helloBob = `hi ${brendan}!`; 
console.log(`value: ${helloBob}, type:${typeof helloBob}`); //value: hi brendan!, type:string

//boolean
//false:0 , null , undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3< 1; //false

// null
let nothing = null; 

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); //value: undefined, type: undefined

//symbol , create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) // false

//object, real-life object, data structure
const subin = { name : 'subin', age : 20 };

// 5. Dynamic typing 
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //value: 4, type: number



