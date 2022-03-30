import{User} from "./user.js";
import {Admin} from "./admin.js";

const main = () => {
    const user = new User(); // créer un objet de la classe User
    user.setfirstName("Francis");
    user.setlastName("Dupont");
    console.log(user.getFullName());
};

addEventListener('load', main);