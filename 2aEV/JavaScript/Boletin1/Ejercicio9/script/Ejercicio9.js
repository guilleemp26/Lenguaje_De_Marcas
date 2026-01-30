
let contenedor = document.getElementById("contenedor"); 
let botonActivar = document.getElementById("activar");
let botonDesactivar = document.getElementById("desactivar");

let activo = document.createElement("p");
activo.textContent = "activado";



botonActivar.addEventListener("click", cambiarActivo);
botonDesactivar.addEventListener("click", desactivar);

function cambiarActivo()
{
    contenedor.appendChild(activo);
}
function desactivar()
{
    contenedor.removeChild(activo);
}
