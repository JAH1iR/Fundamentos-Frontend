function saludarPersona(nombre) {
  return nombre === '' ? 'Nombre vacío' : `✓ Hola ${nombre}`;
}

function sumarNumeros(num1, num2) {
  if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) return 'Datos inválidos';
  return `✓ ${num1} + ${num2} = ${Number(num1) + Number(num2)}`;
}

function multiplicarNumeros(numero, factor) {
  if (Number.isNaN(Number(numero)) || Number.isNaN(Number(factor))) return 'Datos inválidos';
  return `✓ ${numero} x ${factor} = ${Number(numero) * Number(factor)}`;
}

function presentarPersona(nombre, edad, profesion) {
  if (!nombre || !edad || !profesion) return 'Faltan datos';
  return `✓ Mi nombre es ${nombre}\nTengo ${edad} años\nSoy ${profesion}`;
}

function verificarEdad(edad) {
  if (Number.isNaN(Number(edad))) return 'Edad inválida';
  return edad >= 18 ? '✓ Eres mayor de edad' : '✗ Eres menor de edad';
}

console.log('--- Funciones con parámetro ---');
console.log(saludarPersona('Ana'));
console.log(sumarNumeros(4, 6));
console.log(multiplicarNumeros(3, 5));
console.log(presentarPersona('Carlos', 28, 'desarrollador'));
console.log(verificarEdad(21));
