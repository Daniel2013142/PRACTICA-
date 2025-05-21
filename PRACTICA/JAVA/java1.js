/**
 ### Nuevo Ejercicio: Cálculo de Años hasta el Próximo Cumpleaños

*Objetivo*:

1. Declara una variable llamada edadUsuario y asígnale tu edad actual.
2. Declara otra variable llamada nombreUsuario y asígnale tu nombre.
3. Calcula cuántos años faltan para que cumplas 18 años y guarda ese valor en una variable llamada añosHastaCumpleaños18.
4. Si la edad del usuario es 0, muestra un mensaje que diga "¡Felicidades, [nombreUsuario]! ¡Hoy es tu cumpleaños!".
5. Si la edad es mayor que 0 pero menor de 18, muestra un mensaje que diga "Hola, [nombreUsuario]. Te faltan [añosHastaCumpleaños18] años para cumplir 18.".
6. Si la edad es 18 o mayor, muestra un mensaje que diga "Hola, [nombreUsuario]. Ya tienes [edadUsuario] años."

### Ejemplo de Mensajes:
- Si tienes 0 años: "¡Felicidades, Daniel! ¡Hoy es tu cumpleaños!"
- Si tienes 15 años: "Hola, Daniel. Te faltan 3 años para cumplir 18."
- Si tienes 20 años: "Hola, Daniel. Ya tienes 20 años."
 */

let edad = 11;
let nombre = "Daniel Asalde";
let añosHastaCumpleaños = 18 - edad; // Corrige el cálculo

if (edad === 0) {
    alert("¡Felicidades, " + nombre + "! ¡Hoy es tu cumpleaños!");
} else if (edad < 18) { // Cambié a else if y corregí la condición
    alert("Hola, " + nombre + ". Te faltan " + añosHastaCumpleaños + " años para cumplir 18.");
} else { // Este else captura cuando la edad es 18 o más
    alert("Hola, " + nombre + ". Ya tienes " + edad + " años!");
}