/*
  Paso 9 - Async/Await
  Objetivo: practicar el flujo de operaciones asíncronas de una manera más legible.
  Cuando una app consulta datos desde una API, el flujo debe esperar la respuesta;
  async/await hace exactamente eso y mejora la claridad del código al mismo tiempo que
  facilita la gestión de errores.

  Ejecuta este ejemplo con: node 9-async-await-basics.js
*/

const esperar = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`Listo después de ${ms} ms`), ms);
  });

const obtenerUsuario = async () => {
  try {
    const mensaje = await esperar(1000);
    return { nombre: "Luis", mensaje };
  } catch (error) {
    console.error("Hubo un error:", error);
    return null;
  }
};

const cargarDatos = async () => {
  console.log("Iniciando carga...");
  const usuario = await obtenerUsuario();
  console.log("Usuario cargado:", usuario);
  console.log("Carga finalizada.");
};

cargarDatos();

// ¿Por qué importa esto en React?
// Las aplicaciones reales piden datos a APIs.
// async/await hace que el flujo sea más legible y fácil de depurar.
// try/catch ayuda a controlar errores de red o de respuesta.
