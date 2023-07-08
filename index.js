let minus=document.getElementById('minus-btn');
let plus=document.getElementById('plus-btn');
let cnt=document.getElementById('counter');
minus.addEventListener("click",minusfun);
plus.addEventListener("click",plusfun);

function minusfun()
{
    let n=parseInt(cnt.innerText);
    n=n-1;
    cnt.innerText=n;
}
function plusfun()
{
    let n=parseInt(cnt.innerText);
    n=n+1;
    cnt.innerText=n;
}

