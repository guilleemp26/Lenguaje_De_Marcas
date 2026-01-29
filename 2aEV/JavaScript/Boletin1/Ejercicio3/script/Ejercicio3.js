const lista = document.getElementById("lista");

let li1 = document.createElement("li");
li1.textContent = "elemento1"
let li2 = document.createElement("li");
li2.textContent = "elemento2"
let li3 = document.createElement("li");
li3.textContent = "elemento3"

lista.appendChild(li1);
lista.appendChild(li2);
lista.appendChild(li3);