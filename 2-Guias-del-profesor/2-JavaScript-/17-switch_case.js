function obtenerDia(dia) {
  let nombre;

  switch (dia) {
    case 1:
      nombre = 'Lunes';
      break;
    case 2:
      nombre = 'Martes';
      break;
    case 3:
      nombre = 'Miércoles';
      break;
    case 4:
      nombre = 'Jueves';
      break;
    case 5:
      nombre = 'Viernes';
      break;
    case 6:
      nombre = 'Sábado';
      break;
    case 7:
      nombre = 'Domingo';
      break;
    default:
      nombre = 'Día inválido';
  }

  return `✓ Día ${dia}: ${nombre}`;
}

function clasificarPelicula(calificacion) {
  switch (calificacion) {
    case 'G':
      return '✓ Apta para todos los públicos';
    case 'PG':
      return '✓ Se recomienda supervisión parental';
    case 'PG-13':
      return '✓ Puede no ser apta para menores de 13';
    case 'R':
      return '✓ Requiere acompañante mayor de edad';
    default:
      return '✗ Calificación desconocida';
  }
}

function calcular(num1, num2, operador) {
  let res;

  switch (operador) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      if (num2 === 0) return '✗ Error: No se puede dividir entre cero';
      res = num1 / num2;
      break;
    default:
      res = 'Operador no válido';
  }

  return `✓ ${num1} ${operador} ${num2} = ${res}`;
}

function obtenerEstacion(mes) {
  let estacion;

  switch (mes) {
    case 12:
    case 1:
    case 2:
      estacion = 'Invierno';
      break;
    case 3:
    case 4:
    case 5:
      estacion = 'Primavera';
      break;
    case 6:
    case 7:
    case 8:
      estacion = 'Verano';
      break;
    case 9:
    case 10:
    case 11:
      estacion = 'Otoño';
      break;
    default:
      return 'Mes inválido';
  }

  return `✓ Mes ${mes}: ${estacion}`;
}

console.log('--- Switch / case ---');
console.log(obtenerDia(3));
console.log(clasificarPelicula('PG-13'));
console.log(calcular(8, 2, '/'));
console.log(obtenerEstacion(10));
