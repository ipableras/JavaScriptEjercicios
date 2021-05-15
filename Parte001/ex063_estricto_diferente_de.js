// Ejercicio 63: Uso del Operador Diferente De Estricto

// !==

// true != 1 := false (porque los operadores son iguales)
// true !== 1 := true


// Estp es distinto
if(true !== 1){
    console.log(`true es (estricamente) diferente de 1`);
}

// Esto es igual
if(true != 1){
    console.log(`true es diferente de 1`);
}

if(false !== 0){
    console.log(`false es (estricamente) diferente de 0`);
}

console.log();

if(3 != "3"){
    console.log(`3 es diferente de "3"`);
}else{
    console.log(`3 es igual de "3"`);
}

if(3 !== "3"){
    console.log(`3 es diferente de "3"`);
}else{
    console.log(`3 es igual de "3"`);
}

console.log();

let objeto1 = {};
let objeto2 = {};

if(objeto1 !== objeto2){
    console.log(`objeto1 es (estrictamente) diferente de objeto2`);
}

if(objeto1 != objeto2){
    console.log(`objeto1 es diferente de objeto2`);
}

if(objeto1 == objeto2){
    console.log(`objeto1 es iguales de objeto2`);
}

if(objeto1 !== {}){
    console.log(`objeto1 es (estrictamente) diferente de {}`);
}



