// Ejercicio 62: Uso del Operador Diferente De

// !=

// 5 != 3 := true, 5 != 5 := false

if(5 != 3){
    console.log("5 es diferente de 3");
}

if(5 != 5){
    console.log("5 es diferente a 5");
}

if("JS" != "JavaScript"){
    console.log(`JS es diferente de "JavaScript"`);
}

if("JS" != "JS"){
    console.log(`JS es diferente de "JS"`);
}

if(true != false){
    console.log(`true es diferente de false`);
}

if(true != true){
    console.log(`true es diferente de true`);
}

console.log();

if(true != 1){
    console.log(`true es diferente de 1`);
}

if(true != 0){
    console.log(`true es diferente de 0`);
}

if(true != 1){
    console.log(`true es diferente de 1`);
}else{
    console.log(`true es igual a 0`);
}

console.log();

let objeto1 = {};
let objeto2 = {};

if(objeto1 != objeto2){
    console.log(`objeto1 es diferente de objeto2`);
}


// Son diferentes
if(objeto1 != {}){
    console.log(`objeto1 es diferente de {}}`);
}

console.log();

let arreglo1 = [];
let arreglo2 = [];

if(arreglo1 != arreglo2){
    console.log(`arreglo1 es diferente de arreglo2`);
}



