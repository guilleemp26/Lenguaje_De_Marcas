//Actividad 1
console.log("Hola mundo")

//Actividad 2
let num = 4
let cadenaTexto = "Hola que tal"
console.log(num)
console.log(cadenaTexto)

//Actividad 3
let num1 = 10
let num2 = 2
console.log("10 + 2 = " + (num1 + num2))
console.log("10 - 2 = " + (num1 - num2))
console.log("10 * 2 = " + (num1 * num2))
console.log("10 / 2 = " + (num1 / num2))
console.log("10 % 2 = " + (num1 % num2))

//Actividad 4
let valorLeido = prompt("Introduzca un número: ", 0)
if (valorLeido >= 10)
{
    console.log("El número introducido es mayor que 10")
}
else
{
    console.log("El número introducido es menor que 10")
}

//Actividad 5
let edadLeida = prompt("Introduce tu edad: ", 0)
if (edadLeida >= 21)
{
    console.log("Eres mayor de edad y puedes conducir")
}
else if (edadLeida >= 18)
{
    console.log("Eres mayor de edad pero no puedes conducir")
}
else
{
    console.log("Eres menor de edad")
}

//Actividad 6

let numleido1 = Number(prompt("Introduce el primer número", 0))
let numleido2 = Number(prompt("Introduce el segundo número", 0))
function sumar()
{
    return numleido1 + numleido2
}
console.log(numleido1 + " + " + numleido2 + " = " + sumar())

//Actividad 7
for(let i = 1; i <= 10; i++)
{
    console.log(i)
}

//Actividad 8
let nombresAmigos = ["Gerardo", "Jackson", "Sarai", "Raúl"]
for(i = 0; i < nombresAmigos.length; i++)
{
    console.log(nombresAmigos[i])
}

//Actividad 9
let persona = 
{
    nombre: "Gerardo",
    edad: 19,
    ciudad: "Asturias"
};

console.log("Nombre: " + persona.nombre)
console.log("Edad: " + persona.edad)
console.log("Ciudad: " + persona.ciudad)

//Actividad 10
let nombreSaludar = prompt("Introduce tu nombre: ", "")

function saludar(nombre)
{
    console.log("Hola " + nombre + "!!!!")
}

if (nombreSaludar !== "")
{
    saludar(nombreSaludar)
}
else
{
    saludar("Nombre desconocido")
}