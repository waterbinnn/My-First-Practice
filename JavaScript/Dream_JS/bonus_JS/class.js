class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0; //counter이라는 변수
        this.callback = runEveryFiveTimes; //callback이라는 변수
    }

    increase() { // class에서 함수 선언할때 function 안써도 됨 
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`wow ${num}`);
}
const coolCounter = new Counter(printSomething);
//이렇게 했을 경우 내용을 바꾸고싶을 때 변경 가능 

coolCounter.increase(); //1
coolCounter.increase(); //2
coolCounter.increase(); //3
coolCounter.increase(); //4
coolCounter.increase(); //5
coolCounter.increase(); //wow 5
coolCounter.increase(); //6
coolCounter.increase(); //7
coolCounter.increase(); //8
coolCounter.increase(); //9
coolCounter.increase(); //10 
coolCounter.increase(); //10 wow






