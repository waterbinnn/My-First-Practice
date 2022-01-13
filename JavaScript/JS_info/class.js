
//class

class MyClass {
    prop = value; // 프로퍼티
  
    constructor(...) { // 생성자 메서드
      // ...
    }
  
    method(...) {} // 메서드
  
    get something(...) {} // getter 메서드
    set something(...) {} // setter 메서드
  
    [Symbol.iterator]() {} // 계산된 이름(computed name)을 사용해 만드는 메서드 (심볼)
    // ...
  }


class User {
    constructor(name) { // 생성자 메서드
        this.name = name;
    }
    sayHi() { //클래스 내부에서 정의한 메서드는 User.prototype에 저장됨
        console.log(this.name);
    }
}

let user = new User("Subin"); //new User 을 호출해 객체형성 
user.sayHi();

console.log(typeof User); //function 클래스는 함수다. 
console.log(Object.getOwnPropertyNames(User.prototype)); //2) ['constructor', 'sayHi']

function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        };
    };
}

let User = makeClass("HIHIHIHI");
new User().sayHi();

getter and setter 

class User {

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("noze");
console.log(user.name);

user = new User("");

// class field 
// User.prototype 이 아닌 개별 객체에만 클래스 필드가 설정된다. 

class User {
    name = "No:ze";

    sayHi() {
        console.log(`${this.name} 님 안녕하세요!`);
    }
}

new User().sayHi();

//함수 바인딩 

class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        console.log(this.value);
    }
}

let button = new Button("어렵다어려워")
//클래스 필드 click = () => {...} 는 각 Button 객체마다 독립적인 함수를 만들어주고 이 함수의 this를
// 해당 객체에 바인딩시켜준다. button.click을 아무곳에나 전달할 수 있고, this엔 항상 의도한 값 들어감 
setTimeout(button.click, 1000);


}