const input=document.querySelector("#validation-input");
//alert(input.getAttribute("data-length"));
input.addEventListener("blur",function(){
    validation(this);
});
function validation(element)
{
    if(element.value.length==element.getAttribute("data-length"))
    {
        add_class(element,"valid");

    }
    else
    {
        add_class(element,"invalid");
    }
}

function  add_class(element,myclass)
{
    if(element.classList.contains('valid'))
    {
        element.classList.remove('valid');
    }
    if(element.classList.contains('invalid'))
    {
        element.classList.remove('invalid');
    }
    element.classList.add(myclass);
}