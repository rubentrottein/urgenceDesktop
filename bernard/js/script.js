const main = document.querySelector("main")
const productContainer = document.querySelector(".product-container")
let cart = [];
let products = [];
let total = 0;
let credit = 211000000000;
let count;
let newCredit;

(function populateBernard(){
    document.querySelector("span").innerHTML = Number(credit);
    count = localStorage.getItem("count");
    newCredit = localStorage.getItem("newCredit");
    setInterval(()=>{
        if(newCredit<credit){
            newCredit ++
            localStorage.setItem("newCredit", newCredit)
            document.querySelector("#meritCredit").innerHTML = newCredit;
        }
    }, 0.01);
    setInterval(()=>{
        count++
        localStorage.setItem("count", count);
        document.querySelector("#chrono").innerHTML = `A la vitesse de 1€ par 0.01s, il faut <b>${count} secondes</b> pour compter entièrement la fortune de bernard. Ca représente <b>${Math.round(count/86400, 2)} jours</b> ou encore ,<b>${Math.round(count/3600)} heures</b>, ou même <b>${Math.round(count/60)} minutes</b>`;
    },1000)
})()

for(let i=0; i<=products.length;i++){
    let product = ['Le RSA', 'Revenu Minimal Insertion', 607.75, "img/resume.png", 1];
    createProduct(product[0],product[1],product[2],product[3],product[4]);
}
function createProduct(productName, description, price, image){
    let quantity=0;
    let figure = document.createElement("figure");
    figure.title = description;
    let img = document.createElement("img");
    img.src = image;
    img.alt = description;
    let name = document.createElement("h3");
    name.innerHTML = productName;
    let itemPrice = document.createElement("h4");
    itemPrice.innerHTML = price;
    let qtyLabel = document.createElement("label").innerHTML = "Quantité : ";
    let qty = document.createElement("input");
    qty.type = "number";
    qty.value = 0;
    qty.min = 0;
    qty.step = 1;
    qty.addEventListener("input", ()=>{
        console.log("%c qty.value " + qty.value, "color: orange")
        quantity = Number(qty.value);
    })
    let button = document.createElement("button");
    button.innerHTML = "Ajouter au panier";
    button.addEventListener("click", ()=>{
        price *= quantity;
        itemPrice.innerHTML = price;
        addToCart(productName, price, quantity);
    })
    let quantityBlock = document.createElement("aside")
    quantityBlock.append(qtyLabel, qty);
    figure.append(name, img, description, quantityBlock, price, button);
    productContainer.append(figure);
    
}


function addToCart(productName, productPrice, productQuantity) {
    cart.push({ name: productName, price: Number(productPrice) });
    total += productPrice;
    updateCart(productQuantity);
}

let creditLeft;
function updateCart(quantity) {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${quantity}x ${item.name} - ${item.price} €`;
        cartItems.appendChild(listItem);
    });
    cartTotal.textContent = total;
    console.log(credit.innerHTML);
    creditLeft = Number(credit.innerHTML) - Number(total);
    console.log(creditLeft);
    document.querySelector("span").innerHTML = Number(creditLeft);
}
