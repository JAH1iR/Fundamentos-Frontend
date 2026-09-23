/*
  Ejercicio 5 - Comparaciones estrictas y condicionales
  === compara el valor y el tipo, evitando conversiones inesperadas.

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