function verificarVIP(edad, tieneEntrada) {
  if (Number.isNaN(Number(edad))) {
    return 'Edad inválida';
  }

  return edad >= 18 && tieneEntrada
    ? '✓ Bienvenido a la zona VIP'
    : '✗ No puedes acceder';
}

function verificarSeguridad(contraseña) {
  if (contraseña === '') {
    return 'Contraseña vacía';
  }

  if (contraseña.length >= 8 && /\d/.test(contraseña)) {
    return '✓ Contraseña segura';
  }

  const razon = [];
  if (contraseña.length < 8) razon.push('Menos de 8 caracteres');
  if (!/\d/.test(contraseña)) razon.push('No contiene números');
  return '✗ Contraseña no segura: ' + razon.join(', ');
}

function verificarRango(numero) {
  if (Number.isNaN(Number(numero))) {
    return 'Número inválido';
  }

  return numero >= 10 && numero <= 100
    ? `✓ El número ${numero} está en el rango [10-100]`
    : `✗ El número ${numero} está fuera del rango [10-100]`;
}

function aplicarDescuento(compras, gasto) {
  if (Number.isNaN(Number(compras)) || Number.isNaN(Number(gasto))) {
    return 'Datos inválidos';
  }

  return compras > 5 && gasto > 100
    ? `✓ ¡Tienes 20% de descuento! Ahorro: $${(gasto * 0.2).toFixed(2)}`
    : '✗ No aplica descuento (Necesitas más de 5 compras Y gasto mayor a $100)';
}

console.log('--- Operadores lógicos ---');
console.log(verificarVIP(20, true));
console.log(verificarSeguridad('clave1234'));
console.log(verificarRango(42));
console.log(aplicarDescuento(7, 150));
