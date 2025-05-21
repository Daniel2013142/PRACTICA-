/**
 ### Ejercicio de Conversión de Temperatura

*Objetivo*: Practicar el uso de funciones, variables y diferentes tipos de salida en JavaScript.

### Instrucciones:

1. Crea un script de JavaScript que haga lo siguiente:
   - Declara una variable llamada temperaturaCelsius y asígnale un valor que represente una temperatura en grados Celsius (puedes elegir cualquier valor).
   - Crea una función llamada convertirAFahrenheit() que:
     - Calcule la temperatura en grados Fahrenheit utilizando la fórmula: (temperaturaCelsius * 9/5) + 32.
     - Muestra un alert() con el mensaje "La temperatura en Fahrenheit es [temperaturaFahrenheit]." (donde [temperaturaFahrenheit] es el resultado del cálculo).
     - Utiliza document.writeln() para mostrar en el documento HTML un mensaje que diga "La temperatura en Celsius es [temperaturaCelsius] y en Fahrenheit es [temperaturaFahrenheit].".
     - Imprime en la consola del navegador el mensaje "La temperatura de [temperaturaCelsius] °C equivale a [temperaturaFahrenheit] °F.".
2. Llama a la función convertirAFahrenheit().
 */

let temperaturaCelsius = 24;

function convertirAFahrenheit() {
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

    alert("La temperatura en Fahrenheit es " + temperaturaFahrenheit + "."); 
    document.writeln("La temperatura de " + temperaturaCelsius + "°C es " + temperaturaFahrenheit + "°F."); 
    console.log("La temperatura de " + temperaturaCelsius + " °C equivale a " + temperaturaFahrenheit + " °F."); 
}
convertirAFahrenheit();