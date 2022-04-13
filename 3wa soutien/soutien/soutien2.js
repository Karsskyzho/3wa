
let tableau3 = ["xavier", "Marie","Luc", "Gael", "Yann", "Caroline", "Nicolas","Florian", "Jef"];
let etudiants = {};


for(let n of tableau3) {
    etudiants[n] = [];
}

for(let c in etudiants) {
    let notesAleatoire = parseInt(Math.random()*5)+3;
    etudiants[c] = tableauNotes(notesAleatoire);
    let maMoyenne = moyenne(etudiants[c]);
    console.log(c + " a une moyenne de : " + maMoyenne + " / 20");
}

console.log(etudiants);



// FONCTIONS

function tableauNotes(nombreNote) {
    let notes = [];
    for(let j=0; j<nombreNote; j++) {
        notes.push(Math.round(Math.random()*20));
    }
    return notes;
}

function moyenne(listeNotes) {
    let somme = 0;
    for(let n of listeNotes) {
       somme += n; 
    }
    let calculMoyenne =  somme / listeNotes.length;
    let moyenneArrondie = Math.round(calculMoyenne*100)/100;
    return moyenneArrondie;
}