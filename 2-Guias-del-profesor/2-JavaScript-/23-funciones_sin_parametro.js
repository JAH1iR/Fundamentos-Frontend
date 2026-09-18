function saludar() {
  return '✓ ¡Hola!';
}

function mostrarFecha() {
  const fecha = new Date();
  return `✓ Fecha actual: ${fecha.toLocaleString()}`;
}

function presentarse() {
  return '✓ Mi nombre es Pedro\nTengo 25 años\nSoy programador';
}

function mostrarMenu() {
  return '✓ ===== MENÚ =====\n1. Inicio\n2. Galería\n3. Contacto\n4. Salir\n================';
}

function mostrarInfoNavegador() {
  return `✓ Navegador: ${navigator.userAgent.substring(0, 50)}...\nIdioma: ${navigator.language}\nPlataforma: ${navigator.platform}`;
}

console.log('--- Funciones sin parámetro ---');
console.log(saludar());
console.log(mostrarFecha());
console.log(presentarse());
console.log(mostrarMenu());
console.log(mostrarInfoNavegador());
