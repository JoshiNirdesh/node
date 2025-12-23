let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    btn.textContent="Clicked"
});


let input = document.querySelector(".input");
let output =document.querySelector(".output");

input.addEventListener("input",(e)=>{
    output.textContent = e.target.value
})

