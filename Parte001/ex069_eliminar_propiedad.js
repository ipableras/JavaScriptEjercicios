// Ejercicio 69: Usar el Operador Delete para Eliminar una Propiedad de un Objeto

let computador = {id: 1001, procesador: "Intel Core i7", ram: 32};

console.log(computador);

console.log(`El computador tiene ${computador.ram} GB de RAM`);

console.log(delete computador.ram);

console.log(`El computador tiene ${computador.ram} GB de RAM`);

console.log();

console.log(computador);



