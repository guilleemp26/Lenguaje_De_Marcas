let imagen = document.getElementById("imagen")
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");

boton1.addEventListener("click", cambiarFuente1) 
{
    console.log("Boton 1 pulsado")
};
boton2.addEventListener("click", cambiarFuente2)
{
    console.log("Boton 2 pulsado")
};

function cambiarFuente1()
{
    imagen.src = "img/2.jpg";
}
function cambiarFuente2()
{
    imagen.src = "img/1.jpg"
}