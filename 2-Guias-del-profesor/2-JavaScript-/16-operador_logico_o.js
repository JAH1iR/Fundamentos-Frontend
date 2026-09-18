function verificarDocumentos(tieneCedula, tienePasaporte) {
  return tieneCedula || tienePasaporte
    ? '✓ Puedes entrar'
    : '✗ Necesitas cédula o pasaporte';
}

function aplicarDescuento(esEstudiante, esJubilado, tieneVIP) {
  if (esEstudiante || esJubilado || tieneVIP) {
    const razon = [];
    if (esEstudiante) razon.push('estudiante');
    if (esJubilado) razon.push('jubilado');
    if (tieneVIP) razon.push('VIP');
    return `✓ ¡Tienes 15% de descuento! (${razon.join(', ')})`;
  }

  return '✗ Sin descuento';
}

function verificarDia(dia, esFeriado) {
  return dia === 'sábado' || dia === 'domingo' || esFeriado
    ? '✓ ¡Día libre!'
    : '✗ Es día de trabajo';
}

function verificarAcceso(esAdmin, tienePermiso) {
  return esAdmin || tienePermiso
    ? '✓ Acceso permitido'
    : '✗ No tienes permisos';
}

console.log('--- Operador lógico OR ---');
console.log(verificarDocumentos(true, false));
console.log(aplicarDescuento(false, true, false));
console.log(verificarDia('domingo', false));
console.log(verificarAcceso(false, true));
