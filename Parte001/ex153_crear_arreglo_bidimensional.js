// Ejercicio 153: Crear un Método para Eliminar un Elemento de un Arreglo

function eliminarElemento(arreglo, valor){
    return arreglo.filter((elemento) => {
        return elemento != valor;    
    });
}

let numeros = [1, 2, 3, 4, 5, 4];

console.log(numeros);
console.log(eliminarElemento(numeros, 4));

// Al reves
function noeliminarElemento(arreglo, valor){
    return arreglo.filter((elemento) => {
        return elemento == valor;    
    });
}

let numeros2 = [1, 2, 3, 4, 5, 4];

console.log(numeros2);
console.log(noeliminarElemento(numeros, 4));

// Utilizar con el landa



