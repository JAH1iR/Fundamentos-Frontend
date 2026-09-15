// Paso 4 - Spread Operator y Rest Parameters
// ... sirve para copiar, combinar o expandir arrays y objetos.
// Ejecuta este ejemplo con: node 4-spread-operator.js

const cursosBase = ["HTML", "CSS"];
const cursosCompletos = [...cursosBase, "JavaScript", "React"];

const usuario = { nombre: "Laura", nivel: "básico" };
const usuarioActualizado = { ...usuario, nivel: "intermedio" };

function sumarTodos(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

console.log("Cursos originales:", cursosBase);
console.log("Cursos completos:", cursosCompletos);
console.log("Usuario original:", usuario);
console.log("Usuario actualizado:", usuarioActualizado);
console.log("Suma total:", sumarTodos(1, 2, 3, 4, 5));

// En React es muy útil para:
// 1. crear copias de objetos o arrays sin mutar los originales
// 2. actualizar estados
// 3. recibir un número variable de argumentos
