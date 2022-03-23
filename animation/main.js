"use strict";
 
// Initialisation du compteur
let timer = 0;
 
// Evènement qui détecte quand la page est intégralement chargée (ajout d'un gestionnaire d'évènement "load" sur la fenêtre "window")
window.addEventListener("load", function () {
  // Zone du DOM qui contient le compteur
  let timerDom = document.querySelector("#timer");
 
  // Execution d'une fonction de mise à jour du compteur toutes les secondes. Cette fonction reçoit en paramètre la zone du DOM à mettre à jour
  let intervalID = window.setInterval(updateTimer, 1000, timerDom);
});
 
/** Fonction qui met à jour le timer en ajoutant 1
 * @param  {HTMLElement}  objet du DOM où est contenu le texte du Timer
 */
function updateTimer(timerDom) {
  // on met à jour la zone HTML
  timerDom.innerText = ++timer;
}



"use strict";

// Initialisation des fps
let fps = 0;
// Zone du DOM qui contient le texte des FPS
let fpsDom;
// arrondi pour obtenir la valeur de la prochaine seconde
let rounded = 1;
// counter qui va compter le nbr de rafraichissement en 1 seconde
let counter = 0;

// Evènement qui détecte quand la page est intégralement chargée
// (ajout d'un gestionnaire d'évènement "load" sur la fenêtre "window")
window.addEventListener("load", function () {
  // Zone du DOM qui contient le texte des FPS
  fpsDom = document.querySelector("#fps");

  // on demande l'execution de la fonction lorsque la page est chargée
  updateFps();
});

function updateFps() {
  // On récupère le nombre de millisecondes (timestamp)
  const now = performance.now();
  // on converti en secondes
  const secondsPast = now / 1000;

  if (secondsPast <= rounded) {
    console.log(secondsPast);
    counter++;
  } else {
    rounded = Math.ceil(secondsPast);
    fps = counter;
    counter = 0;
  }

  // on affiche les FPS dans l'HTML
  fpsDom.innerText = `${fps} fps`;

  // On indique au navigateur de rappeler notre fonction au prochain rafraichissement
  window.requestAnimationFrame(updateFps);
}