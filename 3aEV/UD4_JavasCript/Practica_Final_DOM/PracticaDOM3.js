// Funciones de los ejercicios
function ejercicio1()
{
  /* Cambiar texto del primer párrafo */ 
  const parrafo = document.getElementById("parrafo1");

  if(parrafo)
  {
    console.log("El elememto existe");
    parrafo.textContent =  "¡El texto del primer párrafo ha cambiado!";
  }
}

function ejercicio2() 
{ 
  /* Agregar fila a la tabla */ 
  const tabla = document.querySelector("#tabla tbody");
  const nuevaFila = document.createElement("tr");
  const celda1 = document.createElement("td");
  celda1.textContent = "Charlie";
  const celda2 = document.createElement("td");
  celda2.textContent = 22;
  if(tabla)
  {
    console.log("El elemento existe");
  }
  nuevaFila.appendChild(celda1);
  nuevaFila.appendChild(celda2);
  tabla.appendChild(nuevaFila);
}

function ejercicio3() 
{  
   /* Cambiar imagen */
   const imagen =  document.getElementById("imagen");
  if(imagen)
  {
    console.log("La imagen existe")
  }
  imagen.setAttribute("src", "https://es.wikipedia.org/static/images/icons/wikipedia.png");
  imagen.setAttribute("alt", "Imagen cambiada"); 
}
function ejercicio4() 
{
  /* Eliminar último elemento de la lista */
  const lista = document.querySelector("#lista");
  if(lista)
    {
      console.log("El elemento existe");
    } 
  lista.lastElementChild.remove();
}
function ejercicio5() 
{ 
  /* Duplicar segundo párrafo */
  const parrafo2 = document.getElementById("parrafo2");
  const parrafoCopiado = parrafo2.cloneNode(true);
  if(parrafo2)
    {
      console.log("El elemento existe");
    } 
  document.body.appendChild(parrafoCopiado);
}
function ejercicio6() 
{ 
  /* Sumar 1 al inputNumero */ 
  const inputNum = document.getElementById("inputNumero");
  if(inputNum)
  {
    console.log("El elemento existe");
  }
  let valorActual = parseFloat(inputNum.value);
  if(isNaN(valorActual))
  {
    valorActual = 0;
  }
  valorActual++;
  inputNum.value = valorActual;
}
function ejercicio7() 
{ 
  /* Ocultar elementos de la lista con "B" */ 
  const lista = document.querySelectorAll("#lista li");
  console.log(lista[1].textContent);
  for(let i = 0;i < lista.length; i++)
  {
    if(lista[i].textContent.includes("B"))
    {
      lista[i].style.display = "none";
    }
  }
}
function ejercicio8() 
{ 
  /* Cambiar texto de la lista a mayúsculas */ 
  const lista = document.querySelectorAll("#lista li");
  console.log(lista[1].textContent);
  for(let i = 0;i < lista.length; i++)
  {
    lista[i].textContent = lista[i].textContent.toUpperCase();
  }
}
function ejercicio9() 
{
  /* Intercambiar contenido de los dos párrafos */ 
  const parrafo1 = document.getElementById("parrafo1");
  const parrafo2 = document.getElementById("parrafo2");
  if(parrafo1 && parrafo2)
  {
    console.log("Los elementos existen");
  }
    const aux = parrafo1.textContent;
  parrafo1.textContent = parrafo2.textContent;
  parrafo2.textContent = aux.textContent;
}
function ejercicio10() 
{ 
  /* Mostrar alerta con URL del enlace */ 
  const enlace =  document.getElementById("enlace");
  if(enlace)
  {
    console.log("El elemento existe");
  }
  let valorEnlace = enlace.getAttribute("href");
  alert("La URL del enlace es: " + valorEnlace);
}

function inicializarEventos()
{
  document.querySelector('#btnEj1').addEventListener('click', ejercicio1);
  document.querySelector('#btnEj2').addEventListener('click', ejercicio2);
  document.querySelector('#btnEj3').addEventListener('click', ejercicio3);
  document.querySelector('#btnEj4').addEventListener('click', ejercicio4);
  document.querySelector('#btnEj5').addEventListener('click', ejercicio5);
  document.querySelector('#btnEj6').addEventListener('click', ejercicio6);
  document.querySelector('#btnEj7').addEventListener('click', ejercicio7);
  document.querySelector('#btnEj8').addEventListener('click', ejercicio8);
  document.querySelector('#btnEj9').addEventListener('click', ejercicio9);
  document.querySelector('#btnEj10').addEventListener('click', ejercicio10);
}

document.addEventListener('DOMContentLoaded', inicializarEventos);