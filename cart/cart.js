var maxItems = 0, totalPrice = 0;

function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (maxItems > 14) {
        return alert("Máximo de items no carrinho atingido");
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - R$ ${price.toFixed(2)}`;

    cartItems.appendChild(listItem);

    const currentTotal = parseFloat(cartTotal.textContent.replace('R$', '').trim());
    const newTotal = currentTotal + price;
    totalPrice = newTotal.toFixed(2);
    cartTotal.textContent = `R$ ${newTotal.toFixed(2)}`;
    maxItems++;
}

document.getElementById('payment').addEventListener('click', pay);

function pay() {
    if (totalPrice > 0) {
        window.location.href = "../checkout/checkout.html";
    } else {
        alert("Para realizar o pagamento é necessário adicionar algo ao carrinho!");
    }
}
