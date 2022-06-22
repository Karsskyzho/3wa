    <div class="background">
        <img class="banner" src="../images/backgroundhd.jpg" alt="french castle banner">
    </div> 
    <div class="title">
        <h1>Royalement Français!</h1>
        <h2>« A nul autre pareil ! »</h2>
    </div>
</header>

<form action="" method="post" class="formulaire">

    <label for="">Nom</label>
    <input type="text" name="name" placeholder="Nom" required>

    <label for="">Prénom</label>
    <input type="text" name="firstname" placeholder="Prénom" required>

    <label for="">Date de naissance</label>
    <input type ="date" name="birthday" required>


    <label for="">Email</label>
    <input type="email" name="email" placeholder="Exemple@hotmail.fr" required>

    <!-- fileset avec légende ou article ou  alors titre-->
    <label for="address">Adresse</label> <!-- le for se lie avec l'id du select -->
    <input type="text" name="address" placeholder="numéro et rue" required>

    <label for="regions">Sélectionnez votre region</label>
    <select name="regions" id="regions"></select>
    <label>Sélectionnez votre département</label>
    <select name="departements" id="departements"></select>
    <label>Sélectionnez votre ville</label>
    <select name="city" id="city"></select>


    <label for="">Mot de passe</label>
    <input type="password" name="password" required>

    <label for="">Confirmer votre mot de passe</label>
    <input type="password" name="password_confirm" required>

    <button type="submit" name="create" value="S'inscrire">S'inscrire</button>
    <p>Déjà inscrit ? Connectez-vous <a target="_blank" href="<?= url('/connectionUser') ?>">ici</a></p>
</form>
    <?php var_dump($_POST); ?>
</main>