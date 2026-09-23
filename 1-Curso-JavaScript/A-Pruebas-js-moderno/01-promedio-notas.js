/*
  Ejercicio 1 - Variables, arrays, operadores y funciones
  Calcula el promedio de tres notas.

  Ejecuta con: node 01-promedio-notas.js
*/
const nombre = "Floky";
const notas = [90, 80, 70];

const calcularPromedio = (listaNotas) => {
  const suma = listaNotas.reduce((total, nota) => total + nota, 0);
  return suma / listaNotas.length;
};

const promedio = calcularPromedio(notas);

console.log(`Estudiante: ${nombre}`);
console.log(`Notas: ${notas.join(", ")}`);
console.log(`Promedio final: ${promedio.toFixed(2)}`);