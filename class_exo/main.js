import{User} from "./user.js";
import {Admin} from "./admin.js";
import {Age} from "./age.js";

const main = () => {
    const user = new User(); // créer un objet de la classe User
    user.setfirstName("Francis");
    user.setlastName("Dupont");
    user.setjob("Opera de paris");
    const age = new Age(33);
    user.setAge(age);
    console.log(`Je m'appelle : ${user.getFullName()} et je travaille à ${user.getjob()} et j'ai ${user.getAge()} ans`);
};

addEventListener('load', main);