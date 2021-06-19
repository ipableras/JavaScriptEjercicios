// Ejercicio 155: Eliminar Todo el Contenido de un Arreglo

let lenguajes = ["JavaScript", "C#", "PHP", "C++"];

console.log(lenguajes.length);
console.log(lenguajes);

console.log();

// Método 1:

lenguajes.length = 0;
console.log(lenguajes.length);
console.log(lenguajes);

// Método 2:
lenguajes = ["JavaScript", "C#", "PHP", "C++"];
console.log(lenguajes.length);
console.log(lenguajes);

lenguajes = [];

console.log(lenguajes.length);
console.log(lenguajes);
