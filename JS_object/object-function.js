// method call (실행할때 함수의 this(context)값을 바꾼다 , 실행할때마다 this를 변경 )

var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
lee.__proto__ = kim

function sum(prefix){
    return prefix + (this.first + this.second);
}

//sum();
console.log(sum.call(kim, ':'));

//bind (호출한 함수를 변경하는 것이 아니라 인자로 받은 조건을 만족하는 새로운 함수를 리턴,
// 내부적으로 새로운 변수에 기존에 있던 함수를 묶어주는 느낌으로 고정)
let kimSum = sum.bind(kim,'->');

console.log('kimSum()',kimSum());



