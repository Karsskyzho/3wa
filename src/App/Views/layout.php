<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/style.css">
    <title><?= $title ?></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css" integrity="sha512-OTcub78R3msOCtY3Tc6FzeDJ8N9qvQn1Ph49ou13xgA9VsH9+LRxoFU6EqLhW4+PKRfU+/HReXmSZXHEkpYoOA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <header>
        <nav class="nav navbar">
            <a href="#" class="nav-brand"></a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="/">Accueil</a></li>
                <li class="nav-item"><a target="_blank" href="<?= url('/about') ?>">Qui sommes-nous?</a></li>
                <li class="nav-item"><a target="_blank" href="<?= url('/products') ?>">Nos produits</a></li>

                <?php if (empty($_SESSION)) {
                    echo '<li class="nav-item"><a target="_blank" href="'. url('/inscription') . '">Connexion</a></li>';
                } else {
                    echo '<li class="nav-item"><a target="_blank" href="'. url('/profil') . '">Mon Profil</a></li>';
                }?>

            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    <main>

        <?php require $template . '.php' ?>

    </main>

    <footer>
        <div class="contenu-footer">
            <div class="bloc footer-adresses">
                <h3>Nos adresses</h3>
                <p>06.85.65.28.50</p>
                <p>RoyalementFrancais@yahoo.fr</p>
                <p>28 avenue d'Orléans, Bordeaux, 33300</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1189.4167815689657!2d-0.5734161387089263!3d44.84344444899918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527d0a3f1549d%3A0xc733800db069dab7!2s28%20All%C3%A9es%20d&#39;Orl%C3%A9ans%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1651407153067!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="bloc footer-contact">
                <h3>Horaires de contact et de SAV</h3>
                <ul class="liste-horaires">
                    <li>❌ Lun fermé</li>
                    <li>✔️ Mar 8h-20h</li>
                    <li>✔️ Mer 8h-20h</li>
                    <li>✔️ Jeu 8h-20h</li>
                    <li>✔️ Ven 8h-20h</li>
                    <li>✔️ Sam 9h-19h</li>
                    <li>❌ Dim fermé</li>
                </ul>
            </div>
            <div class="bloc footer-social">
                <h3>Nous suivre sur les réseaux</h3>
                <ul class="liste-social">
                    <li><a href=""><img src="../images/icons/icons8-instagram.svg" alt=""></a></li>
                    <li><a href=""><img src="../images/icons/icons8-télégramme-app-64.svg" alt=""></a></li>
                    <li><a href=""><img src="../images/icons/icons8-facebook.svg" alt=""></a></li>
                    <li><a href=""><img src="../images/icons/icons8-twitter-entouré.svg" alt=""></a></li>  
                </ul>
            </div>
        </div>
    </footer>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="module" src="../JS/main.js"></script>
</body>
</html>