
let chrono = document.querySelector('#chrono');


let heure = 0;
let minute = 0;
let seconde = 0;
let chronos = `${heure}:${minute}:${seconde}`;


function minuteur(){
    let t = setTimeout(minuteur, 1000);
    seconde++;

    if (seconde >= 60) {
        seconde = 0;
        minute++;
        if (minute >= 60) {
            minute = 0;
            heure++;
        }
    }

    if (seconde < 10) {
        seconde = "0" + seconde;
    }
    else {
        seconde = seconde;
    }

    console.log(seconde);
    chrono.innerHTML = `${heure}:${minute}:${seconde}`;
}

   /*  if (minute < 10) {
        minute = "0" + minute;
    }
    else {
        minute = minute;
    }

    if (heure < 10) {
        heure = "0" + heure;
    }
    else {
        heure = heure;
    } */


minuteur();

/* function ajoutzero(number) {

    if (number < 10) {
        return "0" + number;
    }
    else {
        return "" + number;
    }
} */



/* console.log(setTimeout(minuteur(), 1000))
console.log(timer); */



