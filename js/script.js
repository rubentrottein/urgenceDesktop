let select = document.querySelector("select");
let body = document.querySelector("body");
select.addEventListener("input", ()=>{
    if(select.value == 1)
    
    return body.style.background = "lightsalmon";
    console.log("le 1")
    setTimeout(
        ()=>{
            body.style.background = "rebeccapurple";
        }, 1000);
    if(select.value == 0)
        setTimeout(
            ()=>{
                    gotoDest()
            }, 1000);
        })

function gotoDest(){
    window.location.href="test.html";
}