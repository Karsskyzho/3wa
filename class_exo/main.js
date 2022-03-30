import{User} from "./user.js";
import {Admin} from "./admin.js";


const main = () => {
    const user = new User(); // créer un objet de la classe User
    const fullNamejjjj = user.fullName("John", "Doe"); // appeler la méthode fullName
    console.log(fullNamejjjj);// afficher John Doe



    const admin = new Admin(); // créer un objet de la classe Admin
    const fullName = admin.fullName("John", "Doe");// appeler la méthode fullName
    console.log(fullName);
    console.log(admin.canEditArticles());
};

addEventListener('load', main);// lancer la fonction main au chargement de la page