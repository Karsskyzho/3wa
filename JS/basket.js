export class Basket {

    constructor() {
        let showBasket = document.getElementById('show-basket');
        let buttonBasket = document.querySelector('.addBasket');

        this.elements = {
            id: document.getElementById('id'),
            picture: document.getElementById('product-image'),
            name: document.getElementById('product-name'),
            price: document.getElementById('product-price'),
            size: document.getElementById('size'),
            quantity: document.getElementById('quantity')
        };

        let basket = localStorage.getItem("basket");
        if (basket == null) {
            this.basket = []
        } else {
            this.basket = JSON.parse(basket)
        }

        //events-----------------------------------
        if (buttonBasket) {
            buttonBasket.addEventListener("click", () => {
                console.log('coucou');
                this.add({
                    id: this.elements.id.value,
                    picture: this.elements.picture.value,
                    name: this.elements.name.value,
                    price: this.elements.price.value,
                    size: this.elements.size?.value,
                    quantity: Number(this.elements.quantity.value)
                });
            });
        }

        if (showBasket) {
            if (basket) {
                let results = this.getBasket();

                for (let i = 0; i < results.length; i++) {
                    console.log(results);

                    //div "carte" qui contiendra les trois div
                    let divBasket = document.createElement('div')
                    divBasket.className = 'elements-basket';
                    divBasket.setAttribute('id' , i)
                    //premiere div de la carte
                    let divPicture = document.createElement('div');
                    divPicture.className = 'divPicture';
                    let picture = document.createElement('img');
                    picture.src = results[i].picture;
                    divPicture.appendChild(picture);
                    divBasket.appendChild(divPicture);

                    //deuxieme div de la carte
                    let divInformations = document.createElement('div');
                    divInformations.className = 'divInformations';
                    let nameProduct = document.createElement('p');
                    nameProduct.innerHTML = results[i].name

                    let divQuantity = document.createElement('div')
                    divQuantity.className = 'divQuantity';
                    let label = document.createElement('label');
                    label.setAttribute("for", 'input-quantity');
                    label.innerHTML = "Quantité : ";
                    let inputQuantity = document.createElement('input');
                    inputQuantity.setAttribute("id", "input-quantity")
                    inputQuantity.type = "number"
                    inputQuantity.value = results[i].quantity;
                    inputQuantity.min = 0;

                    if (results[i].size !== undefined) { //si le produit contient une taille
                        let sizeProduct = document.createElement('p');
                        sizeProduct.innerHTML = 'Taille : ' + results[i].size;
                        divInformations.appendChild(nameProduct);
                        divInformations.appendChild(sizeProduct);
                        divInformations.appendChild(divQuantity);
                        divQuantity.appendChild(label);
                        divQuantity.appendChild(inputQuantity);

                    } else {
                        divInformations.appendChild(nameProduct);
                        divInformations.appendChild(divQuantity);
                        divQuantity.appendChild(label);
                        divQuantity.appendChild(inputQuantity);
                    }
                    //troisième carte
                    let divPrice = document.createElement('div');
                    divPrice.className = 'divPrice';
                    let price = document.createElement('p');
                    let totalPrice = (results[i].price * results[i].quantity);
                    price.innerHTML = totalPrice + '€';
                    let btnRemove = document.createElement('button');
                    btnRemove.className = 'btnRemove';
                    btnRemove.setAttribute('id', i)
                    btnRemove.innerHTML = "<img src='https://www.svgrepo.com/show/80902/trash.svg'>";
                    divPrice.appendChild(btnRemove);
                    divPrice.appendChild(price);

                    //on insère la divBasket dans la div show-basket déjà présente dans le html.
                    showBasket.appendChild(divBasket);

                    //on insère les trois div dans la div divBasket
                    divBasket.appendChild(divPicture);
                    divBasket.appendChild(divInformations);
                    divBasket.appendChild(divPrice);
                }
            } else {
                let paragraphe = document.createElement('p');
                paragraphe.innerHTML = ' 😰 Votre panier est vide ! '
                showBasket.appendChild(paragraphe);
            }
        }

        let btnRemove = document.querySelectorAll('.btnRemove');
        if (btnRemove) {
            let results = this.getBasket();
            btnRemove.forEach(btn => {
                btn.addEventListener('click', () => {
                    console.log(btn);
                    this.remove(
                        results[btn.id]
                    );
                    let divToRemove = document.getElementById(btn.id)
                    divToRemove.remove();
                });
            })
        }
        let inputQuantity = document.querySelector('#input-quantity')
        inputQuantity.addEventListener('change' , () =>
        {

        });
    }
    getBasket() {
        let basket = localStorage.getItem("basket")
        if (basket == null) {
            return []
        } else {
            return JSON.parse(basket)
        }
    }

    save() {
        localStorage.setItem("basket", JSON.stringify(this.basket));
    }

    add(product) {
        let foundProduct = this.basket.find(p => (p.id === product.id) && (p.size === product.size))

        if (foundProduct !== undefined) {
            foundProduct.quantity += Number(this.elements.quantity.value);
        } else {
            this.basket.push(product);
        }
        this.save();
    }

    remove(product) {
        let btnRemove = document.querySelectorAll('.btnRemove');
        this.basket = this.basket.filter(p => p.id + p.size !== product.id + product.size);
        this.save();
    }

    changeQuantity(product, quantity) {
        let foundProduct = this.basket.find(p => p.id + p.size !== product.id + product.size)
        if (foundProduct !== undefined) {
            foundProduct.quantity += quantity;
            if (foundProduct.quantity <= 0) {
                this.remove(foundProduct);
            } else {
                this.save()
            }
        }
    }

    getNumberProduct() {
        let number = 0;
        for (let product of this.basket) {
            number += product.quantity;
        }
        return number
    }
}