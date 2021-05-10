// Ejercicio 28: Promocionar Valores a Tipo de Dato Numérico (Number)

let cadena = "1.414216";
const CONSTANTE_PITAGORICA = Number(cadena);

console.log(typeof CONSTANTE_PITAGORICA);
console.log(CONSTANTE_PITAGORICA);

console.log();

console.log(typeof Number(false));
console.log(Number(false));
console.log(Number(true));

console.log();

console.log(Number(undefined));
console.log(Number(null));
console.log(Number(NaN));

console.log();

console.log(Number(""));
console.log(Number("2.7182t"));