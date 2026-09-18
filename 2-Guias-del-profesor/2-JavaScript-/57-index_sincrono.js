function ejemplo1() {
  return '✓ Ejecución Síncrona:\n1. Inicio\n2. Operación 1\n3. Operación 2\n4. Fin';
}

function ejemplo2() {
  return '⏳ Esperando 2 segundos...\n1. Inicio\n2. Fin (no esperó)\n⏳ Esperando... (setTimeout en segundo plano)';
}

function ejemplo3() {
  let output = '';

  function saludar(nombre, callback) {
    output += `Hola ${nombre}\n`;
    callback();
  }

  saludar('Juan', () => {
    output += 'Este es el callback';
  });

  return `✓ ${output}`;
}

function ejemplo4() {
  function leerArchivo(nombre, callback) {
    setTimeout(() => callback(`Contenido de ${nombre}`), 2000);
  }

  return new Promise((resolve) => {
    leerArchivo('datos.txt', (contenido) => {
      resolve(`✓ Callback ejecutado después de 2s:\n\n${contenido}`);
    });
  });
}

console.log('--- Sincrónico y asíncrono ---');
console.log(ejemplo1());
console.log(ejemplo2());
console.log(ejemplo3());

ejemplo4().then((resultado) => console.log(resultado));
