    <div class="background">
        <img class="banner" src="../images/backgroundhd.jpg" alt="french castle banner">
    </div>
    <div class="title">
    <h1>Royalement Français!</h1>
    <h2>« A nul autre pareil ! »</h2>
    </div>
    </header>
        <!-- main -->

    <main>
        <!--- carousel -->
        <div class="first">
            <h2> Produits vedettes</h2>
            <div class="container" id='container'>
                <ul class="carousel owl-carousel owl-theme">
                    <li class="slider item">
                        <div>
                            <a href="/layoutProduct?id=<?= $products[10]['id'] ?> " target="_blank"><img src="<?= $products[10]['product_image'] ?>" alt="<?= $products[10]['name_product'] ?>"></a>
                        </div>
                        <div>
                            <p><?= $products[10]['name_product'] ?></p>
                        </div>
                    </li>
                    <li class="slider item">
                        <div>
                            <a href="/layoutProduct?id=<?= $products[4]['id'] ?>" target="_blank"><img src="<?= $products[4]['product_image'] ?>" alt="<?= $products[4]['name_product'] ?>"></a>
                        </div>
                        <div>
                            <p><?= $products[4]['name_product'] ?></p>
                        </div>
                    </li>
                    <li class="slider item">
                        <div>
                            <a href="/layoutProduct?id=<?= $products[6]['id'] ?>" target="_blank"><img src="<?= $products[6]['product_image'] ?>" alt="<?= $products[6]['name_product'] ?>"></a>
                        </div>
                        <div>
                            <p><?= $products[6]['name_product'] ?></p>
                        </div>
                    </li>
                    <li class="slider item">
                        <div>
                            <a href="/layoutProduct?id=<?= $products[9]['id'] ?>" target="_blank"><img src="<?= $products[9]['product_image'] ?>" alt="<?= $products[9]['name_product'] ?>"></a>
                        </div>
                        <div>
                            <p><?= $products[9]['name_product'] ?></p>
                        </div>
                    </li>
                    <li class="slider item">
                        <div>
                            <a href="/layoutProduct?id=<?= $products[8]['id'] ?>" target="_blank"><img src="<?= $products[8]['product_image'] ?>" alt="<?= $products[8]['name_product'] ?>"></a>
                        </div>
                        <div>
                            <p><?= $products[8]['name_product'] ?></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--- Les savons -->
        <div class="second">
            <div>
                <hr>
                <h3>Nos Savons faits maison !</h3>
            </div>
            <div class="first-container">
                <div>
                    <a href="/layoutProduct?id=<?= $products[0]['id'] ?>" target="_blank">
                        <img class="hoverOut" src="<?= $products[0]['product_image'] ?>" alt="<?= $products[0]['name_product'] ?>">
                        <img class="hoverOn" src="<?= $products[0]['product_image_hover'] ?>" alt="<?= $products[0]['name_product'] ?>">
                    </a>
                </div>
                <div class="content reveal">
                    <div><h4><?= $products[0]['name_product'] ?></h4></div>
                    <div>
                        <p><?= nl2br($products[0]['description_product']) ?></p>
                    </div>
                    <div>
                        <a href="/layoutProduct?id=<?= $products[0]['id'] ?>" target="_blank"><button>Commander <?= $products[0]['name_product'] ?></button></a>
                    </div>
                </div>
            </div>
            <div class="second-container">
                <div>
                    <div >
                        <a href="/layoutProduct?id=<?= $products[1]['id'] ?>" target="_blank">
                            <img class="hoverOut" src="<?= $products[1]['product_image'] ?>" alt="<?= $products[1]['name_product'] ?>">
                            <img class="hoverOn" src="<?= $products[1]['product_image_hover'] ?>" alt="<?= $products[1]['name_product'] ?>">
                        </a>
                    </div>
                    <div class="content">
                        <div><h4><?= $products[1]['name_product'] ?></h4></div>
                        <p><?= nl2br($products[1]['description_product']) ?></p>
                        <a href="/layoutProduct?id=<?= $products[1]['id'] ?>" target="_blank"><button>Commander <?= $products[1]['name_product'] ?></button></a>
                    </div>
                </div>

                <div>
                    <div class="reveal">
                        <a href="/layoutProduct?id=<?= $products[2]['id'] ?>" target="_blank">
                            <img class="hoverOut" src="<?= $products[2]['product_image'] ?>" alt="<?= $products[2]['name_product'] ?>">
                            <img class="hoverOn" src="<?= $products[2]['product_image_hover'] ?>" alt="<?= $products[2]['name_product'] ?>">
                        </a>
                    </div>
                    <div class="content">
                        <div><h4><?= $products[2]['name_product'] ?></h4></div>
                        <p><?= nl2br($products[2]['description_product']) ?></p>
                        <a href="/layoutProduct?id=<?= $products[2]['id'] ?>" target="_blank"><button>Commander <?= $products[2]['name_product'] ?></button></a>
                    </div>
            </div>

                </div>
            </div>
                    <!--- Les cuirs -->
            <div class="second">
                <div>
                    <hr>
                    <h3>Notre Maroquinerie Locale</h3>
                </div>
                <div class="first-container">
                    <div>
                        <a href="/layoutProduct?id=<?= $products[3]['id'] ?>" target="_blank">
                            <img class="hoverOut" src="<?= $products[3]['product_image'] ?>" alt="<?= $products[3]['name_product'] ?>">
                            <img class="hoverOn" src="<?= $products[3]['product_image_hover'] ?>" alt="<?= $products[3]['name_product'] ?>">
                        </a>
                    </div>
                    <div class="content reveal">
                        <div><h4><?= $products[3]['name_product'] ?></h4></div>
                        <div>
                            <p><?= nl2br($products[3]['description_product']) ?></p>
                        </div>
                        <div>
                            <a href="/layoutProduct?id=<?= $products[3]['id'] ?>" target="_blank"><button>Commander <?= $products[3]['name_product'] ?></button></a>
                        </div>
                    </div>
                </div>
                <div class="second-container">
                    <div>
                        <div >
                            <a href="/layoutProduct?id=<?= $products[4]['id'] ?>" target="_blank">
                                <img class="hoverOut" src="<?= $products[4]['product_image'] ?>" alt="<?= $products[4]['name_product'] ?>">
                                <img class="hoverOn" src="<?= $products[4]['product_image_hover'] ?>" alt="<?= $products[4]['name_product'] ?>">
                            </a>
                        </div>
                        <div class="content">
                            <div><h4><?= $products[4]['name_product'] ?></h4></div>
                            <p><?= nl2br($products[4]['description_product']) ?></p>
                            <a href="/layoutProduct?id=<?= $products[4]['id'] ?>" target="_blank"><button>Commander <?= $products[4]['name_product'] ?></button></a>
                        </div>
                    </div>
                    <div>
                        <div class="reveal">
                            <a href="/layoutProduct?id=<?= $products[5]['id'] ?>"target="_blank">
                                <img class="hoverOut" src="<?= $products[5]['product_image'] ?>" alt="<?= $products[5]['name_product'] ?>">
                                <img class="hoverOn" src="<?= $products[5]['product_image_hover'] ?>"  alt="<?= $products[5]['name_product'] ?>">
                            </a>
                        </div>
                        <div class="content">
                            <div><h4><?= $products[5]['name_product'] ?></h4></div>
                            <p><?= nl2br($products[5]['description_product']) ?></p>
                            <a href="/layoutProduct?id=<?= $products[5]['id'] ?>" target="_blank"><button>Commander <?= $products[5]['name_product'] ?></button></a>
                        </div>
                    </div>
            </div>
        </div>
        <!-- Produits de luxe -->

        <div class="second">
            <div>
                <hr>
                <h3>Nos produits de luxe et artisanaux</h3>
            </div>
            <div class="first-container">
                <div>
                    <a href="/layoutProduct?id=<?= $products[6]['id'] ?>" target="_blank">
                        <img class="hoverOut" src="<?= $products[6]['product_image'] ?>" alt="<?= $products[6]['name_product'] ?>">
                        <img class="hoverOn" src="<?= $products[6]['product_image_hover'] ?>" alt="<?= $products[6]['name_product'] ?>">
                    </a>
                </div>
                <div class="content reveal">
                    <div><h4><?= $products[6]['name_product'] ?></h4></div>
                    <div>
                        <p><?= nl2br($products[6]['description_product']) ?></p>
                    </div>
                    <div>
                        <a href="/layoutProduct?id=<?= $products[6]['id'] ?>" target="_blank"><button>Commander <?= $products[6]['name_product'] ?></button></a>
                    </div>
                </div>
            </div>

            <div class="second-container">
                <div>
                    <div >
                        <a href="/layoutProduct?id=<?= $products[7]['id'] ?>" target="_blank">
                            <img class="hoverOut" src="<?= $products[7]['product_image'] ?>" alt="<?= $products[7]['name_product'] ?>">
                            <img class="hoverOn" src="<?= $products[7]['product_image_hover'] ?>" alt="<?= $products[7]['name_product'] ?>">
                        </a>
                    </div>
                    <div class="content">
                        <div><h4><?= $products[7]['name_product'] ?></h4></div>
                        <p><?= nl2br($products[7]['description_product']) ?></p>
                        <a href="/layoutProduct?id=<?= $products[7]['id'] ?>" target="_blank"><button>Commander <?= $products[7]['name_product'] ?></button></a>
                    </div>
                </div>

                <div>
                    <div class="reveal ">
                        <a href="/layoutProduct?id=<?= $products[8]['id'] ?>" target="_blank">
                            <img class="hoverOut" src="<?= $products[8]['product_image'] ?>" alt="<?= $products[8]['name_product'] ?>">
                            <img class="hoverOn" src="<?= $products[8]['product_image_hover'] ?>" alt="<?= $products[8]['name_product'] ?>">
                        </a>
                    </div>
                    <div class="content">
                        <div><h4><?= $products[8]['name_product'] ?></h4></div>
                        <p><?= nl2br($products[8]['description_product']) ?></p>
                        <a href="/layoutProduct?id=<?= $products[8]['id'] ?>" target="_blank"><button>Commander <?= $products[8]['name_product'] ?></button></a>
                    </div>
                </div>
            </div>
    </main>

