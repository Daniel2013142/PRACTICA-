/**
Ejercicio:

Crea un programa que declare tres variables:

temperaturaMaxima: Un número que representa la temperatura máxima registrada en un día.
temperaturaMinima: Un número que representa la temperatura mínima registrada en un día.
temperaturaPromedio: Un número que representa la temperatura promedio del día.

El programa debe calcular la temperatura promedio a partir de la temperatura máxima y mínima. Luego, debe realizar las siguientes comparaciones e imprimir los resultados por consola:

Si la temperatura máxima es mayor que la temperatura promedio.
Si la temperatura mínima es menor que la temperatura promedio.
Si la temperatura promedio está entre 15 y 25 grados Celsius (inclusive).
Si la diferencia entre la temperatura máxima y la mínima es mayor a 10 grados.
 */

let temperaturaMaxima = 30;
let temperaturaMinima = 10;
let temperaturaPromedio = (temperaturaMaxima + temperaturaMinima) / 2; // Cálculo correcto

console.log("Temperatura promedio: " + temperaturaPromedio);

console.log("¿Temperatura máxima > temperatura promedio? " + (temperaturaMaxima > temperaturaPromedio));
console.log("¿Temperatura mínima < temperatura promedio? " + (temperaturaMinima < temperaturaPromedio));
console.log("¿Temperatura promedio entre 15 y 25? " + (temperaturaPromedio >= 15 && temperaturaPromedio <= 25));
console.log("¿Diferencia entre máx y mín > 10? " + (temperaturaMaxima - temperaturaMinima > 10));