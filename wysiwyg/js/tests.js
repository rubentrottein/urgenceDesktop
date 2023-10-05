// Test upload -> post only
const fileInput = document.querySelector("[type=file]");
fileInput.addEventListener("input", (e)=>{
    console.log(fileInput.value);
    document.querySelector("body").background = `url(${fileInput.value}) fixed, no-repeat`;
})