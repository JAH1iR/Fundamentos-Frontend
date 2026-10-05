/*
  Paso 5 - Conceptos clave para React
  Objetivo: simular cómo se manejan props, state y listas en una aplicación React.
  Este archivo representa la transición entre JavaScript puro y la mentalidad de componentes,
  donde los datos cambian y la interfaz se actualiza a partir de esos cambios.

  Ejecuta este archivo con: node 5-conceptos-react.js
*/

const crearEstado = (estadoInicial) => {
  let estadoActual = estadoInicial;

  return {
    leer: () => ({ ...estadoActual }),
    actualizar: (nuevoEstado) => {
      estadoActual = { ...estadoActual, ...nuevoEstado };
      return { ...estadoActual };
    },
  };
};

const crearLista = ({ titulo, usuarios }) => {
  const lista = usuarios.map(({ nombre, activo }) => {
    const estadoTexto = activo ? "activo" : "inactivo";
    return `- ${nombre} (${estadoTexto})`;
  });

  return `${titulo}\n${lista.join("\n")}`;
};

const estado = crearEstado({ contador: 0, conectado: false });
console.log("Estado inicial:", estado.leer());
console.log("Estado actualizado:", estado.actualizar({ contador: 1, conectado: true }));

const componente = crearLista({
  titulo: "Estudiantes activos",
  usuarios: [
    { nombre: "Ana", activo: true },
    { nombre: "Luis", activo: false },
    { nombre: "Sofía", activo: true },
  ],
});

console.log(componente);

// Props = datos que recibe un componente como entrada.
// State = datos internos que cambian durante la ejecución.
// map() = patrón clave para renderizar listas en React.
// La idea es pensar en UI como una función de datos.
