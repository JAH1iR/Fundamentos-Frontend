function contarHasta(hasta) {
  if (Number.isNaN(Number(hasta)) || hasta < 1) return 'Datos inválidos';

  let output = [];
  let i = 1;
  while (i <= hasta) {
    output.push(i);
    i++;
  }

  return `Contando hasta ${hasta}: ${output.join(', ')}`;
}

function restarHastaCero(desde) {
  if (Number.isNaN(Number(desde)) || desde < 1) return 'Datos inválidos';

  const output = [];
  while (desde > 0) {
    output.push(desde);
    desde--;
  }
  output.push('¡Despegue!');

  return output.join(' -> ');
}

function sumarNumeros(hasta) {
  if (Number.isNaN(Number(hasta)) || hasta < 1) return 'Datos inválidos';

  let suma = 0;
  let i = 1;
  while (i <= hasta) {
    suma += i;
    i++;
  }

  return `Suma de 1 hasta ${hasta}: ${suma}`;
}

function tablaMultiplicar(numero) {
  if (Number.isNaN(Number(numero))) return 'Número inválido';

  const output = [];
  let multiplicador = 1;
  while (multiplicador <= 12) {
    output.push(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
    multiplicador++;
  }

  return `Tabla de ${numero}:\n${output.join('\n')}`;
}

console.log('--- While ---');
console.log(contarHasta(5));
console.log(restarHastaCero(4));
console.log(sumarNumeros(6));
console.log(tablaMultiplicar(3));
