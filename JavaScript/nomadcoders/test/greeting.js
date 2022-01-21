const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { //로그인 화면 
    event.preventDefault(); //디폴트값 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); //hidden 값 add
    const username = loginInput.value; //username변수에 login input value값 할당
    localStorage.setItem(USERNAME_KEY, username); //로컬스토리지에 username 저장
    paintGreetings(); //paintGreeting 실행 
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY); //storage 에서 username값 가져옴
    greeting.innerText = `HELLO ${username}!`; //화면에 HELLO ${username}
    greeting.classList.remove(HIDDEN_CLASSNAME); //classname hidden 값 remove
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //savedUsername 변수를 만들어 저장된 ID 값을 할당

if (savedUsername === null) { //입력값이 없을때(null일때)
    loginForm.classList.remove(HIDDEN_CLASSNAME); //classname hidden 제거해서 
    loginForm.addEventListener("submit", onLoginSubmit); //화면에 로그인form 보이게 한다
} else {
    paintGreetings(); //값이 있을경우 paintGreeting 을 실행한다. 
}


