function ejemplo1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('✓ Promesa resuelta después de 2 segundos');
    }, 2000);
  });
}

function ejemplo2Exito() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('✓ Operación exitosa');
    }, 1000);
  });
}

function ejemplo2Error() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('✗ Ocurrió un error');
    }, 1000);
  });
}

function ejemplo3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('✓ Paso 1: Conectado a DB');
      resolve('Paso 2: Datos obtenidos');
    }, 1000);
  })
    .then((msg) => {
      console.log('✓ ' + msg);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Paso 3: Procesado');
        }, 1000);
      });
    })
    .then((msg) => {
      console.log('✓ ' + msg);
      console.log('✓ ¡Completado!');
    });
}

console.log('--- Promesas ---');
ejemplo1().then((mensaje) => console.log(mensaje));
ejemplo2Exito().then((mensaje) => console.log(mensaje));
ejemplo2Error().catch((error) => console.log(error));
ejemplo3();
