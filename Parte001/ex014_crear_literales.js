// Ejercicio 14: Crear y usar literales de diferentes tipos de dato.
// La mejor forma de verlo es en la web, porque no vamos a ver todo tan comodo

// No hace falta poner el new String
let nombre = new String("Manolo");
nombre;
console.log(nombre);
nombre = "Manolo";
console.log(nombre);

// Se puede hacer de las 3 formas distintas
nombre = 'Manolo2';
console.log(nombre);
nombre = `Manolo3`;
console.log(nombre);

//--------------
let puntaje = 1000;
puntaje;
console.log(puntaje);

//--------------
true;
console.log(true);
false;
console.log(false);

let jugando = new Boolean(true);
jugando;
console.log(jugando);

jugando = true;
console.log(jugando);


//-------------------
let cociente = 2/3;
cociente;
console.log(cociente);

nombre = "Pepe " + "Yo";
console.log(nombre);

0b1000;
console.log(0b1000);

0xFF;
console.log(0xFF);

//------------------
let numero = [2, 3, 5, 7];
numero;
console.log(numero);

let computador = {"marca": "NSi", ram: 32, procesador: "Intel"};
computador;
console.log(computador);


//---------------------
null;
console.log(null);

undefined;
console.log(undefined);

//function () {};

function sumar(a, b){
    return a + b;
}

console.log(sumar(2, 3));

