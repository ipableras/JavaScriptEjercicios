// Ejercicio 34: Crear Objetos Fecha a partir d e Cadenas de Caracteres

let cadenaFecha = "May 13, 1913 13:17:19";
let fecha = new Date(cadenaFecha);

console.log(fecha);

console.log(fecha.setMonth(1));

console.log(fecha);

console.log(fecha.setMonth(0));

console.log(fecha);

// Crear fecha a a partir del estandar RFC 3339
cadenaFecha = "1937-5-13T13:17:19.23Z";
fecha = new Date(cadenaFecha);

console.log(fecha);

fecha = new Date(cadenaFecha);
console.log(cadenaFecha);

