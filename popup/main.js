const openModale = document.getElementById("openModal");
const pop = document.getElementById("popup");
const close = document.getElementById("close");
const body = document.querySelector('body');

const opentest = () => {
    openModale.addEventListener("click", switchPop);
    close.addEventListener("click", switchPop);
}
const switchPop = () => {
    pop.classList.toggle("active");
    body.classList.toggle("modal-active");
}
addEventListener("load", opentest);
