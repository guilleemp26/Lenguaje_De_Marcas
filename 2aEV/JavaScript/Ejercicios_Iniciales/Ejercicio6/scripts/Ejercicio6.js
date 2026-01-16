let frase =  prompt("Introduce una palabra o frase: ")
frase = frase.toLowerCase();//Lo paso a minúsculas
frase = frase.replaceAll(" ", "");//Le quito los TODOS los espacios que entcuentre
let fraseSinReverse = frase;//Almaceno la frase sin reversificar pero en minúsculas y sin espacios

frase = frase.split("").reverse().join("");//Le doy la vuelta a la palabra (Split separa cada letra en un obeto de una lista, Reverse le da la vuelta a la lista y Join une la lista en un String)
console.log("Antes de reversificar: " + fraseSinReverse);
console.log("Después de reversificar: " + frase);

if(frase === fraseSinReverse)
{
    console.log("La frase o palabra que ha introducido es palíndroma");
}
else
{
    console.log("La frase o palabra que ha introducido no es palíndroma")
}
