const mipersona = {
  nombre: 'Pedro Pablo Sánchez',
  edad: 25,
  estudiante: false,
  direccion: {
    calle: 'Santiago Barraza, 278-14',
    ciudad: 'La Chorrera, Panamá oeste'
  },
  telefonos: ['507-346-0159', '507-253-3201']
};

console.log('Persona cargada:', mipersona);

const xhr = new XMLHttpRequest();

xhr.open('GET', '../4-archivos-JSON/01-persona.json', true);
xhr.responseType = 'json';

xhr.onload = function () {
  if (xhr.status === 200) {
    const datosjson = xhr.response;
    console.log('JSON obtenido:', datosjson);
    console.log('Nombre:', datosjson.nombre);
    console.log('Ciudad:', datosjson.direccion?.ciudad || 'No disponible');
  } else {
    console.error('Error al cargar el JSON. Código de estado:', xhr.status);
  }
};

xhr.onerror = function () {
  console.error('No se pudo completar la petición XMLHttpRequest.');
};

xhr.send();
