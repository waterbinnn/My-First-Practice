
// 객체 : 서로 연관된 변수와 함수를 그룹화하여 이름을 붙인것 

// 내장객체 
console.log("math.PI",Math.PI); //파이값 출력
console.log("Math.random()", Math.random()); // 랜덤 값을 출력합니다.
console.log("Math.floor(3.9)", Math.floor(3.9)); // 값을 반올림합니다.

// 객체 만들기 
let MyMath = {
    PI:Math.PI,
    random : function(){
        return Math.random();
    },
    floor:function(let){
        return Math.floor(let);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

