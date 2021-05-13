// Ejercicio 50: Usar el Contenido de una Variable en una Cadena de Caracteres

let numero = 6;
let cadena = 'JavaScript numero';
console.log(cadena);
cadena = "JavaScript numero";
console.log(cadena);

cadena = `JavaScript ${numero}`;
console.log(cadena);
cadena = `JavaScript ${numero + 1}`;
console.log(cadena);

console.log();

let persona = {nombre: "Pablo", apellido: "Casiano", id: 101};

console.log("Su nombre completo es " + persona.nombre + " " + persona.apellido + " y su ID es " + persona.id);

console.log(`Su nombre completo es ${persona.nombre} ${persona.apellido} y su ID es ${persona.id}`);




