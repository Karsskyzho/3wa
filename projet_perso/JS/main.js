import { responsiveNavBar } from './navbar.js';
import { API } from './scroll.js';

// ---------- Media Queries JavaScript-------------

const SCREENWIDTH = {
    EXTRALARGE: 1440,
    LARGE: 1024,
    MEDIUM: 800,
    SMALL: 600,
    EXTRASMALL: 414,
};


const laptops = (action) => {
    const laptops = window.matchMedia(`${SCREENWIDTH.LARGE}px`);
    laptops.addEventListener('change', action);
    return laptops;
addEventListener('resize', action);
};

const tablet = (action) => {
    const tablet = window.matchMedia(`${SCREENWIDTH.MEDIUM}px`);
    tablet.addEventListener('change', action);
    return tablet;
    addEventListener('resize', action);
};

const smartphone = (action) => {
    const smartphone = window.matchMedia(`${SCREENWIDTH.SMALL}px`);
    smartphone.addEventListener('change', action);
    return smartphone;
    addEventListener('resize', action);
};

const main = () => {
    $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 28,
        autoplay:true,
        autoplayTimeout:1800,
        items: 4,

        itemsDesktop : [1600,5], //3 items under 1600px browser width

    })
});
    responsiveNavBar();

    API();
}

addEventListener('load', main);