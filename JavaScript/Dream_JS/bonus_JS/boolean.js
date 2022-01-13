// false : 0 , -0 , '', null, undefined (값이 없으면 false)
// true : -1 ,'hello' (값이 들어있으면 true)

let num; // 값을 넣지 않은 변수 : undefined - false 

if (true) {
    console.log('true!');
} else {
    console.log('false');
}

num && console.log(num); // 앞의 요소가 true 여야 true . 
// num 에 데이터가 있다면 console.log(num)을 할거야 . 이건데 num 에 값이 없어서 실행되지 않음

