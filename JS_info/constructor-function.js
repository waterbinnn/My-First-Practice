// 생성자 함수(constructor function)
// 함수 이름의 첫 글자는 대문자로 시작
// 반드시 'new' 연산자를 붙여 실행

function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("보라");
  
  alert(user.name); // 보라
  alert(user.isAdmin); // false

  function User(name) {
    // this = {};  (빈 객체가 암시적으로 만들어짐)
  
    // 새로운 프로퍼티를 this에 추가함
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (this가 암시적으로 반환됨)
  }

//   let user = new User("보라")는 아래 코드를 입력한 것과 동일하게 동작

  let user = {
    name: "보라",
    isAdmin: false
  };

//  ---   new function() { … }
// 재사용할 필요없는 복잡한 개체 만들어야 할 때 
//   이 함수는 익명함수여서 어디에도 저장되지 않는다. 단 한번만 호출. 재사용 불가 

  let user = new function() {
    this.name = "John";
    this.isAdmin = false;
  
    // 사용자 객체를 만들기 위한 여러 코드.
    // 지역 변수, 복잡한 로직, 구문 등의
    // 다양한 코드가 여기에 들어갑니다.
  };

