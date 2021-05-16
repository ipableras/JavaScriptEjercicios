// Ejercicio 64: Uso del Operador de Preincremento y Postincremento

// ++

let i = 0;

console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);

console.log();

i = 0;
console.log(i);
i += 1;
console.log(i);
i += 1;
console.log(i);

console.log();

i = 0;
console.log(i);
++i;
console.log(i);
++i;
console.log(i);

console.log();

i = 0;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);

console.log();

i = 0;
console.log(++i);
console.log(++i);
console.log(i);

console.log();

i = 0;
console.log(i++);
console.log(i++);
console.log(i);

console.log();

let arreglo = [];

// En este caso, los dos van a hacer lo mismo
for(let k = 1; k <= 10; ++k){
    arreglo.push(k);
}

for(let k = 1; k <= 10; k++){
    arreglo.push(k);
}


