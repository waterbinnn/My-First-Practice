//Data type 
// number , string, boolean, null, undifined

let number = 2;
let number2 = number;

console.log(number); //2
console.log(number2); //2

number2 = 3; //3이라는 값으로 업데이트 하면 
console.log(number); //2
console.log(number2); //3

//Object

let obj = {
    name: 'noze',
    age: 27,
}; 
console.log(obj.name);

let obj2 = obj; //obj2 라는 변수를 만들어 obj 할당 
console.log(obj2.name); //noze 
//변수를 다른 변수에 할당하거ㅏ 전달할때 변수안의 값이 복사되어 들어와서 값 자체가 들어오지만
// 오브젝트는 오브젝트가 들어오는게 아니라 주소(레퍼런스)만 복사되어 들어온다 ! 

const obj3 = {
    name : 'noze',
    age : 27,
};
obj3 = {
    name : 'ss',
    age : 2,
}; 
// console.log(obj3); //uncaught TypeError: Assignment to constant variable.
//불가능 ! 왜냐하면 오브젝트 자체의 레퍼런스는 잠겨있어서 값의 변경이 불가능 

obj3.name = 'subin';
console.log(obj3); // {name: 'subin', age: 27}
//하지만 레퍼런스가 가리키는 오브젝트의 내용은 변경할 수 있다 ! 





