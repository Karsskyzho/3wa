document.addEventListener('DOMContentLoaded', function() {
    // Agence immobilière
    let container = document.getElementById("container");
    /* let image = [];
    let bouton = [];
    
    let tableau = [
        {titre:"Jolie maison 3 pieces", surface:80, prix:150000, vendu:false, pieces:["Salon","cuisine","chambre1","chambre2"], dpe:50, photos:['https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg', 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg']},
        {titre:"Appartement 4 pièces", surface:120, prix:165000, vendu:false, pieces:["Salon","cuisine","chambre1","chambre2","bureau"], dpe:70, photos:['https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg', 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg']},
        {titre:"Ferme", surface:200, prix:180000, vendu:true, pieces:["Salon","cuisine","chambre1","chambre2"], dpe:40, photos:['https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg', 'https://images.pexels.com/photos/259637/pexels-photo-259637.jpeg']}
        ];
    
  
    for(let i in tableau) {
        let listePiece = "<ul>";
        let vendu = "";
        let item = tableau[i];
        
        for(let piece of item.pieces){
            listePiece += "<li>" + piece + "</li>";
        }
        listePiece += "</ul>";
        
        if(item.vendu === true) {
            vendu = "<div class=\"vendu\">Vendu</div>";
        } 
        
        let fiche = "<div class=\"fiche\">"+ vendu +"<div id=\"image"+ i +"\" class=\"image\"><img src=\"" + item.photos[0] + "\" alt=\"\"></div> <div class=\"infos\"><h3>" + item.titre + "</h3><div class=\"prix\">" + item.prix + " €</div><button id=\"plus"+ i +"\" class=\"plus\">+ d'infos</button>"<div class=\"detail\">Surface de <b>" + item.surface + "m²</b><p>composée de : " + listePiece + "</p><div class=\"dpe\">DPE : " + item.dpe + "</div></div>"</div></div>";

        //let info = "<div class=\"detail\">Surface de <b>" + item.surface + "m²</b><p>composée de : " + listePiece + "</p><div class=\"dpe\">DPE : " + item.dpe + "</div></div>";
        
        container.innerHTML += fiche;
    }
    
    
 */
    // AddEventListener
    let image = document.getElementById("image");
    let detail = document.querySelector(".detail");
    let bouton = document.getElementById("plus");
    bouton.addEventListener("click", function() {
            detail.classList.toggle("hidden");
        console.log("image");
        });

    image.addEventListener("click", function() {
            console.log("image");
        });

        // 4 - dans la partie infos rajouter un div qui contient les autres infos du bien : surface, liste des pièces, 
        
        
    // Manipulation du DOM

});


