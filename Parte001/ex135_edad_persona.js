// Ejercicio 135: Calcular la Edad de una Persona con Objetos Date

// Solución: 

let fechaNacimiento = new Date("12/19/1999");
let ahora = new Date();
let agnios = ahora.getFullYear() - fechaNacimiento.getFullYear();

fechaNacimiento.setFullYear(ahora.getFullYear);

if(ahora < fechaNacimiento){
    --agnios;
}


// Años
console.log(agnios);

