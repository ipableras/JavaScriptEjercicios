// Ejercicio 109: Validar si un Valor No es un Número por Medio de Number.isNaN

let valor = "123abc";

let numero = Number.parseInt(valor);

console.log(typeof numero);
console.log(numero);

console.log();

console.log(Number.isNaN(valor));
console.log(Number.isNaN(numero));

console.log();

valor = "a123abc";
numero = Number.parseInt(valor);
console.log(typeof numero);
console.log(numero);

console.log();

console.log(Number.isNaN(valor));
console.log(Number.isNaN(numero));

console.log();

let objetoNumber = new Number(valor)

console.log(typeof objetoNumber);
console.log(objetoNumber instanceof Number);
console.log(objetoNumber);
console.log(Number.isNaN(objetoNumber));
console.log(Number.NaN);





