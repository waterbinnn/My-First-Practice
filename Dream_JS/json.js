// JSON 
// JavaScript Object Notation

// 1. Object to JSON
//  stringify(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple','banana']);
console.log(json); // ["apple","banana"]

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    // symbol: Symbol('id'), // json 에 포함되지않음 
    jump: () => {
        console.log(`${name} can jump`); //json 에 포함되지않음 
    },
};

json = JSON.stringify(rabbit);
console.log(json); // 

json = JSON.stringify(rabbit,['name']); // 원하는 프로퍼티만 넣는것도 가능 
console.log(json); // 

json = JSON.stringify(rabbit, (key,value) => { //키와 벨류 전달받는 콜백함수이용 
    console.log(`${key},${value}`);
    return key === 'name' ? 'HIRABBIT' : value; //name 값을 바꿔줄 수 있음 
}); 
console.log(json); 

console.clear();

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

let json2 = JSON.stringify(student);

console.log(json2); // {"name":"John","age":30,"isAdmin":false,
// "courses":["html","css","js"],"wife":null}


console.log(JSON.stringify(1)); //1
console.log(JSON.stringify('hello')); // "hello"
console.log(JSON.stringify(true)); // true
console.log(JSON.stringify([1, 2, 3])); // [1, 2, 3]

//중첩 객체도 문자열로 변경해줌 ! 
let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };

  console.log( JSON.stringify(meetup) );

// {
//   "title":"Conference",
//   "room":{"number":23,"participants":["john","ann"]},
// }



// 2. JSON to object
// parse(json) 
//let value = JSON.parse(str, [reviver]);

console.clear();

json = JSON.stringify(rabbit); // 1번에서 해준걸 

const obj = JSON.parse(json,(key, value) => {
    console.log(`${key},${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

console.clear();

// 문자열로 변환된 배열
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers[2] ); // 2

//중첩객체에서
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [3,2,5,1] }';

let user = JSON.parse(userData);

console.log( user.friends[2] ); // 5

//reviver 사용하기 
let str = '{"title":"Conference","date":"2022-07-27T12:00:00.000Z"}';

let meetup2 = JSON.parse(str, function(key, value) {
    return key == 'date' ? new Date(value) : value ;
});

// let meetup2 = JSON.parse(str, function(key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
//   }); 같은 말이지만 위 코드가 더 효율적 

console.log( meetup2.date.getDate() );

let user2 = {
    name: "John Smith",
    age: 35
  };

let user3 = JSON.parse(JSON.stringify(user2));
console.log(user3);
