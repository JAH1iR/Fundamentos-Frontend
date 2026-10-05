/*
  Ejercicio 8 - Objetos, spread y serialización
  Objetivo: actualizar un objeto sin mutar el original y convertirlo en JSON.
  Este patrón es muy útil en React cuando se quiere cambiar el estado de una
  aplicación sin alterar datos previos ni romper la inmutabilidad.
*/
const usuario = {
  nombre: "Ana",
  email: "ana@curso.dev",
  curso: "JavaScript Moderno",
  activo: true,
  preferencias: {
    tema: "oscuro",
    idioma: "es",
  },
};

// El spread crea copias nuevas y permite actualizar propiedades anidadas.
const usuarioActualizado = {
  ...usuario,
  activo: false,
  preferencias: {
    ...usuario.preferencias,
    tema: "claro",
  },
};

// JSON.stringify prepara datos para guardarlos o enviarlos a una API.
const usuarioJson = JSON.stringify(usuarioActualizado);
const usuarioRecuperado = JSON.parse(usuarioJson);

console.log("Usuario original:", usuario);
console.log("Usuario actualizado:", usuarioActualizado);
console.log("JSON serializado:", usuarioJson);
console.log("Objeto recuperado:", usuarioRecuperado);
console.log("Tema actual:", usuarioRecuperado.preferencias.tema);

// En React este patrón se usa para actualizar objetos del estado sin mutarlos.