// Variables Simples

let texte = "Chaine \"de\" caractères"; // String
let chiffre = 8; // Number
let bouleen = true; // Boolean true / false
// true = 1  / -1 / "xxx"
// false = 0 / "" / null / undefined

// Variables comlpexes

let tableau = ["xavier",15,true];
//Pour accéder a une valeur j'indique la clé
/*
tableau[0] --> "xavier"
tableau[1] --> 15
tableau[2] --> true

let cle2 = 2
tableau[cle2] --> tableau[2] --> true
*/

let objet = { nom: "xavier", age: 15 };
// Pour accéder a une valeur j'indique la clé
/*
objet["nom"] --> "xavier"
objet.nom --> "xavier"

let cle = "age"
objet[cle] --> objet["age"] --> 15
*/

let tableau2 = ["xavier", 15, true, ["toto",15], {nom:"titi", age: 8, content: true}];
/*
tableau2[0] --> "xavier"
tableau2[1] --> 15
tableau2[2] --> true
tableau2[3] --> ["toto",15]
    tableau2[3][0] --> "toto"
    tableau2[3][1] --> 15
    
tableau2[4] --> {nom:"titi", age: 8, content: true}
    tableau2[4]["nom"] --> "titi"
    tableau2[4]["age"] --> 8
    tableau2[4].nom --> "titi"
    tableau2[4].age --> 8

*/
let objet2 = {texte:"xavier", chiffre:15, bool:true, tab:["toto",15], sousObjet:{nom:"titi", age: 8, content: true}};
/*
objet2.texte --> "xavier"

objet2.sousObjet --> {nom:"titi", age: 8, content: true}
objet2.sousObjet.nom --> "titi"
objet2.sousObjet["nom"] --> "titi"
*/

// JSON : JavaScript Object Notation
/*
{ cle: valeur, cle2: valeur2, ... }

"cle": "valeur", "cle2": 15, <-- Notation Stricte

cle: "valeur", cle2:15, <-- Notation possible pour les objets

*/

// Comparaison
/*
 == égale ===
 
 x = 4 <-- attribut la valeur 4 à la variable x
 x == 4 <-- compare la valeur de x à 4
 x === 4 <-- comparaison stricte = est-ce que x est égale à 4 ET est ce x est un chiffre
 
 let x = 4;
 x == 4 --> vrai
 x == "4" --> vrai
 x === "4" --> faux
 x === 4 --> vrai
 
 x !== 5 --> vrai
 x != 5
 
 > superieur
 >= sup ou égale
 < inférieur
 <= inf ou égale
 
 // Condition 
  let x = 4;

 if(x>2) { vrai
 if(x!=2) { vrai
 if(x>6) { faux
 if(x>4) { faux
 if(x>=4) { vrai
 
 if(x) { vrai
 if(!x) { faux
 
 let chiffre = -10
 let z = 1
 let w = 0
 let a = ""
 let b = "xavier"
 let c = true
 
 if(chiffre) --> { } oui
 if(z) --> { } oui
 if(!w) --> { } oui
 if(a) --> { } non
 if(b) --> { } oui
 if(c) --> { } oui
 if(w) --> { } non
 if(!c) --> { } non
 
 if(x>5 && c==true) { non } ET
 if(x>5 || c==true) { oui } OU 
 if(x>3 || c==true) { oui } OU 
 
 if(condition) {
     vrai
 } else {
     faux
 }
 
 if(condition) {
     vrai
 } else if(condition2) {
     vrai2
 } else if(condition3) {
     vrai3
 } else {
     faux
 }
 
switch (prenom) {
    case "xavier" :
    case "toto" :
     // code1
     break; 
    
    case "titi" :
     // code2
     break;
     
    default:
     // code3
}

let x = 1;

// Boucles

while (toto == true) {
    console.log(x);
    x *=3;
    if(x>50) {
        toto = true;
    }
}

for(let i=0; i<10; i++) {
    console.log(i);
}

let tableau = ["xavier","luc","kilian"];
*/
/*for(let i in objet) {
    console.log(i, tableau[i]) 
}*/
/*
for(let i=0; i<tableau.length; i++) {
    console.log(i, tableau[i]);
}

for(let v of tableau) {
    console.log(v);
}*/

/*
let monObjet = { nom: "xavier", age: 15 };

let cle = Object.keys(monObjet);
console.log(cle);

let values = Object.values(monObjet);
console.log(values);

let elements = Object.entries(monObjet);
console.log(elements);

*/