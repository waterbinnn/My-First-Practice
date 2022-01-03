// 객체가 내부적으로 가지고 있는, 자기 자신을 가리키는 표현 
// 어떤 메소드에서 그 메소드가 속해있는 객첼ㄹ 가리키는 특수 키워드 
let Lee = {
    name:"lee",
    first:10,
    second:20,
    sum : function(f,s){
        return this.first + this.second;
    }
}

// console.log("Lee.sum(Lee.first,Lee.second)",Lee.sum(Lee.first,Lee.second));
console.log("Lee.sum(Lee.first,Lee.second)",Lee.sum());
