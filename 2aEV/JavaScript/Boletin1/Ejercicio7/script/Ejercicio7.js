let texto = document.getElementById("texto");
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");

boton1.addEventListener("click", mostrarTexto)
boton2.addEventListener("click", ocultarTexto);

function ocultarTexto()
{
    texto.style.display = "none";
}
function mostrarTexto()
{
    texto.style.display = "block";
}