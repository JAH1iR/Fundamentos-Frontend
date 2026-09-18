function sumarConRetorno(a, b) {
  function sumar(x, y) {
    return x + y;
  }
  return `✓ ${a} + ${b} = ${sumar(a, b)}`;
}

function multiplicarConRetorno(a, b) {
  function multiplicar(x, y) {
    return x * y;
  }
  return `✓ ${a} x ${b} = ${multiplicar(a, b)}`;
}

function calcularPromedioNotas(nota1, nota2, nota3) {
  function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  return `✓ Promedio: ${calcularPromedio(nota1, nota2, nota3).toFixed(2)}`;
}

function verificarAdulto(edad) {
  function esAdulto(e) {
    return e >= 18;
  }
  return esAdulto(edad) ? '✓ Eres mayor de edad' : '✗ Eres menor de edad';
}

function crearNombreCompleto(nombre, apellido) {
  function crearNombre(n, a) {
    return `${n} ${a}`;
  }
  return `✓ Nombre completo: ${crearNombre(nombre, apellido)}`;
}

console.log('--- Funciones con retorno ---');
console.log(sumarConRetorno(8, 5));
console.log(multiplicarConRetorno(4, 6));
console.log(calcularPromedioNotas(80, 90, 100));
console.log(verificarAdulto(20));
console.log(crearNombreCompleto('Ana', 'Pérez'));
