const formLogin = document.getElementById("login");
console.log(formLogin)


formLogin.addEventListener("submit", validateLogin);
console.log(formLogin);

function validateLogin(e) {
	e.preventDefault();
	const email = e.target.email.value;
	const password = e.target.password.value;
	isValid = (/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(password)) && (password.length >= 6 && password.length <= 10);
	console.log(isValid, password.length);

	if (isValid) { window.location.href = "./cart/cart.html" } else { return alert("Formato inválido de senha.") }
};

const formRegister = document.getElementById("register");
console.log(formRegister)


formRegister.addEventListener("submit", validateRegister);
console.log(formRegister);

function validateRegister(e) {
	e.preventDefault();
	const nome = e.target.name.value;
	const sobrenome = e.target.sobrenome.value;
	const email = e.target.email.value;
	const password = e.target.password.value;
	isValid = (/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(password)) && (password.length >= 6 && password.length <= 10);
	nomeLengthIsValid = nome.length >= 2 && sobrenome.length >= 2; 
	console.log(isValid, nomeLengthIsValid, password.length);

	if (isValid && nomeLengthIsValid) { window.location.href = "./cart/cart.html" } else { return alert("Formato inválido de nome, ou de senha.") }
};



/*

	else if (formLogin.destino.selectedIndex==0) {
		alert("Destino not selected.");
		correct = false;
*/

function myMenuFunction() {
	var i = document.getElementById("navMenu");

	if(i.className === "nav-menu") {
	    i.className += " responsive";
	} else {
	    i.className = "nav-menu";
	}
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}
