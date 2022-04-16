document.addEventListener('DOMContentLoaded', function() {

    // 1 Créer une classe etudiants : nom(string), age(number), present(bool), matieres(tableau)
    class Etudiants {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.isPresent = true;
            this.courses = [];
        }
        
    }
    
    
    let formulaire = document.getElementById("formulaire");
    let nom = document.getElementById("nom");
    let age = document.getElementById("age");
    let groupe = [];
    let etudiant = document.getElementById("etudiant");
    let etudiantList = document.getElementById("etudiantList");
    let matieres = document.getElementById(("matieres"));
    let matiere = document.getElementById(("matiere"));
    let courseList = document.getElementById(("courseList"));
    let notes = document.getElementById("notes");
    let note = document.getElementById("note");
    
    formulaire.addEventListener("submit", function(e) {
        e.preventDefault();
        if(nom.value && age.value) {
            groupe[groupe.length] = new Etudiants(nom.value, age.value);
        } else {
            alert('Merci de remplir tous les champs');
        }
        
        console.log(groupe);
        // On met a jour le selecteur d'étudiant
        let liste = "<option value=\"\">Choisir</option>";
        for(let i in groupe) {
            liste += "<option value=\""+i+"\">"+groupe[i].name+"</option>";
        }
        etudiant.innerHTML = liste;
        etudiantList.innerHTML = liste;
    });
    
    matieres.addEventListener("submit", function(e) {
        e.preventDefault();
        if(matiere.value && etudiant.value!='') {
            let course = {nom: matiere.value, note:[]};
            groupe[etudiant.value].courses.push(course);
        } else {
            alert('Merci de remplir tous les champs');
        }
        console.log(groupe);
    });
    
    etudiantList.addEventListener("change", function() {
        console.log();
        // On met a jour le selecteur d'étudiant
        let liste = "<option value=\"\">Choisir</option>";
        for(let i in groupe[etudiantList.value].courses) {
            liste += "<option value=\""+i+"\">"+groupe[etudiantList.value].courses[i].nom+"</option>";
        }
        courseList.innerHTML = liste;
    })
    
    notes.addEventListener("submit", function(e) {
       e.preventDefault();
       groupe[etudiantList.value].courses[courseList.value].note.push(note.value);
    });
    
    
    
    
    
    
    
    });