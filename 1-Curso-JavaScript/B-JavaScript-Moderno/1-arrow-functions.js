// Paso 1 - Arrow Functions
// Las funciones flecha son muy comunes en React porque simplifican callbacks y JSX.
// Ejecuta este ejemplo con: node 1-arrow-functions.js

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
