const hamburger = document.querySelector(".menu");
const header = document.querySelector("header");

const openMenu = () => {
  header.classList.add("translate");
};

hamburger.addEventListener("click", openMenu);
