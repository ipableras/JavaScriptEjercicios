// Ejercicio 122: Alternar el Contenido de Dos Variables sin Usar una Variable Auxiliar

// Solucion: 

function intercambiarNumeros(numero1, numero2){
    numero2 = numero2 - numero1;
    numero1 = numero1 + numero2;
    numero2 = numero1 - numero2;

    return [numero1, numero2]
}


let a = 100;
let b = 50;

console.log(`a = ${a} - b = ${b}`);

// a = 50, b = 100

let c = a;
a = b;
b = c;

console.log(`a = ${a} - b = ${b}`);

console.log();

a = 100;
b = 50;
console.log(`a = ${a} - b = ${b}`);

console.log(intercambiarNumeros(a, b));

// Otra formar de hacerlo mas pro
[a, b] = intercambiarNumeros(a, b);
console.log(`a = ${a} - b = ${b}`);


