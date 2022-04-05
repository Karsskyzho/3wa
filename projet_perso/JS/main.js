import { responsiveNavBar } from './navbar.js';
const main = () => {


    TweenMax.to(".left", 2, {
    delay : 1,
    left : "-100%",
    ease : Expo.easeInOut,
});

TweenMax.to(".right", 2, {
    delay : 1.5,
    left : "+150%",
    ease : Expo.easeInOut,
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 28,
    autoplay:true,
    autoplayTimeout:1500,
})
responsiveNavBar();
}


addEventListener('load', main);