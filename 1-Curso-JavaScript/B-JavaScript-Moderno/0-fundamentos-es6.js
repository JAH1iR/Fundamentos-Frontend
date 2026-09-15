// Paso 0 - Fundamentos de ES6+
// Este archivo representa la base mínima que necesitas antes de trabajar con React.
// Ejecuta este ejemplo con: node 0-fundamentos-es6.js

const curso = "JavaScript Moderno";
let progreso = 0;
const temas = ["const/let", "funciones", "objetos", "arrays"];

function sumar(primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
}

const estudiante = {
  nombre: "Eric",
  edad: 22,
  activo: true,
};

const tecnologias = ["HTML", "CSS", "JavaScript", "React"];

progreso += 1;

console.log("Curso:", curso);
console.log("Temas principales:", temas.join(", "));
console.log("Progreso:", progreso, "de", temas.length);
console.log("Resultado de sumar(2, 3):", sumar(2, 3));
console.log("Estudiante:", estudiante);
console.log("Tecnologías:", tecnologias);

// ¿Por qué es importante esto?
// React usa estos conceptos todos los días: variables, objetos, arrays y funciones.
// Más adelante veremos versiones más modernas y concisas de estas ideas.
