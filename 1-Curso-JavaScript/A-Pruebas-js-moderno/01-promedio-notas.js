/*
  Ejercicio 1 - Promedio de notas
  Objetivo: practicar variables, arrays y funciones.
  Este ejemplo toma tres calificaciones, las suma y obtiene el promedio final.
  También sirve para entender cómo transformar datos crudos en información útil
  antes de mostrarlos en una interfaz.

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