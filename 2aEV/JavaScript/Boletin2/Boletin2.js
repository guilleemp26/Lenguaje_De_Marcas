//Boletin 2 JavaScript

//Ejercicio 1:
let enlaceGoogle = document.getElementById("enlace_google");
let botonCambioEnlace = document.getElementById("cambiar_enlace")

botonCambioEnlace.addEventListener("click", cambiar_enlace) 

function cambiar_enlace()
{
    enlaceGoogle.href = "https://duckduckgo.com/";
}

//Ejercicio 2:
let contadorCuentaRegresiva = document.getElementById("cuenta_regresiva");
let botonCuentaRegresiva = document.getElementById("boton_cuenta_regresiva");

botonCuentaRegresiva.addEventListener("click", cuentaRegresiva);

function cuentaRegresiva()
{
    const intervalo = setInterval(() => {
    contadorCuentaRegresiva.textContent--;

    if(contadorCuentaRegresiva.textContent <= 0)
    {
        clearInterval(intervalo);
        console.log("Intervalo detenido")
    }
    }, 1000);
}

//Ejercicio 3:
let textoParaCambiar = document.getElementById("saludo_despedida");
let botonSaludo = document.getElementById("boton_saludo");
let cambioBotonSaludo = "Adiós";
let aux = "Adiós";

botonSaludo.addEventListener("click", cambiarTextoBotonSaludo);

function cambiarTextoBotonSaludo()
{
    aux = textoParaCambiar.textContent;
    textoParaCambiar.textContent = cambioBotonSaludo;
    cambioBotonSaludo = aux;
}

//Ejercicio 4:
const textoCambioTamanyo = document.getElementById("texto_cambio_tamanyo");
const botonAumentarTamanyo = document.getElementById("aumentar_tamanyo_fuente");
const botonDisminuirTamanyo = document.getElementById("disminuir_tamanyo_fuente");

let estiloTexto = window.getComputedStyle(textoCambioTamanyo);
let tamanyoFuente = estiloTexto.fontSize;

botonAumentarTamanyo.addEventListener("click", aumentar_tamanyo_fuente);
botonDisminuirTamanyo.addEventListener("click", disminuir_tamanyo_fuente);

function aumentar_tamanyo_fuente()
{
    tamanyoFuente = parseInt(tamanyoFuente) + 2;
    textoCambioTamanyo.style.fontSize = tamanyoFuente + "px";
}
function disminuir_tamanyo_fuente()
{
    tamanyoFuente = parseInt(tamanyoFuente) - 2;
    textoCambioTamanyo.style.fontSize = tamanyoFuente + "px";
}

//Ejercicio 5:
let listaDinamica = document.getElementById("lista_dinamica");
let botonAnyadirElemento = document.getElementById("anyadir_elemento");
let contador = 0;

botonAnyadirElemento.addEventListener("click", anyadirElementoLista);

function anyadirElementoLista()
{
    contador++;
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = contador;
    listaDinamica.appendChild(nuevoElemento);
}

//Ejercicio 6
const contenedorHora = document.getElementById("hora");
const contenedorFecha = document.getElementById("fecha");
const ahora = new Date();
const hora = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();
const dia = ahora.getDate();
const mes = ahora.getMonth();
const anyo = ahora.getFullYear();

contenedorHora.textContent = "Hora: " + hora + "h: " + minutos + "min: " + segundos + "seg"; 
contenedorFecha.textContent = "Fecha: " + dia + " del " + mes + " del " + anyo;

//Ejercicio 7
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

let fondoDefault1 = div1.style.backgroundColor;
let fondoDefault2 = div2.style.backgroundColor;
let fondoDefault3 = div3.style.backgroundColor;

div1.addEventListener("mouseover", cambiarFondo1);
div1.addEventListener("mouseout", cambiarFondoDefault1);

function cambiarFondo1()
{
    div1.style.backgroundColor = "yellow";
}
function cambiarFondoDefault1()
{
    div1.style.backgroundColor = fondoDefault1;
}

div2.addEventListener("mouseover", cambiarFondo2);
div2.addEventListener("mouseout", cambiarFondoDefault2);

function cambiarFondo2()
{
    div2.style.backgroundColor = "yellow";
}
function cambiarFondoDefault2()
{
    div2.style.backgroundColor = fondoDefault1;
}

div3.addEventListener("mouseover", cambiarFondo3);
div3.addEventListener("mouseout", cambiarFondoDefault3);

function cambiarFondo3()
{
    div3.style.backgroundColor = "yellow";
}
function cambiarFondoDefault3()
{
    div3.style.backgroundColor = fondoDefault1;
}

//Ejercicio 8
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const divAumentar = document.getElementById("aumentar");
const cerrarImagen = document.getElementById("cerrar_img");
let imgAumentada = document.createElement("img");


img1.addEventListener("click", aumentarTamanyo1);
img2.addEventListener("click", aumentarTamanyo2);
img3.addEventListener("click", aumentarTamanyo3);
cerrarImagen.addEventListener("click", cerrarImagenAumentada);


function aumentarTamanyo1(img)
{
    imgAumentada.src = img1.src;
    imgAumentada.width = 400;
    divAumentar.appendChild(imgAumentada);
}
function aumentarTamanyo2(img)
{
    imgAumentada.src = img2.src;
    imgAumentada.width = 400;
    imgAumentada.height = 400;
    divAumentar.appendChild(imgAumentada);
}
function aumentarTamanyo3(img)
{
    imgAumentada.src = img3.src;
    imgAumentada.width = 400;
    divAumentar.appendChild(imgAumentada);
}
function cerrarImagenAumentada()
{
    divAumentar.removeChild(imgAumentada);
}

