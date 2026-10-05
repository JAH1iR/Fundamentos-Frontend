/*
  Ejercicio 10 - Renderizado condicional
  Objetivo: mostrar contenido distinto según el estado actual de la app.
  Aquí se decide si un usuario está autenticado, qué panel puede ver y si hay
  elementos para mostrar. Este patrón es esencial en React para renderizar UI dinámica.
*/
const usuario = {
  nombre: "Sofía",
  logueado: true,
  rol: "admin",
};

const mensaje = usuario.logueado
  ? `Bienvenida, ${usuario.nombre}`
  : "Debes iniciar sesión";

const accesos = {
  admin: "Panel de administración",
  usuario: "Panel de usuario",
  invitado: "Vista pública",
};

const panel = usuario.logueado
  ? accesos[usuario.rol] || accesos.invitado
  : accesos.invitado;

const cursos = ["HTML", "CSS", "JavaScript", "React"];
const listaRenderizada = cursos.length
  ? cursos.join(" | ")
  : "No hay cursos disponibles";

console.log(mensaje);
console.log("Panel actual:", panel);
console.log("Cursos:", listaRenderizada);

// En React, los ternarios y && se usan para mostrar contenido según el estado.
