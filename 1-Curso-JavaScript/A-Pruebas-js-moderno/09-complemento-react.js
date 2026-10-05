/*
  Ejercicio 7 - Complemento de JavaScript para React
  Objetivo: reunir los patrones que más se usan al crear componentes en React.
  Aquí se trabajan props, estado inmutable, map, filter, renderizado condicional
  y async/await para simular cómo se estructura la lógica de una app moderna.

  Ejecuta con: node 09-complemento-react.js
*/

const cursosIniciales = [
  { id: 1, nombre: "HTML", completado: true },
  { id: 2, nombre: "CSS", completado: true },
  { id: 3, nombre: "JavaScript", completado: false },
  { id: 4, nombre: "React", completado: false },
];

// No modificamos el array original: creamos uno nuevo con map.
const marcarCursoComoCompletado = (cursos, idCurso) =>
  cursos.map((curso) =>
    curso.id === idCurso ? { ...curso, completado: true } : curso
  );

const cursosActualizados = marcarCursoComoCompletado(cursosIniciales, 3);
const cursosPendientes = cursosActualizados.filter((curso) => !curso.completado);

// Esta función representa un componente: recibe props y devuelve una vista.
const CursoList = ({ titulo, cursos }) => {
  const contenido = cursos.length
    ? cursos
        .map(({ nombre, completado }) => {
          const estado = completado ? "completado" : "pendiente";
          return `- ${nombre}: ${estado}`;
        })
        .join("\n")
    : "No hay cursos para mostrar.";

  return `${titulo}\n${contenido}`;
};

const estadoInicial = {
  cursos: cursosIniciales,
  usuario: { nombre: "Floky", conectado: true },
};

// Una actualización de estado conserva lo anterior y reemplaza solo lo necesario.
const estadoSiguiente = {
  ...estadoInicial,
  cursos: cursosActualizados,
};

const cargarResumen = async (estado) => {
  const cursosCompletados = estado.cursos.filter((curso) => curso.completado);
  return {
    usuario: estado.usuario.nombre,
    totalCursos: estado.cursos.length,
    cursosCompletados: cursosCompletados.length,
  };
};

console.log(CursoList({ titulo: "Todos los cursos", cursos: estadoSiguiente.cursos }));
console.log("\nCursos pendientes:");
console.log(CursoList({ titulo: "Pendientes", cursos: cursosPendientes }));
console.log("\n¿Usuario conectado?:", estadoSiguiente.usuario.conectado ? "Sí" : "No");

cargarResumen(estadoSiguiente).then((resumen) => {
  console.log("Resumen asíncrono:", resumen);
});

// Relación con React:
// - Props: argumentos como { titulo, cursos }.
// - State: estadoInicial y estadoSiguiente.
// - map(): crea la lista que luego sería JSX.
// - filter(): selecciona datos visibles.
// - ...spread: actualiza sin mutar el objeto original.
// - async/await o Promises: carga datos desde una API.
