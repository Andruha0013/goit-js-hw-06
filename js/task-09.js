const button=document.querySelector(".change-color");
const body=document.querySelector("body");
const colorOutput=document.querySelector(".color");

button.addEventListener("click",function(){
    let color=getRandomHexColor();
    colorOutput.textContent=color;
    body.setAttribute("style",`background-color:${color}`);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
