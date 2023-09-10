function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - R$ ${price.toFixed(2)}`;

    cartItems.appendChild(listItem);

    const currentTotal = parseFloat(cartTotal.textContent.replace('R$', '').trim());
    const newTotal = currentTotal + price;
    cartTotal.textContent = `R$ ${newTotal.toFixed(2)}`;
}

