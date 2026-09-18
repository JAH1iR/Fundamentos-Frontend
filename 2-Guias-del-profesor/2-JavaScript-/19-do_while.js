function ejemploDoWhile() {
  const output = [];
  let i = 1;

  do {
    output.push(i);
    i++;
  } while (i <= 5);

  return `Salida Do-While: ${output.join(', ')}`;
}

function menuSimulado(iteraciones) {
  const output = [];
  for (let j = 0; j < iteraciones; j++) {
    output.push(`Iteración ${j + 1}: Menú mostrado; opción ${j + 1}`);
  }
  output.push('Menú se ejecutó al menos una vez');
  return output.join('\n');
}

function validarNumero(numero) {
  return numero >= 1 && numero <= 100
    ? `✓ Número válido: ${numero}`
    : '✗ Número inválido. Debe estar entre 1 y 100';
}

function sumarConDoWhile(hasta) {
  if (Number.isNaN(Number(hasta)) || hasta < 1) return 'Datos inválidos';

  let suma = 0;
  let i = 1;
  do {
    suma += i;
    i++;
  } while (i <= hasta);

  return `Suma de 1 hasta ${hasta}: ${suma}`;
}

function compararWhileDoWhile() {
  const output = [
    'Comparación While(false) vs Do-While(false):',
    '1. While (false): No se ejecuta',
    '2. Do-While (false): Se ejecuta una vez',
    'Conclusión: do-while es mejor para menús y validaciones obligatorias'
  ];

  return output.join('\n');
}

console.log('--- Do-While ---');
console.log(ejemploDoWhile());
console.log(menuSimulado(3));
console.log(validarNumero(42));
console.log(sumarConDoWhile(5));
console.log(compararWhileDoWhile());
