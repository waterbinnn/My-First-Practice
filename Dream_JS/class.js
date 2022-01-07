'use strict';

// class : template
// object: instance of a class

// 1. class declarations
class Person {
    //constructor 생성자를 이용해 오브젝트를 만들때 필요한 데이터 전달
    constructor(name, age) {
        //fields 전달받은 데이터를 할당
        this.name = name;
        this.age = age;
    }

    //methods 
    speak(){
        console.log(`${this.name} : hello`);
    }
}

const subin = new Person('subin',27);
console.log(subin.name);
console.log(subin.age);
subin.speak();

// 2. Getter and setters 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){ // get 을 통해 값을 return
        return this._age; // get age를 선언하니깐 this age를 return 
    }
    
    set age(value) { // set 으로 값을 설정 - 그래서 value 받아와야함 
        // this._age = value; // 새로운 value를 받으면 this age를 value로 설정 
        // 이렇게 해줘도 됨 :
         this._age = value < 0 ? 0 : value; // 값이 - 라면 0을 쓰겠다 
    }
}
// age 라는 getter을 정의하는 순간 this.age 는 getter을 바로 호출 
// setter을 정의하는 순간 this.age = age;을 호출할 때, 즉 값을 할당할 때 
// 바로 메모리에 값을 할당하는 것이 아니라 setter을 호출하게 됨 = setter안에서 전달된 value를 this.age 에 할당할 때 
// 메모리의 값을 업데이트 하는것이 아니라 setter을 호출 -> 그래서 getter setter 에서 쓰는 변수를 조금 다르게 해준다 :  _age 로 해줌 


const user1 = new User('Steve','Jobs',-1);
console.log(user1.age); // 사람의 나이가 -1 이 말이 되자 않음 

// 3. Field (public, private) 최근에 나옴 
// private : class 내부에서만 값 변경, 읽을 수 있다 

class Experiment {
    publicField = 2;
    #publicField = 2;
}

// 4. Static properties and method 최근에 나옴 
class Article {
    static publisher = 'coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 =new Article(1);
const article2 =new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance 
//  a way for one class to extend another class.

class shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends shape {}
class Triangle extends shape {
    draw(){
        super.draw();
        console.log('Purple');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'orange');
triangle.draw();
console.log(triangle.getArea());





