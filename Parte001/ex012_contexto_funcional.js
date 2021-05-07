// Ejercicio 12: Estudíar el comportamiento del alcance o contexto funcional.

function funcion1(){
    var a = 2;
    console.log("Hola1");

    function funcion3(){
        var b = 5;
        console.log("Hola3");

        function funcion5(){
            console.log(a, b);
        }
    }

    console.log(a);
    // console.log(a, b); // ReferenceError... Por b
}

function funcion2(){
    var a = 7;

    function funcion4(){
        console.log(a);
        console.log("Hola4");
    }
    console.log("Hola2");
    console.log(a);
}

funcion1();

funcion2();

// console.log(a);  // ReferenceError...