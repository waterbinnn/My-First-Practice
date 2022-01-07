let Kim = {
    name:"lee",
    first:10,
    second:20,
    third:30,
    sum : function(f,s){
        return this.first + this.second + this.third;
    }
}

let Lee = {
    name:"lee",
    first:10,
    second:10,
    third:10,
    sum : function(f,s){
        return this.first + this.second + this.third;
    }
}

console.log("Kim.sum()",Kim.sum());
console.log("Lee.sum()",Lee.sum());

let d1 = new Date('2022-01-03');
console.log(d1.getFullYear());
console.log(d1.getMonth()); //0부터 카운트하여 해당 객체의 월을 출력
console.log(d1.getDate());

console.log('Person()', Person());  // undefined
console.log('new Person()', new Person()); // 객체 생성 

// 그냥 함수를 호출할 경우 일반 함수 취급되지만 
// new 라는 키워드를 붙일경우 객체를 생성하는 생성자가 된다. 

function Person(name,first,second,third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){ 
        return this.first+this.second+this.third;
    }
}

let kim = new Person('kim',10,20,30);
let Lee = new Person('Lee',10,10,10);

console.log("kim.sum()",kim.sum());
console.log("Lee.sum()",Lee.sum());


