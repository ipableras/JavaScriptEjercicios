// Ejercicio 77: Uso del Operador Condicional Ternario

// condicion ? : expresion_1 : expresion_2

let edad = 17;
let resultado;

if(edad < 18){
    resultado = "menor de edad";
}else{
    resultado = "mayor de edad"
}

console.log(resultado);

console.log();

resultado = edad < 18 ? "menor de edad" : "mayor de edad";

console.log(resultado);

console.log();

edad = 11;
resultado = edad <= 12 ? "niño" : edad < 18 ? "adolescente" : "adulto"
console.log(resultado);

edad = 17;
resultado = edad <= 12 ? "niño" : edad < 18 ? "adolescente" : "adulto"
console.log(resultado);

edad = 23;
resultado = edad <= 12 ? "niño" : edad < 18 ? "adolescente" : "adulto"
console.log(resultado);
