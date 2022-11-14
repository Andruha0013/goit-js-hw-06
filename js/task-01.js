(() => {

    const  categoties=document.querySelectorAll("li.item");
    console.log(`categories = ${categoties.length}`);//1
    for(let i=0;i<categoties.length;i++)
    {
        console.log(`Category = ${categoties[i].firstElementChild.textContent}`);//2
        console.log(`Elements = ${categoties[i].firstElementChild.nextElementSibling.childElementCount}`);//2
    }


})();