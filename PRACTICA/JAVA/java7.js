/**
 ### Ejercicio Avanzado

*Objetivo*: Practicar el uso de diferentes tipos de salida de datos en JavaScript, así como el uso de variables y funciones.

### Instrucciones:

1. Crea un script de JavaScript que haga lo siguiente:
   - Declara una variable llamada nombre y asígnale tu nombre.
   - Crea una función llamada saludar() que muestre un saludo usando alert(), como "¡Hola, [nombre]! Bienvenido a mi sitio web!".
   - Dentro de la función, utiliza document.writeln() para mostrar en el documento HTML un mensaje que diga "Estamos felices de tenerte aquí, [nombre]!".
   - Luego, usa console.log() para imprimir en la consola el mensaje "El usuario [nombre] ha ingresado al sitio".
   - Llama a la función saludar().
 */

// Declara una variable con tu nombre
var nombre = "Daniel Asalde"; // Reemplaza "Daniel" con tu nombre si deseas

// Crea la función saludar
function saludar() {
    // Muestra un saludo usando alert
    alert("¡Hola, " + nombre + "! Bienvenido a mi sitio web!");
    
    // Escribe en el documento HTML
    document.writeln("Estamos felices de tenerte aquí, " + nombre + "!");
    
    // Imprime en la consola del navegador
    console.log("El usuario " + nombre + " ha ingresado al sitio");
}

// Llama a la función saludar
saludar();