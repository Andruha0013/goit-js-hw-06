const content=document.querySelector("#text");

document.querySelector("#font-size-control").addEventListener("input",function(){
    content.setAttribute("style",`font-size:${this.value}px`);
});