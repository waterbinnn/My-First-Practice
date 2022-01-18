const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
// toDoForm안에 있는 input을 이 방법으로도 가져올 수 있다.
//  const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = []; 
//todo array 값을 새로 추가해주기 위해 let을 씀

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} //todo 저장 . 새로고침해서 화면에서는 사라져도 localstorage 에 저장하고 있음 
//JSON.Stringify 로 string으로 값을 저장하게 만들어줌


function deleteToDo(event){
    const li = event.target.parentElement; 
    //클릭 target 을 알 수 있음/ 클릭된 요소의 부모요소 - 누구를 삭제해야하는지 알수있게됨
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    //filter을 통해 클릭된 id를 가진걸 제외한 나머지는 냄긴다 li.id 는 string 이어서 parseInt를 통해 정수로 변환
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li"); //li생성
    li.id = newTodo.id;
    const span = document.createElement("span"); //span 생성
    span.innerText = newTodo.text; //span 에 newToDo 값 넣어줌
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //span 을 li 안에 들어가게 함 
    li.appendChild(button); 
    toDoList.appendChild(li); //li 를 todolist에 추가
}
//html에서 input 에 required 를 넣어줘서 빈값은 list에 입력되지 않음 

function handeleToDoSubmit(event){ //JS가 발생한 event를 handleToDoSubmit 에 첫번째 인자로 준다
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 현제 변수를 newTodo에 저장해주는것. empty 해주기 전에 value를 저장 
    toDoInput.value = ""; //엔터누르면 내용을 empty 해줌(newToDo에는 영향없음. 내용이 지워지는건 아님 )
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //array 에 todo 추가 
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handeleToDoSubmit);

//단순한 string 을 살아있는 array로 변경 
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
     //Reflesing되면 이전에 있던 값을 덮어쓰게 되었었는데
    toDos = parsedToDos; //이걸 통해 그 뒤에 추가하게 해줌
    parsedToDos.forEach(paintToDo);
}

