/**
 ### Ejercicio

Imagina que estás creando un programa para recomendar actividades basadas en la edad de una persona, el día de la semana y el clima. Definirás tres variables:

1. *edad* (número): La edad de la persona.
2. *diaDeLaSemana* (cadena): El día de la semana (por ejemplo, "lunes", "sábado").
3. *clima* (cadena): El estado del clima (por ejemplo, "soleado", "lluvioso", "nublado").

Con base en estas variables, el programa debe hacer recomendaciones:

- Si es fin de semana (sábado o domingo):
  - Si el clima es "soleado", recomendar salir a hacer un picnic.
  - Si el clima es "lluvioso", recomendar ver una película en casa.
  
- Si es un día de semana:
  - Si la edad es menor de 18 años y el clima es "soleado", recomendar ir al parque.
  - Si la edad es menor de 18 años y el clima es "lluvioso", recomendar jugar videojuegos en casa.
  - Si la edad es mayor o igual a 18 años y el clima es "soleado", recomendar salir a cenar con amigos.
  - Si la edad es mayor o igual a 18 años y el clima es "lluvioso", recomendar leer un libro en casa.
 */

let edad = 25; // Cambia este valor para probar con diferentes edades
let diaDeLaSemana = "sábado"; // Cambia este valor para probar con diferentes días
let clima = "soleado"; // Cambia este valor para probar con diferentes climas

if (diaDeLaSemana === "sábado" || diaDeLaSemana === "domingo") {
    // Es fin de semana
    if (clima === "soleado") {
        console.log("¡Perfecto para un picnic!");
    } else if (clima === "lluvioso") {
        console.log("Es un buen día para ver una película en casa.");
    } else {
        console.log("Un día nublado, quizás un café en casa sea buena idea.");
    }
} else {
    // Es un día de semana
    if (edad < 18) {
        if (clima === "soleado") {
            console.log("¡Deberías ir al parque a disfrutar del sol!");
        } else if (clima === "lluvioso") {
            console.log("Es un buen momento para jugar videojuegos en casa.");
        }
    } else {
        if (clima === "soleado") {
            console.log("¡Sal a cenar con amigos y disfruta del buen tiempo!");
        } else if (clima === "lluvioso") {
            console.log("Podrías leer un buen libro en casa.");
        }
    }
}