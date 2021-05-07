// Ejercicio 13: Creación de una constante con la sentencia const.

var nombre = "Jose";
let lenguaje = "JavaScript";
const PI = 3.141502;

nombre = "Jose 2";
lenguaje = "JavaScript ES6";
// PI = 3.1415; //Genera error (TypeError)

const estudiante = {"id": 6, nombre: "Germán Ortiz"};

console.log(estudiante);

// Esto si que se puede hacer
estudiante.id = 7;
console.log(estudiante);

// estudiante = {"id": 8, nombre: "Deuterio"};
// console.log(estudiante); //Esta no se puede hacer (TypeError)

//Esto si que se puede hacer
estudiante.nombre = "Deuterio";
console.log(estudiante);




