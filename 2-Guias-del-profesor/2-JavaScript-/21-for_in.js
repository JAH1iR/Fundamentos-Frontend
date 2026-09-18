function recorrerObjeto() {
  const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    profesion: 'Ingeniero'
  };

  const output = [];
  for (const propiedad in persona) {
    output.push(`${propiedad}: ${persona[propiedad]}`);
  }

  return `Propiedades de Persona:\n${output.join('\n')}`;
}

function recorrerArreglo() {
  const colores = ['rojo', 'azul', 'verde', 'amarillo', 'naranja'];
  const output = [];

  for (const indice in colores) {
    output.push(`Índice ${indice}: ${colores[indice]}`);
  }

  return `Colores con índices:\n${output.join('\n')}`;
}

function recorrerAuto() {
  const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2022,
    color: 'gris',
    velocidadMaxima: 180,
    tipo: 'Sedán'
  };

  const output = [];
  for (const atributo in auto) {
    output.push(`${atributo}: ${auto[atributo]}`);
  }

  return `Especificaciones del Auto:\n${output.join('\n')}`;
}

function recorrerEstudiantes() {
  const estudiantes = [
    { nombre: 'Ana', nota: 85, clase: '10A' },
    { nombre: 'Bob', nota: 90, clase: '10A' },
    { nombre: 'Carlos', nota: 78, clase: '10B' }
  ];

  const output = [];
  for (let i = 0; i < estudiantes.length; i++) {
    const propiedades = [];
    for (const propiedad in estudiantes[i]) {
      propiedades.push(`${propiedad}: ${estudiantes[i][propiedad]}`);
    }
    output.push(`Estudiante ${i + 1}:\n${propiedades.join('\n')}`);
  }

  return output.join('\n\n');
}

console.log('--- For in ---');
console.log(recorrerObjeto());
console.log(recorrerArreglo());
console.log(recorrerAuto());
console.log(recorrerEstudiantes());
