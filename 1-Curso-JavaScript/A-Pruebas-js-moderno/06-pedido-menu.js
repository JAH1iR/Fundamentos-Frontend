/*
  Ejercicio 6 - Pedido de menú y recorrido de listas
  Objetivo: combinar objetos, arrays y el método map para procesar información.
  Se calcula el total de un pedido y además se enumera una lista de alimentos,
  mostrando una de las formas más comunes de transformar datos en UI.

  Ejecuta con: node 06-pedido-menu.js
*/
const pedido = {
  producto: "caja grande",
  precio: 20.00,
  cantidad: 3,
};

const menu = ["sancocho", "arroz", "carne"];
const total = pedido.precio * pedido.cantidad;
const menuEnumerado = menu.map((comida, indice) => `${indice + 1}. ${comida}`);

console.log(`Producto: ${pedido.producto}`);
console.log(`Precio unitario: $${pedido.precio.toFixed(2)}`);
console.log(`Cantidad: ${pedido.cantidad}`);
console.log(`Total del pedido: $${total.toFixed(2)}`);
console.log(`Segundo elemento del menú: ${menu[1]}`);
console.log("Menú completo:\n" + menuEnumerado.join("\n"));