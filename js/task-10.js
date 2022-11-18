function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount)
{
  //alert(amount);
  let element=new DocumentFragment();
  let div;
  let proportions=30;
  if(amount>0)
  {
    for(let i=0;i<amount;i++)
    {
      div=document.createElement("div");
      proportions+=10*i;
      div.setAttribute("style",`width:${proportions}px; height:${proportions}px; background-color: ${getRandomHexColor()}`);
      element.append(div);
    }
    document.querySelector("#boxes").append(element);
  }
}
function destroyBoxes()
{
  //alert(document.querySelector("#boxes").childElementCount);
  const box=document.querySelector("#boxes");
  const numberElements=box.childElementCount;
  //document.querySelector("#boxes").childNodes.forEach(element => {element.remove();});
  for(let i=0;i<numberElements;i++)
  {
    box.lastChild.remove(); 
  }
}
document.querySelector("[data-create]").addEventListener("click",function(){createBoxes(document.querySelector("#controls").firstElementChild.value)});
document.querySelector("[data-destroy]").addEventListener("click",function(){destroyBoxes();});

