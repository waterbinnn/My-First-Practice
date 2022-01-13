class Person{ //부모class
    constructor(name,first,second){
        this.name = name;
        this.first = first;
        this.second = second;
}
sum(){
    return this.first+this.second;
  }
}

class PersonPlus extends Person{  //persondl personPlus에 상속됨 - 자식class
        super(name,first,second);
        this.third = third;
    }

    sum(){
        return super.sum()+this.third;
    }

    avg(){
        return(this.first+this.second+this.third)/3;
    }
}

let Kim = new PersonPlus('Kim',10,30,50);

console.log("Kim.sum()",Kim.sum());
console.log("Kim.avg()",Kim.avg()); 




