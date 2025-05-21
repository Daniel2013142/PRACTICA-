/**
 ### Ejercicio: Clasificación de Actividades por Edad y Ocasión

*Objetivo*:

1. Declara una variable llamada edad y asígnale tu edad actual.
2. Declara otra variable llamada nombreUsuario y asígnale tu nombre.
3. Declara otra variable llamada ocasión y asígnale un valor que represente la ocasión (puede ser "fin de semana", "día de semana" o "vacaciones").
4. Según la edad del usuario y la ocasión, muestra diferentes sugerencias de actividades:
   - *Menos de 12 años*:
     - Fin de semana: "Hola, [nombreUsuario]. Te recomendamos ir al parque."
     - Día de semana: "Hola, [nombreUsuario]. Te recomendamos hacer manualidades."
     - Vacaciones: "Hola, [nombreUsuario]. Te recomendamos visitar un zoológico."
   - *Entre 12 y 17 años (inclusive)*:
     - Fin de semana: "Hola, [nombreUsuario]. Te recomendamos ir al cine."
     - Día de semana: "Hola, [nombreUsuario]. Te recomendamos estudiar con amigos."
     - Vacaciones: "Hola, [nombreUsuario]. Te recomendamos asistir a un campamento."
   - *Entre 18 y 30 años (inclusive)*:
     - Fin de semana: "Hola, [nombreUsuario]. Te recomendamos salir a cenar."
     - Día de semana: "Hola, [nombreUsuario]. Te recomendamos hacer ejercicio en el gimnasio."
     - Vacaciones: "Hola, [nombreUsuario]. Te recomendamos viajar a un nuevo destino."
   - *Más de 30 años*:
     - Fin de semana: "Hola, [nombreUsuario]. Te recomendamos disfrutar de una buena película en casa."
     - Día de semana: "Hola, [nombreUsuario]. Te recomendamos leer un libro."
     - Vacaciones: "Hola, [nombreUsuario]. Te recomendamos relajarte en la playa."

### Ejemplo de Mensajes:
- Si tienes 10 años y es fin de semana: "Hola, Daniel. Te recomendamos ir al parque."
- Si tienes 15 años y es día de semana: "Hola, Daniel. Te recomendamos estudiar con amigos."
- Si tienes 25 años y son vacaciones: "Hola, Daniel. Te recomendamos viajar a un nuevo destino."
- Si tienes 40 años y es fin de semana: "Hola, Daniel. Te recomendamos disfrutar de una buena película en casa."
 */

let edad = 40;
let nombre = "Daniel Asalde";
let ocasion = "fin de semana";

if(edad < 12) {
    alert("Hola, " + nombre + ". Te recomendamos ir al parque");
}
else if(edad >= 12 && edad <= 17) {
    alert("Hola, " + nombre + ". Te recomendamos ir al cine");
}
else if(edad >= 18 && edad <= 30) {
    alert("Hola, " + nombre + ". Te recomendamos salir a cenar");
}
else{
    alert("Hola, " + nombre + ". Te recomendamos disfrutar de una buena pelicula en casa");
}

