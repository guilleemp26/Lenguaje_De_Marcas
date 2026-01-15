let tamanoLista = parseInt(prompt("Introduce el tamaño de la lista: ")); 
let lista = new Array(tamanoLista);
let aux;

for (let i = 0; i < lista.length; i++)
{
    lista[i] = prompt("Introduce el elemento" + (i + 1) + "de la lista: ");
}

for (let i = 0; i < lista.length - 1; i++)
{
    for (let j = i + 1; j < lista.length; j++)
    {
        if (lista[i] > lista[j])
        {
            aux = lista[i];
            lista[i] = lista[j];
            lista[j] = aux;
        }
    }
}

for (let i = 0; i < lista.length; i++)
{
  console.log(lista[i]);
}



