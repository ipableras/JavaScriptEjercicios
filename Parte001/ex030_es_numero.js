// Ejercicio 30: Averiguar si una Variable Definida es de Tipo de Dato Numérico

let x = 5.3;
let y = Number("1.23");
let z = "";
let w = new Date();


console.log(typeof x);
if(typeof x === "number"){
    console.log("La variable `x` es numerica");
}else{
    console.log("La variable `x` no es numerica");
}

console.log(typeof y);
if(typeof y === "number"){
    console.log("La variable `y` es numerica");
}else{
    console.log("La variable `y` no es numerica");
}

console.log(typeof z);
if(typeof z === "number"){
    console.log("La variable `z` es numerica");
}else{
    console.log("La variable `z` no es numerica");
}

console.log(typeof w);
if(typeof w === "number"){
    console.log("La variable `w` es numerica");
}else{
    console.log("La variable `w` no es numerica");
}

