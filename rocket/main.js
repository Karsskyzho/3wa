let compteur = 11;
let arret;
const affichage = document.getElementById('billboard');
const depart = document.getElementById('firing-button');
const compteurElt = document.querySelector('span');
const rocket3 = document.querySelector("rocket");
let intervalId;

depart.addEventListener('click', () => { 
    intervalId = setInterval(diminuerCompteur, 1000);

});
depart.removeEventListener('click', () => {
    intervalId = setInterval(diminuerCompteur, 1000);
});


function diminuerCompteur() {
    depart.classList.add('disabled');
    compteur--;
    console.log("test");
    if (compteur >= 0) {
        compteurElt.innerText = compteur;
    } else {
        clearInterval(intervalId);
    }
    if (compteur <=10) {
        document.getElementById("rocket").src="./images/rocket3.gif";
    }
    if (compteur <= 0) {
        rocket.classList.add("tookOff");
    }
}









/* const decompte= () => {
    
    if (secondes >= 0)
    {
        arret = setTimeout(decompte, 10000);
    }
    else 
    {
        clearTimeout(arret);
    }
} */
