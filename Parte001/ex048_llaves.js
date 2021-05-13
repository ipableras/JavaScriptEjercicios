// Ejercicio 48: Obtener y Recorrer las Llaves de un Objeto

let persona = {id: 101, nombre: "Pablo", apellido: "Pepe", correo: "pablo@mail.com"};

console.log(persona);

console.log();

console.log(typeof Object.keys(persona));
console.log(Object.keys(persona) instanceof Array);
console.log(Object.keys(persona));

console.log();

Object.keys(persona).forEach((valor) => {
    console.log(valor);
});
