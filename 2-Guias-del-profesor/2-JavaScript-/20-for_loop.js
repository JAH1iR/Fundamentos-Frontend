function contarFor(numero) {
  if (Number.isNaN(Number(numero)) || numero < 1) return 'Datos inválidos';

  const output = [];
  for (let i = 1; i <= numero; i++) {
    output.push(i);
  }

  return `Conteo: ${output.join(', ')}`;
}

function cuentaRegresiva(numero) {
  if (Number.isNaN(Number(numero)) || numero < 1) return 'Datos inválidos';

  const output = [];
  for (let i = numero; i >= 1; i--) {
    output.push(i);
  }
  output.push('¡Despegue!');

  return output.join(' -> ');
}

function tablaMultiplicar(numero) {
  if (Number.isNaN(Number(numero))) return 'Número inválido';

  const output = [];
  for (let i = 1; i <= 12; i++) {
    output.push(`${numero} x ${i} = ${numero * i}`);
  }

  return `Tabla de ${numero}:\n${output.join('\n')}`;
}

function sumarPares(hasta) {
  if (Number.isNaN(Number(hasta))) return 'Datos inválidos';

  let suma = 0;
  const output = [];
  for (let i = 2; i <= hasta; i += 2) {
    output.push(i);
    suma += i;
  }

  return `Pares: ${output.join(', ')}\nSuma: ${suma}`;
}

function patronAsteriscos(filas) {
  if (Number.isNaN(Number(filas)) || filas < 1) return 'Datos inválidos';

  let output = '';
  for (let i = 1; i <= filas; i++) {
    output += '* '.repeat(i).trim() + '\n';
  }

  return output.trim();
}

function forConPaso(inicio, fin, paso) {
  if (Number.isNaN(Number(inicio)) || Number.isNaN(Number(fin)) || Number.isNaN(Number(paso)) || paso === 0) {
    return 'Datos inválidos';
  }

  const output = [];
  for (let i = inicio; i <= fin; i += paso) {
    output.push(i);
  }

  return `Secuencia: ${output.join(', ')}`;
}

console.log('--- For ---');
console.log(contarFor(5));
console.log(cuentaRegresiva(4));
console.log(tablaMultiplicar(3));
console.log(sumarPares(10));
console.log(patronAsteriscos(3));
console.log(forConPaso(1, 10, 2));
