import { responsiveNavBar } from './navbar.js';
import { API } from './scroll.js';
import {removeClass} from './scroll.js';

// ---------- Media Queries JavaScript-------------

const SCREENWIDTH = {
    EXTRALARGE: 1440,
    LARGE: 1024,
    MEDIUM: 800,
    SMALL: 600,
    EXTRASMALL: 414,
};


const main = () => {
    $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 28,
        autoplay:true,
        autoplayTimeout:1800,
        items: 4,
    })
});



let larg = (window.innerWidth);
if (larg > SCREENWIDTH.LARGE) {
    API();
}
else {
    removeClass();
}
};
responsiveNavBar();


addEventListener('load', main);