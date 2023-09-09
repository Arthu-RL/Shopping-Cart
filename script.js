/* correct = true;
let path = "";

const form = document.querySelectorAll("form");
const destino = document.getElementById("destino").addEventListener("change", (e) => {
	destinyPage = e.target.value;
});

form[0].addEventListener("submit",
	(e) => { 
		e.preventDefault();
		console.log(e.target);
		const username = e.target.username.value;
		const password = e.target.password.value;
		const destino = e.target.destino;
		console.log(username);
		console.log(password);
		console.log(destino);
		
		if (username != "") {
			isValid = /{4, 20}/.test(username);
			if (isValid) { correct = true } 
			else { 
				correct = false;
				alert("Incorrect username format.");
			}
		} else { 
			correct = false;
			alert("Username is empty.");
		}

		if (password != "") {
			isValid = /[a-zA-Z0-9]{6, 10}/.test(password);
			if (isValid) {
				correct == true;
			} else {
				alert("Incorrect password format.");
				correct = false;
			}
		} else { 
			alert("Incorrect password format.");
			correct = false;
		}

		if (correct) {
			if (destinyPage != "Carrinho de Compras") {
				window.location.href = "./support/support.html"
			} else { window.location.href = "./cart/cart.html" }
		}

	});

console.log(form);

function valida(form) {
	
}; */


/*

	else if (form.destino.selectedIndex==0) {
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