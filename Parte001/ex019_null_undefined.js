// Ejercicio 19: Validar si una Variable es null o undefined

let numero = undefined;

if(numero === undefined){
    console.log("(1) La variable `numero ` es undefined");
}

if(numero === null){
    console.log("(2) Las variables `numero`es null");
}

numero = null;
if(numero === null){
    console.log("(3) La variable `numero`es null");
}

if(numero === undefined){
    console.log("(3.1) La variable `numero` es undefined");
}

// ! (bang)
if(!numero){
    console.log("(4) La variable `numero` es undefined");
}

numero = null;
if(!numero){
    console.log("(4.1) La variable `numero`es null");
}

console.log();
let prueba;
if(prueba === undefined){
    console.log("(5) La variable `prueba` es undefined");
}


