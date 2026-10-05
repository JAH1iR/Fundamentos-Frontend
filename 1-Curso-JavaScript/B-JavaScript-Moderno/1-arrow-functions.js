/*
  Paso 1 - Arrow Functions
  Objetivo: entender la sintaxis más moderna para declarar funciones.
  En React, las arrow functions se usan ampliamente en callbacks, eventos y
  transformaciones de listas, porque hacen el código más corto y legible.

  Ejecuta este ejemplo con: node 1-arrow-functions.js
*/

const saludar = (nombre) => `Hola, ${nombre}`;
const sumar = (primerNumero, segundoNumero) => primerNumero + segundoNumero;
const duplicarNumeros = (numeros) => numeros.map((numero) => numero * 2);
const obtenerNombres = (usuarios) => usuarios.map((usuario) => usuario.nombre);

const numeros = [1, 2, 3, 4];
const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 28 },
  { nombre: "Sofía", edad: 19 },
];

console.log(saludar("eric"));
console.log("5 + 3 =", sumar(5, 3));
console.log("Duplicados:", duplicarNumeros(numeros));
console.log("Nombres:", obtenerNombres(personas));

// En React, esto se usa muchísimo para:
// - eventos onClick
// - map() para renderizar listas
// - funciones pequeñas que devuelven valores
