const loginForm = document. querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault(); //submit 하면 정보 사라지는 브라우저 디폴트값을 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); //form 을 hide
    const username = loginInput.value; //login.input value를 username에 저장
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

//localStorage: 정보를 전달하고 삭제하는 DB API 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); //classList 에서 hidden을 rmemove
    loginForm.addEventListener("submit", onLoginSubmit); // submit다시 하게 form 재생
} else {
    //show the greetings
    paintGreetings();
}

