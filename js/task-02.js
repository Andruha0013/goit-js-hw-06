const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let element;
let allElement=new DocumentFragment();
for(let i=0;i<ingredients.length;i++)
{
    element=document.createElement("li");
    element.textContent=ingredients[i];
    element.setAttribute("class","item");
    allElement.append(element);
}
//console.log(allElement);
document.querySelector("ul#ingredients").append(allElement);