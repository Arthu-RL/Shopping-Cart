var paymentMethodButtons = document.querySelectorAll('.paymentMethod');
var cardBrandButtons = document.querySelectorAll('.cardBrand');
var cardsPaymentDisplay = false, brandDisplay = false, billOrPixPayment = false, addTax = false, validCep = false;

document.getElementById("tax").addEventListener("click", () => {

    const cepInput = document.getElementById("cep");
    const cepValue = cepInput.value.trim(); 
    
    const cepPatternIsValid = /^\d{8}$/.test(cepValue);
    
    if (cepPatternIsValid) {
        alert("CEP: " + cepValue + "Válido");
        validCep = true;
    } else {
        alert("CEP inválido. Por favor coloque um CEP com 8 dígitos e sem '-'.");
    }
});


paymentMethodButtons.forEach( (button) => { button.addEventListener('click', changePaymentMethodImage) } );

function changePaymentMethodImage(e) {
	let paymentMethod = e.target.textContent;
	let img = document.getElementById('paymentMethodImage');

	switch (paymentMethod) {
		case "PIX":
			img.src = "../img/payment-methods/pix.png";
			img.style.display = 'block';
			document.getElementById('cardBrands').style.display = 'none';
			document.getElementById('cardBrandImage').style.display = 'none';
			document.getElementById('checkoutForm').style.display = 'none';
			document.getElementById('billCheckoutBtn').style.display = 'block';
			cardsPaymentDisplay = false;
			billOrPixPayment = true;
			break;
		case "Boleto":
			img.src = "../img/payment-methods/bill.png";
			img.style.display = 'block';
			document.getElementById('cardBrands').style.display = 'none';
			document.getElementById('cardBrandImage').style.display = 'none';
			document.getElementById('checkoutForm').style.display = 'none';
			document.getElementById('billCheckoutBtn').style.display = 'block';
			brandDisplay = false;
			cardsPaymentDisplay = false;
			billOrPixPayment = true;
			break;
		case "Débito":
			img.src = "../img/payment-methods/debit.png";
			img.style.display = 'block';
			document.getElementById('cardBrands').style.display = 'block';
			document.getElementById('billCheckoutBtn').style.display = 'none';
			document.getElementById('checkoutForm').style.display = 'block';
			brandDisplay = false;
			cardsPaymentDisplay = true;
			billOrPixPayment = false;
			break;
		case "Cartão de crédito":
			img.src = "../img/payment-methods/credit.png";
			img.style.display = 'block';
			document.getElementById('cardBrands').style.display = 'block';
			document.getElementById('billCheckoutBtn').style.display = 'none';
			document.getElementById('checkoutForm').style.display = 'block';
			cardsPaymentDisplay = true;
			billOrPixPayment = false;
			break;
		default:
			img.style.display = 'none';
			document.getElementById('cardBrands').style.display = 'none';
			document.getElementById('cardBrandImage').style.display = 'none';
			cardsPaymentDisplay = false;
			billOrPixPayment = false;
			break;   
	}
}


cardBrandButtons.forEach( (button) => { button.addEventListener('click', changeCardBrandImage) } );

function changeCardBrandImage(e) {
	let cardBrand = e.target.textContent;
	let img = document.getElementById('cardBrandImage');

	switch (cardBrand) {
		case "Visa":
			img.src = "../img/payment-methods/visa.png";
			img.style.display = 'block';
			brandDisplay = true;
			break;
		case "Mastercard":
			img.src = "../img/payment-methods/mastercard.png";
			img.style.display = 'block';
			brandDisplay = true;
			break;
		case "American Express":
			img.src = "../img/payment-methods/americanexpress.png";
			img.style.display = 'block';
			brandDisplay = true;
			break;
		default:
			img.style.display = 'none';
			brandDisplay = false;
			break;   
	}
}


let checkoutForm = document.getElementById('checkoutForm');
	checkoutForm.addEventListener('submit', (e) => {
	e.preventDefault();

	nameIsValid = /(?=.*[A-Z])(?=.*[a-z])/.test(e.target.name.value);
	cardNumberIsValid = /^\d{16}$/.test(e.target.number.value);
	cardCodeIsValid = /^\d{3}$/.test(e.target.code.value);
	
	if (nameIsValid && cardNumberIsValid && cardCodeIsValid && brandDisplay && cardsPaymentDisplay && validCep) {
		alert("Pagamento Confirmado!");
	} else {
		alert("Credencias incorretas! Precisa selecionar a forma de pagamento, e se preciso, a marca do cartão.");
	}
});


let payButton = document.getElementById('billCheckoutBtn');
payButton.addEventListener('click', () => { alert("Pagamento Confirmado!") });