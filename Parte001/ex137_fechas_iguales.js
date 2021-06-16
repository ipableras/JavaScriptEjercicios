// Ejercicio 137: Verificar si Dos Objetos Fecha son Iguales con getTime

let fecha1 = new Date("Junio 16, 2021 12:26:37");
let fecha2 = new Date("Junio 16, 2021 12:26:37");

if(fecha1.getTime() == fecha2.getTime()){
    console.log("Las dos fechas son iguales");
} else{
    console.log("Las dos fechas NO son iguales")   
}

fecha1 = new Date("Junio 16, 2021 12:26:37");
fecha2 = new Date("Junio 16, 2021 12:26:38");

if(fecha1.getTime() == fecha2.getTime()){
    console.log("Las dos fechas son iguales");
} else{
    console.log("Las dos fechas NO son iguales")   
}
