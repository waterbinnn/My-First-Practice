const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}   
//toggle 은 이 과정을 한번에 해결해준다 

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }   

h1.addEventListener("click", handleTitleClick);
