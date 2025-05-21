/**
 ### Nuevo Ejercicio: Cálculo de Años para la Jubilación con Mensaje Personalizado

*Objetivo*: 

1. Declara una variable llamada edadUsuario y asígnale tu edad.
2. Declara otra variable llamada nombreUsuario y asígnale tu nombre.
3. Calcula cuántos años faltan para llegar a los 65 años (edad de jubilación) y guarda ese valor en una variable llamada añosHastaJubilacion.
4. Si la edad del usuario es mayor o igual a 65, muestra un mensaje que diga "¡Felicidades, [nombreUsuario]! Ya estás jubilado." 
5. Si la edad es menor a 65, muestra un mensaje que diga "Hola, [nombreUsuario]. Te faltan [añosHastaJubilacion] años para jubilarte."
 */

let edad = 22;
let nombre = "Daniel Asalde";
let añosHastaJubilacion = 65 - edad;

if (edad >= 65) {
    alert("¡Felicidades, " + nombre + "! Ya estás jubilado.");
} else {
    alert("Hola, " + nombre + ". Te faltan " + añosHastaJubilacion + " años para jubilarte.");
}
