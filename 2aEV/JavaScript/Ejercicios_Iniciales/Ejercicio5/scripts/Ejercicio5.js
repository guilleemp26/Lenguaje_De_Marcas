let productos = 
[
    { id: 1, nombre: "Camisa", precio: 20.0, categoria: "Ropa" },
    { id: 2, nombre: "Pantalones", precio: 35.0, categoria: "Ropa" },
    { id: 3, nombre: "Zapatos", precio: 50.0, categoria: "Calzado" },
];
let sumador = 0;

for (let precio of productos) 
{
    sumador += precio.precio;
}
console.log("El precio total de los productos es: " + sumador);