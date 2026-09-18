// En JavaScript moderno preferimos let y const.
// La forma histórica de declarar variables tenía un alcance más amplio y podía causar problemas.
let saludar = 'Buenos días, saludos';

function nuevaFuncion() {
  let hola = 'hola...como estas';
  console.log('Dentro de la función:', hola);
}

saludar = 7777;
console.log('Valor global:', saludar);

nuevaFuncion();
