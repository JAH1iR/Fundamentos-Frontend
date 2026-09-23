/*
  Ejercicio 4 - Desestructuración y template literals
  Extrae propiedades de un objeto para construir un mensaje.

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