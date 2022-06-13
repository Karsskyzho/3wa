        <div class="background">
            <img class="banner" src="../images/images.jpg" alt="french castle banner">
        </div>
        <div class="title">
            <h1>Royalement Français!</h1>s
            <h2>« A nul autre pareil ! »</h2>
        </div>
    </header>

    <main class="main-product">

        <section class="flag">
            <div class="panier" id="panier">
                <a href=""><img src="../images/icons/ajouter-un-panier.png" alt="icone panier"></a>
            </div>
        </section>

        <section class="filter">
            <p>Faire un filtre ici</p>
        </section>
        <!-- instanciation ProductsManager pour exécuter la fonction qui va afficher le contenu de la bdd dans la vue -->
        <section class="galery">
            <?php foreach ($products as $product):?>
                <div class ="galery_content">
                    <a href="">
                        <img class="hoverOut" src=" <?= $product['product_image'] ?>" alt="">
                        <img class="hoverOn" src=" <?= $product['product_image_hover'] ?>" alt="">
                        <div class="title-price">
                            <p><?= $product['name_product'] ?></p>
                            <p><?= $product['price_product'] ?>€</p>
                        </div>
                    </a>
                </div>
            <?php endforeach; ?>
        </section>
    </main>





