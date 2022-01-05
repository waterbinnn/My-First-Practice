__proto__

let superObj = {superVal:'super'}
let subObj = {subVal : 'sub'}
subObj.__proto__ = superObj; // prototype link인 __proto__ 를 통해서 객체를 상속 
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub'; //객체를 바꾼것. 객체의 프로토는 바뀌지않음 
console.log('superObj.superVal =>', superObj.superVal);


Object.create

let superObj = {superVal:'super'}
let subObj = Object.create(superObj); //객체를 상속하는 새로운 객체를 만들 수 있다
subObj.subVal = 'sub';

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub'; //객체를 바꾼것. 객체의 프로토는 바뀌지않음 
console.log('superObj.superVal =>', superObj.superVal);


let kim  = {
    name: 'kim',
    first:10, second:20,
    sum:function(){return this.first+ this.second}
}

let lee = {
    name : 'lee',
    first:10, second:40,
    avg:function(){
        return (this.first+this.second)/2;
    }
}
lee.__proto__ = kim;
console.log('lee.sum()', lee.sum());
console.log('lee.avg()', lee.avg());

//같은 내용을 object.crate로 만들어줌

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this.second)/2;
}

