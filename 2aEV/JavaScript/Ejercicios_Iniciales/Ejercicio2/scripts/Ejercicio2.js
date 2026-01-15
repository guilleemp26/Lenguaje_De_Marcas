function leerNumeroEntero() 
{
    let numero = parseInt(prompt("Introduce un número entero:"));
    if (isNaN(numero)) 
    {
        console.log("No has introducido un número entero válido.");
    }

    return numero;
}
let numero = leerNumeroEntero();
for (let i = 0; i < 10; i++)
{
  console.log(numero, "*", (i + 1), "=" , (numero * (+i + 1)));
}

