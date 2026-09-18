function fun_focus() {
  const input = document.getElementById('nombre');

  if (input) {
    input.value = '';
    input.style.background = '';
  }
}

function fun_blur() {
  const input = document.getElementById('nombre');

  if (input && input.value === '') {
    input.style.background = 'yellow';
    console.log('DEBE INGRESAR DATOS');
  }
}
