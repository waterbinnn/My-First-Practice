// 프로퍼티 합계구하기 
let salaries = {
  John: 100,
  Pete: 130
  Ann: 160,
}
let sum = 0;
for (let key in salaries){
  sum += salaries[key];
}
// alert(sum);

// 프로퍼티 값 두 배로 부풀리기 
// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj){
    if(typeof obj[key] == 'number'){
      obj[key] *= 2;
    }
  }
}

alert.menu[0];


  let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

let user = {}
user.name : "John",
user.surname : "Smith",
user.name = "Pete";
delete user.name;

function isEmpty(obj){
  for (let key in obj){
    return false;
  }
  return true;
}


//독립적인 복제 

let user = {
  name: "John",
  age: 30
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
  clone[key] = user[key];
}

// 이제 clone은 완전히 독립적인 복제본이 되었습니다.
clone.name = "Pete"; // clone의 데이터를 변경합니다.

alert( user.name ); // 기존 객체에는 여전히 John이 있습니다.

// 병합과 object.assign
Object.assign(dest, [src1, src2, src3...])

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

//목표개체에 동일한 이름을 가진 프로퍼티가 있는 경우엔 기존의 값이 덮어씌워짐
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // user = { name: "Pete" }

//object.assign 을 이용해 반복문 없이 객체 복사
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
// user에 있는 모든 프로퍼티가 빈 배열에 복사되고 변수에 할당

