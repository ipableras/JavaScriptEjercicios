//  Ejercicio 24: Determinar si una Variable Booleana ha sido Inicializada


let a = Boolean(true);
let b = false;
let c = "";
let d = new Number(5);

console.log(typeof a);
console.log(typeof a === "boolean");

console.log();


console.log(typeof b);
b = true;
console.log(typeof b);
console.log(typeof b === "boolean");
b = false;
console.log(typeof b === "boolean");

console.log();

console.log(typeof c);
console.log(typeof c === "boolean");

console.log();

console.log(typeof d);
console.log(typeof d === "boolean");