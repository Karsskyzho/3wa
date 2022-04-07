export const API = () => {
    let obsever = new IntersectionObserver(handleIntersect, options)


    let target = document.querySelector('.apparitionAPI');
    obsever.observe(target); obsever.observe(target);


const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1,
}

}