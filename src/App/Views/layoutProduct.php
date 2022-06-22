        <div class="background">
            <img class="banner" src="../images/images.jpg" alt="french castle banner">
        </div>
        <div class="title">
            <h1>Royalement Français!</h1>
            <h2>« A nul autre pareil ! »</h2>
        </div>
    </header>

    <main class="layoutProduct">

        <section class="flag">
            <div class="panier" id="panier">
                <a href=""><img src="../images/icons/ajouter-un-panier.png" alt="icone panier"></a>
            </div>
        </section>


        <section class="content-product">

            <section class="images-product">

                    <div>
                        <div class="big-img">
                            <img src="<?= $products[0]['product_image'] ?>" alt="">
                        </div>

                        <div class="little-img">
                            <img src="<?= $products[0]['product_image'] ?>" alt="">
                            <img src="<?= $products[0]['product_image_hover'] ?>" alt="">
                            <img src="<?= $products[0]['product_image'] ?>" alt="">
                        </div>

                    </div>

                    <div>
                        <div class="description-add">
                            <h3><?= $products[0]['name_product'] ?></h3>
                            <p class="price"><?= $products[0]['price_product'] ?>€</p>
                            <p>Référence produit : 000000<?= $products[0]['id'] ?></p>
                            <p class="description-product"><?= nl2br($products[0]['description_product']) ?></p>

                            <div class="choice">
                                <label>Sélectionnez votre taille</label>
                                <select>
                                    <option>

                                    </option>
                                </select>
                                <label>Sélectionnez la quantité</label>
                                <select>
                                    <option>

                                    </option>
                                </select>
                                <button type="submit">Ajouter au panier</button>
                            </div>
                        </div>
                    </div>


            </section>

            <section class="more-products">
                <div>Vous aimerez peut-être aussi</div>
                <div>
                    liste de 3-4 produits de la même catégorie que celui observé (en flex-direction row)
                </div>

            </section>

        </section>
    </main>