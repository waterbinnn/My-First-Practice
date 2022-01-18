//랜덤 이미지 생성

const images = ["1.jpg", "2.jpg", "3.jpg"]; //이미지 array 생성

const chosenImage = images[Math.floor(Math.random() * images.length)]; //랜덤으로 나올수 있는 변수생성

const bgImage = document.createElement("img"); //<img>
// creatElement() : JS에서 html element를 만드는 함수 - 하지만 페이지에서 보이지 않음 

bgImage.src = `assets/${chosenImage}`; // <img src="assets/3.jpg>"
// bgImage 에 src 추가 . src 에 이미지 주소 전달 

document.body.appendChild(bgImage); // html의 body로 추가 

console.log(bgImage);