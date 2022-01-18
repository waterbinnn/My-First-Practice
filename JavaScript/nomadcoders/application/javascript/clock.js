const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${second}`;
}

getClock();
setInterval(getClock, 1000); //정한 시간마다 function 호출

//기본으로 12:03:2 로 기본 clock 이 나와서 12:03:02 로 해주기 위해 padStart를 씀 
//** padStart()가 string 만 받아서 string으로 변환
//padStart(n , "") : n = length 의 길이 , " " = 추가할 문자 
