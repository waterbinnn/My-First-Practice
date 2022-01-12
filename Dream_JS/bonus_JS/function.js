//함수 선언 

function add(a,b) {
    return a + b;
}

function add(num1, num2) {
    return num1 + num2;
}

function print() {
    console.log('print');
}
print(2,3); // print ->아무런 인자를 받지 않는 함수는 input 을 받지않는다 

//받아오고싶을 때는 

function print2(a, b) {
    console.log(`${a},${b}`);
}
print2('susu','bibibin'); //susu,bibibin


const sum = add(3, 4); //sum 이라는 변수에 add 함수를 넣음 
console.log(sum);


const doSomething = add;
 //add 함수가 갖고있는 주소를 doSomething 에 전달. 결국 똑같은 함수를 가리키고 있음 

const result = doSomething(2, 3); 
console.log(result);
// = 
const result2 = add(2, 3);
console.log(result2);

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) { //인자의 이름은 우리가 불러올 함수 이름 - callback
    const result = operator(3,3); //add(3,3)과 같음 
    //이름이 가리키는 함수의 레퍼런스를 가져오는것과 동일 
    console.log(result); //
}

surprise(add);
surprise(divide);


