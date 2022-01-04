//--메서드(method)-- 

let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("안녕하세요!");
};

user.sayHi(); // 안녕하세요!


// 아래 두 객체는 동일하게 동작

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  user = {
    sayHi() { // "sayHi: function()"과 동일
      alert("Hello");
    }
  };

//  --- this ---

  let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // 'this'는 '현재 객체'를 나타냅니다.
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John

  // + * 계산기 만들기 --
let calculator = {
  sum(){
    return this.a + this.b;
  }
  mul(){
    return this.a * this.b;
  }
  read(){
    this.a = prompt('1 : ',0);
    this.b = prompt('2 :',0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
