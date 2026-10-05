/*
  Ejercicio 5 - Comparaciones y validación académica
  Objetivo: comprender la diferencia entre comparaciones y la lógica condicional.
  Aquí se revisa si el índice cumple con el mínimo requerido y si se trata de
  un promedio perfecto. Esto refleja cómo se validan condiciones en apps reales
  y formularios académicos.

  Ejecuta con: node 05-indice-academico.js
*/
const indice = 3.0;
const indiceMinimo = 1.0;
const indicePerfecto = 3.0;

if (indice >= indiceMinimo) {
  console.log("Matrícula permitida");
} else {
  console.log("Debe acudir a consejería académica");
}

if (indice === indicePerfecto) {
  console.log("¡Felicidades, promedio perfecto!");
}