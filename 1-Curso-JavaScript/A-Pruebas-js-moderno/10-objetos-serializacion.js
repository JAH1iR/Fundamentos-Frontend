/*
  Ejercicio 8 - Objetos, spread y serialización
  Actualiza un objeto sin modificar el original y conviértelo a JSON.
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