// Paso 2 - Desestructuración
// Te permite extraer valores de objetos y arrays con menos código.
// Ejecuta este ejemplo con: node 2-desestructuracion.js

const usuario = {
  nombre: "María",
  edad: 25,
  perfil: {
    rol: "estudiante",
    ciudad: "Bogotá",
  },
};

const { nombre, edad, perfil: { rol, ciudad } } = usuario;

const cursos = ["HTML", "CSS", "JavaScript", "React"];
const [primerCurso, segundoCurso, ...restoCursos] = cursos;

function mostrarUsuario({ nombre: nombreUsuario, edad: edadUsuario = 18 }) {
  return `${nombreUsuario} tiene ${edadUsuario} años.`;
}

console.log("Datos del usuario:", nombre, edad, rol, ciudad);
console.log("Primeros cursos:", primerCurso, segundoCurso);
console.log("Cursos restantes:", restoCursos);
console.log("Mensaje:", mostrarUsuario(usuario));

// En React esto es clave para manejar props y state.
// Ejemplo: const { title, description } = props;
