// Ejercicio 57: Uso del Operador Relacional Menor o Igual Que

// <=

// 3 <= 5 := true; 7 <= 5 := false

if(3 <= 5){
    console.log("3 es menor o igual que 5");
}


if(7 <= 5){
    console.log("7 es menor o igual que 5");
}


if(5 <= 5){
    console.log("5 es menor o igual que 5");
}


console.log(Math.sqrt(2));
if(1.4142 <= Math.sqrt(2)){
    console.log("1.4142 es menor o igual que la raíz cuandrada de 2");
}

console.log();

if("3" <= "5"){ // ToNumber
    console.log("3 es menor o igual que 5");
}

console.log(Number("3a"));
console.log("3a" <= "5");
console.log(NaN <= "5");
console.log(NaN <= NaN);
if("3a" <= "5"){ // ToNumber
    console.log("3a es menor o igual que 5");
}

if(Number("3a") && Number("3") && "3a" <= "5"){ // ToNumber
    console.log("3a es menor o igual que 5");
}




