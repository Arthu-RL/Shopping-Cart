var maxItems = 0;

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
    cartTotal.textContent = `R$ ${newTotal.toFixed(2)}`;
    maxItems++;
}