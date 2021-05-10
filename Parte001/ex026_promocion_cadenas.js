// Ejercicio 26: Promocionar Valores a Tipo Cadena de Caracteres (String)

console.log(String("JavaScript"));
console.log(String(5));
console.log(typeof String(5));
console.log(String(true));
console.log(String(false));
console.log(typeof String(true));
console.log(typeof true);

console.log();

let objeto = {nombre: "Jose", ad: 123456789};
console.log(objeto);
console.log(typeof objeto);
console.log(String(objeto));
console.log(typeof String(objeto));

console.log();

let numeros = [2, 3, 5, 7];
console.log(String(numeros));
console.log(typeof numeros);
console.log(numeros);
console.log(typeof numeros.join);
console.log(typeof numeros.join());
console.log(numeros.join(","));
console.log(numeros.join(" "));

console.log();

let sumar = (a, b) => {return a + b};
console.log(typeof sumar);
console.log(sumar);
console.log(typeof String(sumar));
console.log(String(sumar));

console.log();

console.log(typeof String(null));
console.log(String(null));
console.log(typeof String(undefined));
console.log(String(undefined));

console.log();

console.log(String(/abc/));

console.log();

objeto = {toString: function() {return "¡Hola!"}};

console.log(typeof String(objeto));
console.log(String(objeto));

