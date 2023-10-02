const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const select = document.querySelectorAll("select");
const preview = document.querySelector("#preview");
const page = document.querySelector("*");
const userText= document.querySelector("#preview p");
const button = document.querySelectorAll("button");
const textBg = document.querySelector("#preview article");
const rangeIndicator = document.querySelector(".rangeIndicator");

let bg = localStorage.getItem("bg");
let imgBg = localStorage.getItem("imgBg");
let color = localStorage.getItem("color");
let textBgColor = localStorage.getItem("textBgColor");
let blurLvl = localStorage.getItem("blurLvl");
let font = localStorage.getItem("font");
let text = localStorage.getItem("text");
let capslock = false;
//Report last theme to the inputs
try{
    inputs[0].value = bg;
    inputs[1].value = color;
    inputs[2].value = textBgColor;
    inputs[3].value = blurLvl;
    if(select[0].value != null){
        select[0].value = imgBg;
    }
    select[1].value = font;
    textarea.value = text;
} catch (e) {
    document.querySelector("#monitor").innerHTML = "Thème non défini";
}

//Apply last theme or default
start();
button[1].addEventListener("click", save);
button[0].addEventListener("click", allCaps);

function start(){
    bg = inputs[0].value;
    color = inputs[1].value;
    textBgColor = inputs[2].value;
    font = select[1].value;
    text = textarea.value;
    
    preview.style.background=bg;
    if(imgBg){
        bg = "backgrounds/"+imgBg+".jpg";
        preview.style.background=`url(${bg}) fixed no-repeat`;
        preview.style.backgroundSize=`cover`;
    }
    
    preview.style.color=color;
    preview.style.fontFamily=font;
    textBg.style.background = textBgColor + "80";
    textBg.style.opacity = blurLvl;
    textBg.style.backdropFilter = blur(blurLvl);
    page.style.fontFamily=font;

    rangeIndicator.innerHTML = blurLvl;
    userText.innerHTML = text;
}

inputs[0].addEventListener("input", ()=>{
    imgBg = null;
    start();
})
inputs[1].addEventListener("input", start);
inputs[2].addEventListener("input", start);
select[1].addEventListener("input", start);
select[0].addEventListener("input", ()=>{
    imgBg = select[0].value;
    start();
});
textarea.addEventListener("input", start);

function save(){
    localStorage.setItem("bg", bg);
    localStorage.setItem("color", color); 
    localStorage.setItem("textBgColor", textBgColor); 
    localStorage.setItem("blurLvl", blurLvl); 
    localStorage.setItem("font", font); 
    localStorage.setItem("text", text); 

    if(capslock){allCaps();}
    if(imgBg){localStorage.setItem("imgBg", imgBg);}
}

// Image Background

(function populateBgSelector(){
    populate(null);
    for(let i=0; i<=3;i++){
        populate(i);
    }
    function populate(text){
        let option = document.createElement("option");
        option.value = text;
        option.innerHTML = 'image' + text;
        select[0].append(option);
        if (text===null){
            option.innerHTML = "Choisir une image";
            return
        }
    }
    start();
})()

// All Capital Letters
function allCaps(){
    if(capslock){
        userText.innerHTML = userText.innerHTML.toLowerCase();
        capslock = false;
        return
    }
    userText.innerHTML = userText.innerHTML.toUpperCase();
    capslock = true;
}
