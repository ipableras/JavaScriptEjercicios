// Ejercicio 49: Ejemplo Básico de una Expresión Regular

let cadena = "¡JavaScript es génial!";

let regex = /Script/;

console.log(typeof regex);
console.log(regex instanceof RegExp);

console.log(regex.test(cadena));

console.log();

regex = /(\b\w+\b)+/g;

if(cadena.match(regex)){
    let cantidadPalabras = cadena.match(regex).length;

    console.log(`La variable cadena contiene ${cantidadPalabras} palabras`);
}else{
    console.log("No hay palabras en la cadena probada.");
}

console.log();

cadena = "¡JavaScript es genial!";

if(cadena.match(regex)){
    let cantidadPalabras = cadena.match(regex).length;

    console.log(`La variable cadena contiene ${cantidadPalabras} palabras`);
}else{
    console.log("No hay palabras en la cadena probada.");
}



