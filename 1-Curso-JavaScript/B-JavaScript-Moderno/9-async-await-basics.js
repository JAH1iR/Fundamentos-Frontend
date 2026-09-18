// Paso 9 - Async/Await
// Async/Await hace que el código asíncrono se lea de forma mucho más clara.
// Ejecuta este ejemplo con: node 9-async-await-basics.js

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
