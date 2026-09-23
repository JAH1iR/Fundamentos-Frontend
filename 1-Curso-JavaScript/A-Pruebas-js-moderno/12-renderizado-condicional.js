/*
  Ejercicio 10 - Renderizado condicional
  Muestra información diferente según el estado del usuario y de la lista.
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
