
export const carrousel = () => {
    const container = document.querySelector('.container');

    const btnRight = document.querySelector('.right--move');
    const btnLeft = document.querySelector('.left--move');

    const right = () => {
        container.scrollLeft += 100;
    };

    btnRight.addEventListener('click', right);

    const left = () => {
        container.scrollLeft -= 100;
    }
    btnLeft.addEventListener('click', left);
};