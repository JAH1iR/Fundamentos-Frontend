// Ejemplo complementario - Desestructuración de arrays
// Ejecuta con: node 08-desestructuracion-arrays.js
const frutas = ["mango", "manzana", "pera", "uva"];

// Los valores se extraen según su posición y el resto se agrupa con ...resto.
const [primeraFruta, segundaFruta, ...restoDeFrutas] = frutas;

// También podemos intercambiar variables sin una variable temporal.
let frutaA = "limón";
let frutaB = "naranja";
[frutaA, frutaB] = [frutaB, frutaA];

console.log("Primera fruta:", primeraFruta);
console.log("Segunda fruta:", segundaFruta);
console.log("Resto de frutas:", restoDeFrutas);
console.log("Después del intercambio:", frutaA, frutaB);