import {User} from "./user.js";// import de la classe User

export class Admin extends User {// création de la classe Admin qui hérite de la classe User
    canEditArticles() {
        return true;
    }
}
