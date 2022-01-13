//함수 선언
function doSomething(add) {
    console.log(add);
    const result = add(2,4);
    console.log(result);
}

function add(a,b) {
    const sum = a + b; //sum이라는 변수 할당
    return sum; // 할당된 sum 이 return 
}

//함수 호출 
// doSomething(add); //add 라는 함수 자체가 전달됨 

const addFun = add;
console.log(add);
addFun(1,2);




