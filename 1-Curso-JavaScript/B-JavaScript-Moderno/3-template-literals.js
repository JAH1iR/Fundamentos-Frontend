// Paso 3 - Template Literals
// Permiten interpolar variables dentro de strings con una sintaxis más clara.
// Ejecuta este ejemplo con: node 3-template-literals.js

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
