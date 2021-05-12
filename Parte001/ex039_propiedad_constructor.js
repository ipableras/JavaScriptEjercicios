// Ejercicio 39: Determinar el Tipo de un Objeto a través de la Propiedad constructor

let fecha = new Date();
let cadena = new String();


console.log(fecha.constructor);
console.log(cadena.constructor);

console.log(fecha.constructor2);

console.log(fecha.constructor === Date);
console.log(cadena.constructor === String);
console.log(fecha.constructor2 === String);

