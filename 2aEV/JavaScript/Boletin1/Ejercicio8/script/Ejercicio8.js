let boton = document.getElementById("boton");
let contador = document.getElementById("contador");

boton.addEventListener("click", aumentarContador)

function aumentarContador()
{
    contador.textContent++;
}