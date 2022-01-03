class Person{
    constructor(name,first,second){
        this.name = name;
        this.first = first;
        this.second = second;
}
sum(){
    return'this:' +(this.first+this.second);
  }
}

let Kim = new Person('kim',10,30);
Kim.sum = function(){
    return 'this : '+(this.first+this.second);
}

let lee = new Person('lee',10,10);

console.log("Kim.sum()",Kim.sum());
console.log("lee.sum()",lee.sum());

