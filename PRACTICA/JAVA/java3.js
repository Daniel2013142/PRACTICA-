/**
 ### Nuevo Ejercicio: Actividades Recomendadas por Edad

*Objetivo*:

1. Declara una variable llamada edad y asígnale tu edad actual.
2. Declara otra variable llamada nombre y asígnale tu nombre.
3. Según la edad del usuario, muestra diferentes mensajes sobre actividades recomendadas:
   - Si el usuario tiene menos de 12 años, muestra: "Hola, [nombreUsuario]. Te recomendamos jugar en el parque."
   - Si el usuario tiene entre 12 y 17 años (inclusive), muestra: "Hola, [nombreUsuario]. Te recomendamos practicar deportes."
   - Si el usuario tiene entre 18 y 25 años (inclusive), muestra: "Hola, [nombreUsuario]. Te recomendamos explorar nuevas aficiones."
   - Si el usuario tiene entre 26 y 40 años (inclusive), muestra: "Hola, [nombreUsuario]. Te recomendamos hacer ejercicio regularmente."
   - Si el usuario tiene más de 40 años, muestra: "Hola, [nombreUsuario]. Te recomendamos disfrutar de la lectura."

### Ejemplo de Mensajes:
- Si tienes 10 años: "Hola, Daniel. Te recomendamos jugar en el parque."
- Si tienes 15 años: "Hola, Daniel. Te recomendamos practicar deportes."
- Si tienes 22 años: "Hola, Daniel. Te recomendamos explorar nuevas aficiones."
- Si tienes 30 años: "Hola, Daniel. Te recomendamos hacer ejercicio regularmente."
- Si tienes 50 años: "Hola, Daniel. Te recomendamos disfrutar de la lectura."
 */

let edad = 26;
let nombre = "Daniel Asalde";

if (edad < 12) {
    alert("Hola, " + nombre + ". Te recomendamos jugar en el parque");
}
else if(edad >= 12 && edad <= 17) {
    alert("Hola, " + nombre + ". Te recomendamos practicar deportes");
}
else if(edad >= 18 && edad <= 25) {
    alert("Hola, " + nombre + ". Te recomendamos explorar nuevas aficiones");
}
else if(edad >= 26 && edad <= 40) {
    alert("Hola, " + nombre + ". Te recomendamos hacer ejercicio regularmente");
}
else{
    alert("Hola, " + nombre + ". Te recomendamos disfrutar de la lectura");
}