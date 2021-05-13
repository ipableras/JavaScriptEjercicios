// Ejercicio 43: Usar el Método forEach para Recorrer un Arreglo

let lenguajes = ["JavaScript", "C#", "PHP", "Java", "Python"];

lenguajes.forEach(function(valor, indice, lenguajes){
    console.log("Hola");
});

console.log();

lenguajes.forEach(function(valor, indices, lenguajes){
    console.log(valor);
});

console.log();

lenguajes.forEach(function(valor, indice, lenguajes){
    console.log(`${valor} se encuentra en el índice ${indice}`);
});

console.log();

function recorridoArreglo(valor){
    console.log(valor);
};

lenguajes.forEach(recorridoArreglo);

console.log();

function recorridoArreglo(valor, indice){
    console.log(`${valor} se encuentra en el índice ${indice}`);
};

lenguajes.forEach(recorridoArreglo);


console.log();

// Ahora haciendolo con un Landas
lenguajes.forEach((valor, indice, lenguajes) => {
    console.log(`${valor} se encuentra en el índice ${indice}`);
});

console.log();

let recorrerArreglo = (valor, indice, lenguajes) => {
    console.log(`${valor} se encuentra en el índice ${indice}`);
};

lenguajes.forEach(recorrerArreglo);


