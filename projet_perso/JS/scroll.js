export const carrousel = () => {
    const container = document.querySelector(".carrousel");

    const btnRight = document.querySelector(".right--move");
    const btnLeft = document.querySelector(".left--move");
    const liWidth = document.querySelector(".slider").offsetWidth;

    const right = () => {
    container.scrollLeft += liWidth/2;
  };
  const left = () => {
    container.scrollLeft -= liWidth/2;
  };

  btnRight.addEventListener("click", right);


  btnLeft.addEventListener("click", left);

};





autoplayTimeout:2000;
