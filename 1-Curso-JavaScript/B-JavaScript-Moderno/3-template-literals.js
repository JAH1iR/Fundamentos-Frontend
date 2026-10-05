/*
  Paso 3 - Template Literals
  Objetivo: crear mensajes dinámicos y texto estructurado usando interpolación.
  Las template strings permiten combinar variables y HTML literal sin concatenaciones
  complejas, algo que se usa mucho al construir contenido dinámico.

  Ejecuta este ejemplo con: node 3-template-literals.js
*/

const estudiante = "Carlos";
const leccionesCompletadas = 8;
const totalLecciones = 10;
const porcentaje = (leccionesCompletadas / totalLecciones) * 100;

const mensaje = `Hola ${estudiante}. Has completado ${porcentaje}% del curso.`;

const tarjeta = `
<section class="tarjeta">
  <h2>${estudiante}</h2>
  <p>${leccionesCompletadas} de ${totalLecciones} lecciones completadas</p>
  <p>Progreso: ${porcentaje}%</p>
</section>`;

console.log(mensaje);
console.log(tarjeta);

// En React esto sirve para strings, mensajes y estructuras sencillas de UI.
// También se usa cuando se generan etiquetas o textos dinámicos.
