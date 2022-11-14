(() => {

    const  minus=document.querySelector("[data-action='decrement']");
    const  plus=document.querySelector("[data-action='increment']");
    const  monitor=document.querySelector("#value");
    let counterValue=0;
    minus.addEventListener("click",function(){
        counterValue--;
        apdateMonitor(counterValue);
    });
    plus.addEventListener("click",function(){
        counterValue++;
        apdateMonitor(counterValue);
    });

    function apdateMonitor(newVal)
    {
        monitor.textContent=newVal;
    }
})();