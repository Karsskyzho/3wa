const main = () => {

    TweenMax.to(".left", 2, {
    delay : 1.5,
    left : "-100%",
    ease : Expo.easeInOut,
});

TweenMax.to(".right", 2, {
    delay : 2,
    left : "+100%",
    ease : Expo.easeInOut,
});

}

addEventListener('load', main);