

let num = 1.23456;
alert(Math.floor(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

//toFixed : 소수점 n 번째 수까지의 어림수를 구한 후 이를 문자형으로 반환해주는 메서드
// +num.toFixed(5)처럼 단항 덧셈 연산자를 앞에 붙이거나 Number()를 호출하면 문자형의 숫자를 숫자형으로 변환
let num = 12.34;
alert(num.toFixed(1)); // "12.3" 
let num = 12.36;
alert( num.toFixed(1) ); // "12.4" 유사하게 가장 가까운 값으로 올림 혹은 버림 
let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", 소수부의 길이를 5로 만들기 위해 0이 추가됨 

//부정확한 계산 
alert( 1e500 ); // Infinity
// 정밀도 손실(loss of precision)
alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004
alert( 0.1.toFixed(20) ); // 0.10000000000000000555

// 정밀도 문제를 해결하기 위해 toFixed(n) 메서드를 사용해 어림수를 만든다 
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30

// toFixed는 항상 문자열을 반환하기 때문에 +를 사용해 숫자형으로 변환한다. 
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) );

// Infinity와 -Infinity – 그 어떤 숫자보다 큰 혹은 작은 특수 숫자 값
// NaN – 에러를 나타내는 값

// 두 특수 숫자는 숫자형에 속하지만 정상적인 숫자는 아니기때문에 , 정상적인 숫자와 구분하기 위해 특별한 함수 존재 
// isNaN(value) – 인수를 숫자로 변환한 다음 NaN인지 테스트함
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( NaN === NaN ); // false - NaN은 자기자신을 포함하여 그 어떤 값과도 같지 않음 

// isFinite(value) – 인수를 숫자로 변환하고 변환한 숫자가 NaN/Infinity/-Infinity가 아닌 일반 숫자인 경우 true를 반환함
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, NaN이기 때문입니다.
alert( isFinite(Infinity) ); // false, Infinity이기 때문

// 빈 문자열이나 공백만 있는 문자열은 isFinite를 포함한 모든 숫자 관련 내장 함수에서 0으로 취급된다는 점에 유의

// + 또는 Number()을 사용하여 숫자형으로 변형할 때 적용되는 규칙은 엄격 . 피연산자가 숫자가 아니면 형 변환 실패 
alert( +"100px" ); // NaN

// parseInt는 정수, parseFloat는 부동 소수점 숫자를 반환
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, 정수 부분만 반환
alert( parseFloat('12.3.4') ); // 12.3, 두 번째 점에서 숫자 읽기를 멈춤

alert( parseInt('a123') ); // NaN, a는 숫자가 아니므로 숫자를 읽는 게 중지
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, 0x가 없어도 동작
alert( parseInt('2n9c', 36) ); // 123456

alert( Math.random() ); // 0.1234567894322 (랜덤값 무작위 수)
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.pow(2, 10) ); // n을 power / 2의 10제곱 = 1024

let a = +prompt("1","");
let b = +prompt("2","");
alert ( a + b );

function readnumber() {
    let num;

    do {
        num = prompt("Enter a number please?",0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);

let single = '작은따옴표';
let double = "큰따옴표";

let backticks = `백틱`;

function sum(a, b) {
    return a + b;
  }
  
  alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
  let guestList = `손님:
 * John
 * Pete
 * Mary
`;

alert(guestList); // 손님 리스트를 여러 줄에 걸쳐 작성함

let guestList = "손님:\n * John\n * Pete\n * Mary";

alert(guestList); // 손님 리스트를 여러 줄에 걸쳐 작성함

let str1 = "Hello\nWorld"; // '줄 바꿈 기호'를 사용해 두 줄짜리 문자열을 만듦

// 백틱과 일반적인 줄 바꿈 방법(엔터)을 사용해 두 줄짜리 문자열을 만듦
let str2 = `Hello
World`;

alert(str1 == str2); // true

alert( 'I\'m the Walrus!' ); // I'm the Walrus!
alert( `I'm the Walrus!` ); // I'm the Walrus!
alert( `역슬래시: \\` ); // 역슬래시: \
alert( `My\n`.length ); // 3

//문자열의 불변성 
let str = 'Hi';

str[0] = 'h'; // Error: Cannot assign to read only property '0' of string 'Hi'
alert( str[0] ); // 동작하지 않습니다.

//완전히 새로운 문자열을 하나 만든 다음, 이 문자열을 str에 할당하면 위 문제 해결 가능 
let str = 'Hi';

str = 'h' + str[1]; // 문자열 전체를 교체함

alert( str ); // hi

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
alert( 'Interface'[0].toLowerCase() ); // 'i' inerface

//부분 문자열 찾기 (substring)

let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, str은 'Widget'으로 시작함
alert( str.indexOf('widget') ); // -1, indexOf는 대·소문자를 따지므로 원하는 문자열을 찾지 못함

alert( str.indexOf("id") ); // 1, "id"는 첫 번째 위치에서 발견됨 (Widget에서 id)


//as 찾기 
let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; 
let pos = 0;
while (true) {
    let foundPos = str.indexOf(target,pos);
    lf (foundPos == -1) {

    alert( `위치: ${foundPos}` );
    pos = foundPos + 1;
}
// 다른방법
let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; //as 찾기 
let pos = -1;
while ((pos = str.indexOf(target,pos + 1)) != -1 {
  alert(`위치: ${pos}`);
}

//부분 문자열 추출 substring, substr, slice
str.slice(start [, end])
let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', 0번째부터 5번째 위치까지(5번째 위치의 글자는 포함하지 않음)
alert( str.slice(0, 1) ); // 's', 0번째부터 1번째 위치까지(1번째 위치의 자는 포함하지 않음)
alert( str.slice(2) ); // ringify, 2번째부터 끝까지 두 번째 인수가 생략된 경우엔, 명시한 위치부터 문자열 끝까지
// 끝에서 4번째부터 시작해 끝에서 1번째 위치까지
alert( str.slice(-4, -1) ); // gif

str.substring(start [, end]) //start와 end 사이에 있는 문자열을 반환

let str = "stringify";
// 동일한 부분 문자열을 반환합니다. 음수인수 불가능 
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// slice를 사용하면 결과가 다름
alert( str.slice(2, 6) ); // "ring" (같음)
alert( str.slice(6, 2) ); // "" (빈 문자열)

str.substr(start [, length]) //start에서부터 시작해 length 개의 글자를 반환

let str = "stringify";
alert( str.substr(2, 4) ); // ring, 두 번째부터 글자 네 개
alert( str.substr(-4, 2) ); // gi, 끝에서 네 번째 위치부터 글자 두 개


//문자열 비교 

alert( 'a' > 'Z' ); // true 소문자>대문자 
alert( 'Österreich' > 'Zealand' ); // true 발음구별기호가 붙은 문자는 알파벳 순서 기준 따르지 않음 


//첫 글자를 대문자로 변경하기
// ucFirst("john") == "John";

function ucFirst(str){
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("john"));

//스팸 문자열 걸러내기 
// str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환. 해당 문자열이 없으면 false를 반환. 대소문자 상관없이 
function checkSpam(str){
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

//숫자만 추출 
alert( extractCurrencyValue('$120') === 120 ); // true

//문자열 줄이기 
// 예시 
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(str, maxlength) {
    return (str.length > maxlength)?
      str.slice(0, maxlength - 1) + '...' : str;
}

//배열

let styles = ["Jazz","Blues"]; //Jazz, Blues
styles.push = ["Rock-n-Roll"]; // Jazz, Blues, Rock-n-Roll
styles[Math.floor((styles.length - 1) / 2) ] = "clssics"; //Jazz, Classics, Rock-n-Roll
alert( styles.shift() ); // Classics, Rock-n-Roll
styles.unshift("Rap","Reggae"); //Rap, Reggae, Classics, Rock-n-Roll


function sumInput(){

    let user = [];

    while(true) {
        let value = prompt("number?",0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

//splice 
arr.splice(index[, deleteCount, elem1, ..., elemN])

    let arr = ["I", "study", "JavaScript"];

    arr.splice(1, 1); // 인덱스 1부터 요소 한 개를 제거

    alert( arr ); // ["I", "JavaScript"]

    let arr = ["I", "study", "JavaScript", "right", "now"];

    // 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체
    arr.splice(0, 3, "Let's", "dance");

    alert( arr ) // now ["Let's", "dance", "right", "now"]

    let arr = ["I", "study", "JavaScript"];

// 인덱스 2부터
// 0개의 요소를 삭제합니다.
// 그 후, "complex"와 "language"를 추가합니다.
    arr.splice(2, 0, "complex", "language");

    alert( arr ); // "I", "study", "complex", "language", "JavaScript"

    let arr = [1, 2, 5];

    // 인덱스 -1부터 (배열 끝에서부터 첫 번째 요소)
    // 0개의 요소를 삭제하고
    // 3과 4를 추가합니다.
    arr.splice(-1, 0, 3, 4);

    alert( arr ); // 1,2,3,4,5

//slice
arr.slice([start], [end])

    let arr = ["t", "e", "s", "t"];

    alert( arr.slice(1, 3) ); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))

    alert( arr.slice(-2) ); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)

//concat 
arr.concat(arg1, arg2...)

    let arr = [1, 2];

    // arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열 
    alert( arr.concat([3, 4]) ); // 1,2,3,4

    // arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열 
    alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

    // arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열
    alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

//isConcatSpreadable

    let arr = [1, 2];

    let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
    };

    alert( arr.concat(arrayLike) ); // 1,2,something,else

//forEach

arr.forEach(function(item, index, array) {
    // 요소에 무언가를 할 수 있습니다.
  });

//   요소 모두를 얼럿창을 통해 출력해주는 코드
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// 인덱스 정보까지 더해서 출력해주는 좀 더 정교한 코드
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });
// Bilbo is at index 0 in Bilbo,Gandalf,Nazgul


//배열 탐색 
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

//배열 내 존재하는지 여부만 확인하고 싶다면 arr.includes
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (완전 항등 비교 === 는 NaN엔 동작하지 않으므로 0이 출력되지 않는다)
alert( arr.includes(NaN) );// true (NaN의 여부확인)

//arr.find(fn) - 특정조건에 부합하는 객체를 배열내에서 찾을 때 
let result = arr.find(function(item, index, array) {
    // true가 반환되면 반복이 멈추고 해당 요소를 반환
    // 조건에 해당하는 요소가 없으면 undefined를 반환
  });

// item - 함수를 호출할 요소
// index - 요소의 인덱스
// array - 배열 자기 자신

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

// arr.findIndex는 find와 동일한 일을 하나,
//  조건에 맞는 요소를 반환하는 대신 해당 요소의 인덱스를 반환한다는 점이 다름
//  조건에 맞는 요소가 없으면 -1 반환

//map : 배열 요소 전체를 대상으로 함수를 호출하고, 결과를 배열로 반환 
let result = arr.map(function(item, index, array) {
    // 요소 대신 새로운 값을 반환
  });

    let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
    alert(lengths); // 5,7,6


    
