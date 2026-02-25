// Selección de elementos
const caja = document.getElementById("miCaja");
const imagen = document.getElementById("miImagen");
const enlace = document.getElementById("miEnlace");
const input = document.getElementById("miInput");
const boton = document.getElementById("boton1");

boton.addEventListener("click", ejercicio8);

    // Aquí debes ir resolviendo los ejercicios
    // Activa uno cada vez para probarlos


function ejercicio1()
{
    input.setAttribute("placeholder", "Nuevo texto de ayuda");
}

function ejercicio2()
{
    valorHREF = enlace.getAttribute("href");
    console.log(valorHREF);
}

function ejercicio3()
{
    imagen.setAttribute("src", "https://es.wikipedia.org/static/images/icons/wikipedia.png");
}

function ejercicio4()
{
    const data_estado = "Activo";
    caja.textContent = data_estado;
}

function ejercicio5()
{
    enlace.removeAttribute("target");
    if(enlace.hasAttribute("target"))
    {
        console.log("El atributo target todavía existe");
    }
    else
    {
        console.log("Se ha eliminado correctamente el atributo");
    }
}

function ejercicio6()
{
    input.setAttribute("disabled", "disabled")
    setTimeout((input.remove()), 3000);
    input.setAttribute("disabled", "enabled")
}

function ejercicio7()
{

}

function ejercicio8()
{
    let aux = "https://portal.edu.gva.es/ieselgrao/";
    
}