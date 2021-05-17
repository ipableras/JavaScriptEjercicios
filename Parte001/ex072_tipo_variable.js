// Ejercicio 72: Encontrar el Tipo de Dato de una Variable con el Operador typeof

console.log(typeof 2);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof  + "3.1415");
console.log(typeof "Hola");
// El primero que manda es String en el typeof
console.log(typeof "Hola" + " JavaScript!");
// Aquí typeof va con todo junto
console.log(typeof ("Hola" + " JavaScript!"));
console.log(typeof 1 + " es un numero");
console.log(typeof (1 + "  es un numero"));
console.log(typeof 1 + " " + typeof "  es un numero");

console.log();

console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());

console.log();

let patron = /^$/;
console.log(typeof patron);

console.log(typeof null);

console.log();

console.log(typeof new String());
console.log(typeof new Number());

console.log();

console.log(typeof typeof {});
console.log(typeof {});
