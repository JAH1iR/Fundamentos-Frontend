/*
  Ejercicio 9 - Promesas y async/await
  Objetivo: simular una petición asíncrona y aprender a esperar su respuesta.
  En aplicaciones reales esto representa llamadas a APIs. Con async/await el
  flujo se vuelve más legible y fácil de mantener, y try/catch ayuda a manejar errores.
*/
const esperar = (milisegundos) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`Respuesta recibida en ${milisegundos} ms`), milisegundos);
  });

const obtenerUsuario = async () => {
  try {
    const mensaje = await esperar(300);
    return { nombre: "Luis", mensaje };
  } catch (error) {
    console.error("No fue posible cargar el usuario:", error);
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

// En React, este patrón aparece al consumir datos de una API.