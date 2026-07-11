// PANIER

let cart = 0;

const buttons = document.querySelectorAll(".product button");
const cartIcon = document.querySelector(".fa-cart-shopping");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartIcon.innerHTML = "🛒 " + cart;

        alert("Produit ajouté au panier");

    });

});


// NEWSLETTER

const newsletterBtn = document.querySelector(".newsletter button");
const emailInput = document.querySelector(".newsletter input");

newsletterBtn.addEventListener("click", () => {

    if(emailInput.value === ""){

        alert("Veuillez entrer votre email");

    }
    else{

        alert("Merci pour votre inscription !");
        emailInput.value = "";

    }

});


// ANIMATION PRODUITS

const products = document.querySelectorAll(".product");

products.forEach(product => {

    product.addEventListener("mouseover", () => {

        product.style.transform = "scale(1.05)";
        product.style.transition = "0.3s";

    });


    product.addEventListener("mouseout", () => {

        product.style.transform = "scale(1)";

    });

});