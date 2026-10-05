/*
  Ejercicio 3 - Objetos y propiedades de un producto
  Objetivo: aprender a trabajar con objetos y a consultar sus propiedades.
  Aquí representamos un producto con nombre, precio, stock y una bandera que
  indica si requiere receta. Luego se usa un ternario para mostrar un mensaje
  según el valor de esa propiedad.

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