// Ejercicio 78: Usar Múltiples Expresiones a través del Operador Coma

// ,

let lenguajes = ["JS", "Pyton", "C++", "C#"],
    computador = {id: 1, ram: 32 },
    contador = lenguajes.length;

for(let i = 0, n = lenguajes.length; i < contador; ++i, --n){
    console.log(`Lenguaje programacion actual: ${lenguajes[i]}. 
    (Quedan ${n - 1} lenguajes de programacion por procesar)`);
}









