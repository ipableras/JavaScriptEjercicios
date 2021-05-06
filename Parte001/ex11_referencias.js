// Ejercicio 11: Resolver problemas de referencia de variables.

// Error típico:
// ReferenceError: {{identificador}} is not defined

function mostrarSaludo(){
    var mensaje = 'Hola.. Este código se ejecuta en una función';

    console.log(mensaje);
}

/*
 E problema que vemos, es que el var mensaje esta solo dentro del function
 */
 // console.log(mensaje); // ReferenceError: {{identificador}} is not defined

// Podemos usar la funcion mostrarSaludo
console.log(mostrarSaludo);
console.log(mostrarSaludo());
mostrarSaludo();


var numero = 7;

function mostrarNumero(){
    console.log('Es búmero es: ' + numero);
}

mostrarNumero();