/*
  Ejercicio integrador final - JavaScript para React
  Objetivo: consolidar todo lo aprendido durante la ruta de fundamentos.
  Este ejemplo combina objetos, arrays, map/filter, spread, template literals,
  async/await y renderizado condicional para simular la lógica que se usa
  comúnmente al crear interfaces dinámicas con React.

  Ejecuta con: node 13-ejercicio-integrador.js
*/

const cursosBase = [
  { id: 1, nombre: 'HTML', completado: true },
  { id: 2, nombre: 'CSS', completado: true },
  { id: 3, nombre: 'JavaScript', completado: false },
  { id: 4, nombre: 'React', completado: false },
];

const agregarCurso = (lista, nuevoCurso) => [
  ...lista,
  { id: Date.now(), nombre: nuevoCurso, completado: false },
];

const completarCurso = (lista, id) =>
  lista.map((curso) =>
    curso.id === id ? { ...curso, completado: !curso.completado } : curso
  );

const cursosPendientes = (lista) => lista.filter((curso) => !curso.completado);

const obtenerResumen = async (lista) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  const completados = lista.filter((curso) => curso.completado).length;
  const total = lista.length;

  return {
    total,
    completados,
    pendientes: total - completados,
    progreso: total ? Math.round((completados / total) * 100) : 0,
  };
};

let cursos = agregarCurso(cursosBase, 'TypeScript');
cursos = completarCurso(cursos, 3);
const listaPendientes = cursosPendientes(cursos);

console.log('Cursos actuales:');
console.log(cursos.map((curso) => `- ${curso.nombre}: ${curso.completado ? 'completado' : 'pendiente'}`));
console.log('\nCursos pendientes:');
console.log(listaPendientes.map((curso) => curso.nombre));

console.log('\nEstado actual del progreso:');
obtenerResumen(cursos).then((resumen) => {
  console.log(`Total: ${resumen.total}`);
  console.log(`Completados: ${resumen.completados}`);
  console.log(`Pendientes: ${resumen.pendientes}`);
  console.log(`Progreso: ${resumen.progreso}%`);

  const mensaje = resumen.progreso >= 50
    ? 'Muy bien. Ya llevas una base sólida para React.'
    : 'Sigue practicando. Cada ejercicio te acerca a React.';

  console.log(mensaje);
});
