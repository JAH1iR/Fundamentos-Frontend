/*
  Paso 7 - Métodos de arreglos
  Objetivo: practicar map, filter y reduce para transformar y resumir información.
  En React estas operaciones son esenciales para mostrar listas, filtrar elementos y
  calcular totales que luego pueden reflejarse en la interfaz.

  Ejecuta este ejemplo con: node 7-array-methods.js
*/

const productos = [
  { nombre: "Laptop", precio: 1200, categoria: "Tecnología" },
  { nombre: "Teclado", precio: 80, categoria: "Accesorio" },
  { nombre: "Monitor", precio: 250, categoria: "Tecnología" },
  { nombre: "Mouse", precio: 40, categoria: "Accesorio" },
];

const nombres = productos.map((producto) => producto.nombre);
const tecnologia = productos.filter((producto) => producto.categoria === "Tecnología");
const total = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
const precioMaximo = Math.max(...productos.map((producto) => producto.precio));

console.log("Productos:", nombres);
console.log("Categoría tecnología:", tecnologia);
console.log("Total de precios:", total);
console.log("Precio máximo:", precioMaximo);

// ¿Por qué importa esto en React?
// map() sirve para renderizar listas.
// filter() ayuda a mostrar solo ciertos elementos.
// reduce() se usa para sumar totales o agrupar información.
