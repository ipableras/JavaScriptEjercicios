// Ejercicio 17: Determinar si una Variable ha sido Declarada con la Función typeof

let a;
let b = 11;

console.log(typeof a);
console.log(typeof b);

console.log();

if(typeof a === "undefined"){
    console.log("La variable `a` no tiene asignado un valor.");
}else {
    console.log("La variable `a` tiene asignado un valor.");
}

console.log();

if(typeof b === "undefined"){
    console.log("La variable `b` no tiene asignado un valor.");
}else {
    console.log("La variable `b` tiene asignado un valor.");
}

// -------------
console.log();

console.log("El ultimo ejemplo lo hemos puesto");
if(a === undefined){
    console.log("La variable `a` no tiene asignado un valor.");
}else {
    console.log("La variable `a` tiene asignado un valor.");
}

console.log("Esto no significa lo mismo, eso es algo raro");
if(typeof a === undefined){
    console.log("La variable `a` no tiene asignado un valor.");
}else {
    console.log("La variable `a` tiene asignado un valor.");
}