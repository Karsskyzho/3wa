<div class="background">
    <img class="banner" src="../images/background.webp" alt="french castle banner">
</div>
<div class="title">
    <h1>Royalement Français!</h1>
    <h2>« A nul autre pareil ! »</h2>
</div>
</header>


<main class="main-profil">

    <form action="" method="POST">
        <button type="submit" name="logout">Déconnexion</button>
    </form>

</main>

<div class="orders-list">

</div>

<div class="personal">
    <div>
        <h3>Informations personnelles <a href="/modifyProfil">🖉</a></h3>

    </div>

    <br>
    <?= 'Nom : ' . $_SESSION['user_name'] ?>
    <br>
    <?= 'Prénom : ' . $_SESSION['user_firstname']?>
    <br>
    <?= 'Mail : ' . $_SESSION['email']?>
    <br>
    <?php
        $explode = $_SESSION['userBirthday'];
        $number = explode("-", $explode);

        $date = new DateTime();
        $date->setDate($number[0], $number[1],$number[2]);
        $birthday = $date->format('d/m/Y');
        echo 'date de naissance : ' . $birthday; ?>
    <br>
    <hr>
    <p>Adresse</p>
    <?= $_SESSION['address'] . ', <br>' . $_SESSION['user_region'] . ', <br>' . $_SESSION['city'] ?>
</div>



