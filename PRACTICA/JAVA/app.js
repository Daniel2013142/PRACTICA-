/**
Crea un programa que declare dos variables numéricas y una variable booleana. 
Asigna valores a las variables numéricas y luego usa operadores de comparación (==, !=, >, <, >=, <=) para compararlas.
 Guarda el resultado de cada comparación en la variable booleana y muestra los resultados por consola. Experimenta con diferentes valores para ver cómo cambian los resultados.
 */

let edadDeJuan = 16;
let edadDeDaniel = 19;
let resultadoComparacion; // Variable booleana para almacenar los resultados

// Comparaciones
resultadoComparacion = (edadDeJuan == edadDeDaniel);
console.log("¿Son iguales? " + resultadoComparacion); // false

resultadoComparacion = (edadDeJuan != edadDeDaniel);
console.log("¿Son diferentes? " + resultadoComparacion); // true

resultadoComparacion = (edadDeJuan > edadDeDaniel);
console.log("¿Juan es mayor que Daniel? " + resultadoComparacion); // false

resultadoComparacion = (edadDeJuan < edadDeDaniel);
console.log("¿Juan es menor que Daniel? " + resultadoComparacion); // true

resultadoComparacion = (edadDeJuan >= edadDeDaniel);
console.log("¿Juan es mayor o igual que Daniel? " + resultadoComparacion); // false

resultadoComparacion = (edadDeJuan <= edadDeDaniel);
console.log("¿Juan es menor o igual que Daniel? " + resultadoComparacion); // true