/**
 Nuevo Ejercicio: Clasificación por Edad

*Objetivo*:

1. Declara una variable llamada edad y asígnale tu edad actual.
2. Declara otra variable llamada nombre y asígnale tu nombre.
3. Basándote en la edad del usuario, muestra diferentes mensajes:
   - Si el usuario tiene menos de 13 años, muestra "Hola, [nombreUsuario]. Eres un niño."
   - Si el usuario tiene entre 13 y 19 años (inclusive), muestra "Hola, [nombreUsuario]. Eres un adolescente."
   - Si el usuario tiene entre 20 y 64 años (inclusive), muestra "Hola, [nombreUsuario]. Eres un adulto."
   - Si el usuario tiene 65 años o más, muestra "Hola, [nombreUsuario]. Eres un adulto mayor."

### Ejemplo de Mensajes:
- Si tienes 10 años: "Hola, Daniel. Eres un niño."
- Si tienes 15 años: "Hola, Daniel. Eres un adolescente."
- Si tienes 30 años: "Hola, Daniel. Eres un adulto."
- Si tienes 70 años: "Hola, Daniel. Eres un adulto mayor."
 */




let edad = 14;
let nombre = "Daniel Asalde";
if(edad < 13) {
    alert("Hola " + nombre + " Eres un niño");
}
else if(edad >= 13 && edad <= 19) {
    alert("Hola" + nombre + "Eres un adolescente");
}
else if(edad >= 20 && edad <= 64) 
{
    alert("Hola" + nombre + "Eres un adulto")
}
else{
    alert("Hola" + nombre + "Eres un adulto mayor");
}