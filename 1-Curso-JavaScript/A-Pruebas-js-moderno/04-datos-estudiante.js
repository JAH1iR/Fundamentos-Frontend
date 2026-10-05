/*
  Ejercicio 4 - Desestructuración y template strings
  Objetivo: extraer datos de un objeto de forma más limpia y reutilizable.
  En lugar de acceder a cada propiedad con punto, se desestructura el objeto
  y se construye un mensaje con template literals para mostrar la información.

  Ejecuta con: node 04-datos-estudiante.js
*/
const datosEstudiante = {
  nombre: "Floky",
  facultad: "Ingeniería Industrial",
  anualidad: 2026,
  estaInscrito: true,
};

const { nombre, facultad, anualidad, estaInscrito } = datosEstudiante;
const estadoInscripcion = estaInscrito ? "Sí" : "No";

console.log(
  `Estudiante: ${nombre}, de la facultad ${facultad}. Año: ${anualidad}. ¿Inscrito?: ${estadoInscripcion}`
);