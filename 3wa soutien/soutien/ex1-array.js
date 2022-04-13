
let tableau3 = ["xavier", "Marie","Luc", "Gael", "Yann", "Caroline", "Nicolas","Florian", "Jef"];

// Afficher dans la console chaque élément du tableau avec sa clé 

// 1 Avec une boucle WHILE
let v = 0;
while(v<tableau3.length) {
  console.log(v, tableau3[v]);
  v++;
}

// 2 Avec une boucle FOR
for(let i=0; i<tableau3.length; i++) {
    console.log(i, tableau3[i]);
}

// 3 Avec une boucle FOR IN
for(let j in tableau3) {
    console.log(j,tableau3[j]);
}

// 4 Avec une boucle FOREACH
tableau3.forEach(function(v,k) {
    console.log(k,v); 
});


/////////////////

// 5 Ajouter 3 prénoms au tableau 
tableau3.push("Samy", "Louis", "Alex");

// 6 Utiliser une boucle pour créer un objet "etudiants" qui contient le prenom du tableau comme clé et un nombre aléatoire entre 0 et 100 comme valeur de cette clé. ex : {"xavier":24, "marie":58,... }
let etudiants = {};
for(let n of tableau3) {
    let rand = parseInt(Math.random()*100);
    etudiants[n] = rand;
}
console.log(etudiants);

// 7 lire chaque entrée de mon objets "etudiants" remplacer le chiffre par un tableau de note (4 notes) entre 0 et 20.
for(let i in etudiants) {
    let notes =[];
    for(let j=0; j<4; j++) {
        notes.push(parseInt(Math.random()*20));
    }
    etudiants[i] = notes;
}
console.log(etudiants);

// 8 Lire chaque entré de l'objets et afficher dans la console la phrase : "Xavier a une moyenne de : 7.5 / 20"
/*
// je lis chaque entre de mon objet
let cle = Object.keys(etudiants);
for(let i=0; i<cle.length; i++) {       
    // calculer une moyenne des notes
    let somme = 0;
    // faire une boucle qui fait la somme des notes 
    for(let n of etudiants[cle[i]]) {
       somme += n; 
    }
    let nombreDeNotes = etudiants[cle[i]].length;
    // divise la somme par le nombre de note
    let moyenne = somme / nombreDeNotes;
    // j'affiche le resultat dans la console
    console.log(cle[i]+" a une moyenne de : "+moyenne+" / 20");
    
}
*/
// Version améliorée
for(let c in etudiants) {       
    let somme = 0;
    for(let n of etudiants[c]) {
       somme += n; 
    }
    console.log(c + " a une moyenne de : " + somme / etudiants[c].length + " / 20");
}

// FOR(... IN ....) je vais lire les clés d'un tableau OU d'un objet 
// Pour un tableau --> 0 / 1 / 2 / 3 ....
// Pour un objet   --> "nom" / "prenom" / "age" ...

// FOR(... OF ...) je vais lire les valeur UNIQUEMENT d'un tableau