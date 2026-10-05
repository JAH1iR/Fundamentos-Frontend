/*
  Paso 8 - Objetos y serialización
  Objetivo: entender cómo manejar datos complejos y convertirlos a JSON.
  Los objetos representan el estado de la aplicación y la serialización permite guardar
  o enviar esa información de forma segura y reutilizable.

  Ejecuta este ejemplo con: node 8-objetos-y-serializacion.js
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

const usuarioActualizado = {
  ...usuario,
  activo: false,
  preferencias: {
    ...usuario.preferencias,
    tema: "claro",
  },
};

const usuarioJson = JSON.stringify(usuarioActualizado);
const usuarioRecuperado = JSON.parse(usuarioJson);

console.log("Usuario original:", usuario);
console.log("Usuario actualizado:", usuarioActualizado);
console.log("JSON serializado:", usuarioJson);
console.log("Objeto restaurado:", usuarioRecuperado);
console.log("Preferencias de tema:", usuarioRecuperado.preferencias.tema);

// ¿Por qué importa esto en React?
// Los estados suelen ser objetos.
// JSON.stringify() es útil para guardar información.
// JSON.parse() sirve para recuperar datos guardados.
// El spread ayuda a crear copias sin mutar el original.
