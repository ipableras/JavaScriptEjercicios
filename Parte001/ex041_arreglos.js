// Ejercicio 41: Realizar Operaciones Básicas sobre Arreglos o Listas

// Creación: 
let lenguajes = ["JavaScript", "Pyton", "Java", "PHP"];
console.log(lenguajes.length);


// Acceso:
console.log(lenguajes[0]);
console.log(lenguajes[1]);
console.log(lenguajes[2]);
console.log(lenguajes[3]);

// Modificación:
lenguajes[0] = "JavaScript ES6";
console.log(lenguajes[0]);

// Eliminación:
// console.log(lenguajes);
// delete lenguajes[3];

// console.log(lenguajes.length);
// Aqui vemos que hay un lenguaje de 4 Arrays, pero el último no se elimina el dato
// Se queda undefined
// console.log(lenguajes[3]);
// console.log(lenguajes);

// Aqui lo que estamos haciendo es borrar el ultimo
lenguajes.pop();
console.log(lenguajes.length);
console.log(lenguajes);

console.log();

console.log(typeof lenguajes);

let numeros = new Array(5);
console.log(typeof numeros);


