let control = 0;
const contrasena = 'acceso2026';

function verificar() {
  const varclave = document.getElementById('clave')?.value ?? '';

  if (varclave !== contrasena || varclave === '') {
    control += 1;
    console.log('ERROR: clave incorrecta o vacía, intente nuevamente');

    if (control >= 3) {
      console.log('INTENTOS AGOTADOS: Acceso BLOQUEADO - Contactar a Soporte Técnico');
    }
  } else {
    console.log('Acceso correcto. Redirigiendo...');
  }
}
