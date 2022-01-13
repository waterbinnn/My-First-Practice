Symbol

// '심볼(symbol)'은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용합니다.
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// 심볼은 문자형으로 자동 형 변환되지 않는다.
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id = Symbol("id");
alert(id.toString()); // Symbol(id)가 얼럿 창에 출력됨

let id = Symbol("id");
alert(id.description); // id symbol.description 프로퍼티를 이용하면 설명만 보여주는 것도 가능


// 객체 리터럴 {...}을 사용해 객체를 만든 경우, 대괄호를 사용
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // "id": 123은 안됨
};

// 키가 심볼인 프로퍼티는 for..in 반복문에서 배제

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name과 age만 출력되고, 심볼은 출력되지 않음

// 심볼로 직접 접근하면 잘 작동
alert( "직접 접근한 값: " + user[id] );

// 그런데 Object.assign은 키가 심볼인 프로퍼티를 배제하지 않고 
// 객체 내 모든 프로퍼티를 복사

let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123


// 전역심볼 - 전역 레지스트리에서 심볼을 읽는다 
let id = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만든다

// 동일한 이름을 이용해 심볼을 다시 읽는다(좀 더 멀리 떨어진 코드에서도 가능)
let idAgain = Symbol.for("id");

// 두 심볼은 같다
alert( id === idAgain ); // true


//// --Symbol.keyFor

// 이름을 이용해 심볼을 찾음
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 심볼을 이용해 이름을 얻음
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

