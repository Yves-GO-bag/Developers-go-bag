const open = document.getElementById("open");
const close = document.getElementById("close");
const mdl = document.querySelector(".mdl-container");

open.addEventListener("click", () => {
    mdl.classList.add('show')
})
close.addEventListener("click", () => {
    mdl.classList.remove('show')
})