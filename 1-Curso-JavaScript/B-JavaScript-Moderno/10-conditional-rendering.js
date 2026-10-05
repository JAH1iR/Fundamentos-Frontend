/*
  Paso 10 - Renderizado condicional
  Objetivo: mostrar contenido distinto según el estado de la aplicación.
  En React, un componente cambia su contenido dependiendo de si un usuario está autenticado,
  qué rol tiene o si existen datos para renderizar. Este patrón se usa para crear experiencias
  más dinámicas y personalizadas.

  Ejecuta este ejemplo con: node 10-conditional-rendering.js
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

const panel = usuario.rol ? accesos[usuario.rol] : accesos.invitado;

console.log(mensaje);
console.log("Panel actual:", panel);

const lista = ["HTML", "CSS", "JavaScript", "React"];
const listaRenderizada = lista.length > 0 ? lista.join(" | ") : "No hay elementos";

console.log("Lista renderizada:", listaRenderizada);

// ¿Por qué importa esto en React?
// if ternarios y && son patrones muy comunes para mostrar contenido.
// Se usa para mostrar mensajes, botones, paneles y contenido según el estado.
