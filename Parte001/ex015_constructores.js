// Ejercicio 15: Crear instancias de objetos por medio de constructores.

"JavaScript"
console.log("JavaScript");

new String("JavaScript");
console.log(new String("JavaScript")); // Este es el que significa una [String: "JavaScript"]
console.log(String("JavaScript"));

//---------
/*
Es lo mismo, pero cual es la diferencia...
La primera es mucho más rápido, más eficiente
*/
[2, 3, 5, 7, 11];
console.log([2, 3, 5, 7, 11]);

new Array(2, 3, 5, 7, 11);
console.log(new Array(2, 3, 5, 7, 11));

//-------------------
function restar(a, b){
    return a - b;
}
console.log(restar(2, 3));

//Esta es la opcion con un constructor
//Así es con una clase (Objeto)
let restarFn = new Function("a", "b", "return a - b");
restarFn(2, 3);
console.log(restarFn(2, 3));

//-----------------------
//Los objetos
let persona = {id: 1, nombre: "Juan"};

// Ahora vamos a hacerlo con un objeto
persona = new Object();
console.log(persona);
persona.id = 1;
console.log(persona);
persona.nombre = "Juan";
console.log(persona);
console.log(persona.nombre);

