import { carrousel } from './scroll.js';

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
carrousel();
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

addEventListener('load', main);