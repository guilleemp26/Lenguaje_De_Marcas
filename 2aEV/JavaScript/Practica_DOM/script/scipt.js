//Parte1
function actividad1()
{
    tituloPrincipal = document.getElementById("tituloPrincipal");
    tituloPrincipal.innerText = "Título modificado con JavaScript";
}
function actividad2()
{
    descripcion = document.getElementById("descripcion");
    descripcion.textContent = ("Este texto fue cambiado usando textContent");
}
function actividad3()
{
    descripcion = document.getElementById("descripcion");
    descripcion.innerHTML = ("Este texto tiene una palabra en <strong>negrita</strong>");
}
//Parte2
function actividad4()
{
    cajas = document.getElementsByClassName("caja");
    cajas[0].innerText = ("Caja modificada 1");
    cajas[1].innerText = ("Caja modificada 2");
}
function actividad5()
{
    parrafos = document.getElementsByClassName("parrafo");
    for(i = 0;i < parrafos.length; i++)
    {  
        parrafos[i].innerText = ("Párrafo modificado"); 
    }
}
//Parte3
function actividad6()
{
    elementosLista = document.getElementsByTagName("li");
    for(i = 0;i < elementosLista.length;i++)
    {
        elementosLista[i].textContent += (" (modificado)");
    }
}
function actividad7()
{
    subtitulos = document.getElementsByTagName("h2");
    for(i = 0;i < subtitulos.length;i++)
    {
        subtitulos[i].textContent = ("Subtítulo cambiado");
    }
}
//Parte 4
function actividad8Parte1()
{
    tituloPrincipalActividad8 = document.getElementById("tituloPrincipal");

}
function actividad8Parte2()
{
    tituloPrincipalActividad8 = document.getElementById("tituloPrincipal");

}
//Observo que no me deja ponerlo con ninguna de las dos maneras