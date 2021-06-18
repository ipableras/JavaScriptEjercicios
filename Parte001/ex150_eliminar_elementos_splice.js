// Ejercicio 150: Eliminar Varios Elementos de un Arreglo con la Función splice


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log(numeros.length);
console.log(numeros);

console.log();

let numerosEliminados = numeros.splice(3, 2);

console.log(numeros.length);
console.log("Números eliminados: ");
console.log(numeros);

console.log();

// Pongo otra más

numeros.splice(1,4)

console.log(numeros.length);
console.log("Números eliminados: ");
console.log(numeros);


