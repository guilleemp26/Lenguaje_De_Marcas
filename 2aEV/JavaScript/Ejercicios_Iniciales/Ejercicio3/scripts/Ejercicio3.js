let contadorVocales = 0;
function leerFrase()
{
  return prompt("Introduce una frase:");
}

function contarVocales(leerFrase) 
{
  for(let i = 0; i < leerFrase.length; i++)
  {
    if(leerFrase.charAt(i).toLowerCase() === 'a' || leerFrase.charAt(i).toLowerCase() === 'e' || leerFrase.charAt(i).toLowerCase() === 'i' || leerFrase.charAt(i).toLowerCase() === 'o' || leerFrase.charAt(i).toLowerCase() === 'u')
    {
      contadorVocales++;
    }
  }
  return contadorVocales;
}
console.log("El número de vocales de la frase es: " + contarVocales(leerFrase()));