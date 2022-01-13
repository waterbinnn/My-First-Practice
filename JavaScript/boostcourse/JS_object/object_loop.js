// 배열에서의 반복문 
let memberArray = ['a','b','c'];
let i = 0;
while (i < memberArray.length){
    console.log(i,memberArray[i]);
    i = i+1;
}

console.group('array loop');

// 객체에서의 반복문 


console.group('object loop');
let memberObject = {
    manager:'a',
    deverloper:'b',
    designer:'c'
}

for (let name in memberObject){ //(현재 원소의 이름이 들어갈 변수) in (객체)
    console.log(name,memberObject[name]);
}
console.groupEnd('object loop');

