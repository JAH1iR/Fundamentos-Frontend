/*
  Ejemplo complementario - Desestructuración de objetos
  Objetivo: simplificar la lectura de propiedades anidadas dentro de un objeto.
  En lugar de repetir Usuario.nombre, Usuario.edad y Usuario.preferencias, se extraen
  solo los valores que se necesitan. Este patrón aparece mucho en React al recibir props.

  Ejecuta con: node 07-desestructuracion-objetos.js
*/
const Usuario = {
  nombre: "eric",
  edad: 22,
  rol: "estudiante",
  preferencias: {
    idioma: "es",
    tema: "claro",
  },
};

// Sin desestructuración usaríamos Usuario.nombre y Usuario.edad.
// Aquí también renombramos rol y damos un valor por defecto a idioma.
const {
  nombre,
  edad,
  rol: tipoDeUsuario,
  preferencias: { idioma = "es" },
} = Usuario;

// En React, este patrón es habitual al recibir props.
function Saludo({ nombre, edad, rol = "visitante" }) {
  return `Hola, ${nombre}. Tienes ${edad} años y tu rol es ${rol}.`;
}

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Rol:", tipoDeUsuario);
console.log("Idioma:", idioma);
console.log(Saludo(Usuario));
