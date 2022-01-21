const images = ["1.jpeg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage); // 1.jpeg

const bgImage = document.createElement("img"); //img라는 element 추가

bgImage.src = `assets/${chosenImage}`; //assets/1.jpeg가 bgImage.src에 할당됨

document.body.appendChild(bgImage); //html body에 Img add

console.log(bgImage);
