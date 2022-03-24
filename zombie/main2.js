"use strict";

const FPS = 1000 / 8;
let position = 0;

const Sprite = {
  SIZE: 100,
  NUMBER: 11,
  PATH: "img/zombie.png",
};

const DIRECTION = {
  UP: 1,
  DOWN: 2,
};

const main = () => {
  const zombieDom = document.querySelector("#zombietomb");
  const positionMax = Sprite.SIZE * Sprite.NUMBER - Sprite.SIZE;
  zombieDom.style.backgroundImage = `url(${Sprite.PATH})`;
  zombieAction(zombieDom, positionMax);
  addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      moveZombie(DIRECTION.UP, zombieDom, positionMax);
    } else if (event.key === "ArrowDown") {
      moveZombie(DIRECTION.DOWN, zombieDom, positionMax);
    }
  });
};

const zombieAction = (zombieDom, positionMax) => {
  moveZombie(DIRECTION.UP, zombieDom, positionMax);
  if (position > positionMax * -1) {
    setTimeout(zombieAction, FPS, zombieDom, positionMax);
  }
};

const moveZombie = (direction, zombieDom, positionMax) => {
  direction === DIRECTION.UP ? moveUp(positionMax) : moveDown(positionMax);
  zombieDom.style.backgroundPosition = `${position}px`;
};

const moveUp = (positionMax) => {
  if (position > positionMax * -1) position -= Sprite.SIZE;
};

const moveDown = (positionMax) => {
  if (position < 0) position += Sprite.SIZE;
};

document.addEventListener("DOMContentLoaded", main);