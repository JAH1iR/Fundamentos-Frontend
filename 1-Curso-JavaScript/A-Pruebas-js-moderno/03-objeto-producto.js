/*
  Ejercicio 3 - Objetos, propiedades y operador ternario
  En JavaScript, un "arreglo asociativo" se representa con un objeto.

  Ejecuta con: node 03-objeto-producto.js
*/
const producto = {
  nombre: "Amoxicilina",
  precio: 12.50,
  stock: 45,
  requiereReceta: true,
};

const mensajeReceta = producto.requiereReceta
  ? "Sí, es obligatoria"
  : "No, es de venta libre";

console.log("Información del producto:");
console.log(`Producto: ${producto.nombre}`);
console.log(`Precio: $${producto.precio.toFixed(2)}`);
console.log(`Unidades disponibles: ${producto.stock}`);
console.log(`¿Requiere receta médica?: ${mensajeReceta}`);