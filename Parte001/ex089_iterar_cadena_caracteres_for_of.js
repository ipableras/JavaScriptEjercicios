// Ejercicio 89: Iterar una Cadena de Caracteres por Medio de for...of

let texto = "¡JavaScript es tremendo!";

for(let c of texto){
    console.log(c);
}

// Esta es la otra forma que vimos en el ejercicio anterior ex088
for(let i in texto){
    console.log(i);
}

for(let i in texto){
    console.log(texto[i]);
}



