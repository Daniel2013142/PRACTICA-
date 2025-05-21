/**
 ### Ejercicio de Cálculo de Edad

*Objetivo*: Practicar el uso de entrada de datos, variables, funciones y salida en JavaScript.

### Instrucciones:

1. Crea un script de JavaScript que haga lo siguiente:
   - Declara una variable llamada anioNacimiento y asígnale un valor que represente tu año de nacimiento.
   - Crea una función llamada calcularEdad() que:
     - Calcule la edad del usuario restando el año de nacimiento del año actual (puedes usar 2025 como el año actual).
     - Muestra un alert() con el mensaje "Tienes [edad] años." (donde [edad] es el resultado del cálculo).
     - Utiliza document.writeln() para mostrar en el documento HTML un mensaje que diga "El año actual es 2025 y tu edad es [edad].".
     - Imprime en la consola del navegador el mensaje "El usuario nacido en [anioNacimiento] tiene [edad] años.".
2. Llama a la función calcularEdad().
 */
let anioNacimiento = 2002;
function calcularEdad() {
    let edad = 2025 - anioNacimiento;
    alert("Tienes " + edad + " años.");
    document.writeln("El año actual es 2025 y tu edad es " + edad);
    console.log("El usuario nacido en " + anioNacimiento + " tiene " + edad + " años.");
}
calcularEdad();