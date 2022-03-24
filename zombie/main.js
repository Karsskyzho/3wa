let animationInterval;
const spriteSheet = document.getElementById("zombietomb");
//const spriteSheet2 = document.getElementById("zombietomb2");
const widthOfSpriteSheet = 1000;
const widthOfEachSprite = 100;
let position = 0;



function stopAnimation() {
    clearInterval(animationInterval);
}

function startAnimation() {
/*   let position = widthOfEachSprite; //start position for the image */
  const speed = 125; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
        position = position + diff;
    }
    //reset the position to show first sprite after the last one
}, speed);
}


startAnimation();



const moveUp = (event) => {
    if (event.keyCode == "37") {
        position -=100; 
    }
    if (event.keyCode == "39") {
        position += 100;
    }
    console.log(event);
}

document.addEventListener('keydown', moveUp);



/* function startAnimation2() {
    let position = widthOfEachSprite; //start position for the image
    const speed = 50; //in millisecond(ms)
    const diff = widthOfEachSprite; //difference between two sprites
  
    animationInterval = setInterval(() => {
      spriteSheet2.style.backgroundPosition = `-${position}px 0px`;
  
      if (position < widthOfSpriteSheet) {
        position = position + diff;
      } else {
        //increment the position by the width of each sprite each time
        position = widthOfEachSprite;
      }
      //reset the position to show first sprite after the last one
    }, speed);
  }
  startAnimation2(); */
