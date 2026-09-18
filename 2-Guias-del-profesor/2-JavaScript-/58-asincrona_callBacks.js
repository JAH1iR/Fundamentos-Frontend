function ejemplo1() {
  function saludar(nombre, callback) {
    callback(`Hola ${nombre}`);
  }

  return new Promise((resolve) => {
    saludar('Juan', (mensaje) => resolve(`✓ ${mensaje}`));
  });
}

function ejemplo2() {
  function tareaLarga(callback) {
    setTimeout(() => callback('✓ Tarea completada después de 2 segundos'), 2000);
  }

  return new Promise((resolve) => {
    tareaLarga((respuesta) => resolve(respuesta));
  });
}

function ejemplo3() {
  function tarea1(callback) {
    setTimeout(() => {
      console.log('✓ Tarea 1 completada');
      callback();
    }, 1000);
  }

  function tarea2(callback) {
    setTimeout(() => {
      console.log('✓ Tarea 2 completada');
      callback();
    }, 1000);
  }

  function tarea3(callback) {
    setTimeout(() => {
      console.log('✓ Tarea 3 completada');
      callback();
    }, 1000);
  }

  tarea1(() => {
    tarea2(() => {
      tarea3(() => console.log('✓ ¡Todas completadas!'));
    });
  });
}

console.log('--- Callbacks ---');
ejemplo1().then((resultado) => console.log(resultado));
ejemplo2().then((resultado) => console.log(resultado));
ejemplo3();
