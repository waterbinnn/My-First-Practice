// Objects

// object = {key : value}; 오브젝트는 키와 value 의 집합체 


// 1. Literals and properties

const obj1 = {}; 
const obj2 = new Object(); 

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const noze = { name : 'Noze' , age : 27};
print(noze);

noze.hasjob = true;  // 뒤늦게 추가도 가능하지만 유지보수 힘듦 
delete noze.hasjob  //삭제도 가능

// 2. Computed properties
//keys should be always string!
//동적으로 키의 value를 받아야할때 유용 

console.log(noze.name); //.을 이용해 불러올 수 있음 
console.log(noze['name']); // 실시간으로 원하는 키를 받고싶을때 쓰는게 좋음 
noze['hasjob'] = true; 
console.log(noze.hasjob);

function printValue(obj, key) {
    // console.log(obj.key); // undefined - obj에 key라는 프롵퍼티가 있는지를 묻는거여서
    console.log(obj[key]); //true  - computed [] property 사용해야함 

}

printValue(noze, 'name'); //Noze
printValue(noze, 'age'); //27

// 3. Property value shorthand
const person1 = {name: 'a', age: '1'};
const person2 = {name: 'b', age: '2'};
const person3 = {name: 'c', age: '3'};
// 일일이 적어주기 번거롭고 비효율적 ! 그래서 new Person 새 오브젝트함수를 만든다 
const person4 = new Person('d',5);
console.log(person4);

// 4. Constructor Function
function Person(name,age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator : property existence check (key in obj)
console.log('name' in noze); //true
console.log('age' in noze); //true
console.log('random' in noze); // 정의하지 않은 키라 false
console.log(noze.random); // undefined

// 6. for .. in vs for .. of 
    //for (key in obj)

console.clear(); //이전것들 지워짐 

for (key in noze) {
    console.log(key); //모든 키값 불러올때 
} 

//for (value of iterable)
const array = [1,2,3,4,5]; //순차적인 배열 데이터 
for (value of array) {
    console.log(value); //array 에 있는 모든 값들이 value에 할당되면서 블록 안에서 값을 출력 
}

//  7. Fun cloning 복사하기 
    //object.assign(dest, [obj1, obj2, obj3...])
    const user = { name: 'noze' , age: '20' }; //user라는 변수는 name: 'noze' , age: '20' lef 가리킴. 
    const user2 = user; // 동일한 레퍼런스 갖고있음 
    
    user2.name = 'coco'; // 값을 바꿈 ! 
    console.log(user); // 근데 user까지 바꿔버린다 

//Old way 
const user3 = {};
for (key in user) { // user 안에 있는 키들이 돌면서 복사 
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4,user);
Object.assign({}, user); // 위 방법으로 해도 되고 이렇게 해도 됨 

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue' , size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 나오는 변수일수록 값을 덮어씌움 
console.log(mixed.color); // 그래서 blue 나옴 
console.log(mixed.size);
