// Ejercicio 65: Uso del Operador Predecremento y Postdecremento

// --

// --i; i--

let i = 0;
console.log(i);
i = i - 1;
console.log(i);
i = i - 1;
console.log(i);

console.log();

i = 0;
console.log(i);
i -= 1;
console.log(i);
i -= 1;
console.log(i);

console.log();

i = 0;
console.log(i);
--i;
console.log(i);
--i;
console.log(i);

console.log();

i = 0;
console.log(i);
i--;
console.log(i);
i--;
console.log(i);

console.log();

i = 0;
console.log(--i);
console.log(--i);
console.log(i);

console.log();

i = 0;
console.log(i--);
console.log(i--);
console.log(i);

console.log();

let numeros = [];

for(let k = 10; k >= 1; --k){
    numeros.push(k);
}

console.log(numeros);

console.log();

numeros = [];
for(let k = 10; k >= 1; k--){
    numeros.push(k);
}

console.log(numeros);


