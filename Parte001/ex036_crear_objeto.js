// Ejercicio 36: Crear y Asignar Propiedades a un Objeto

// Primera forma:
let computador = {};
computador.procesador = "Intel Core i7";
computador.ram = 32;
computador.marca = "MSi";
computador.board = "ASUS";

console.log(computador.procesador);

computador.procesador = "Intel Core i7 Octava Generación";

console.log(computador.procesador);

console.log(computador);
console.log();

// Segunda forma:

computador = {procesador: "intel Core i7 Octava Generación",
                ram: 32,
                marca: "MSi",
                board: "ASUS",
                "sistema-operativo": "Windows 10"
            };
            

console.log(computador.procesador);

computador.procesador = "Intel Core i7 Novena Generación";

console.log(computador.procesador);

computador["tarjeta-grafica"] = "nVidia GeForce"; 

console.log(computador["tarjeta-grafica"]);
console.log(computador["ram"]);

console.log(computador);
