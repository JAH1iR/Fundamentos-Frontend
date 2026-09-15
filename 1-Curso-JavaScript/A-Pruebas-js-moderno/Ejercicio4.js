/*Crea variables para: nombre, facultad, anualidad (un número) y estaInscrito (booleano).

Usa Template Literals (las comillas invertidas `) para mostrar un mensaje en consola que diga:

"Estudiante: [nombre], de la facultad [facultad]. Año: [anualidad]. ¿Inscrito?: [estaInscrito]".*/
let datosEstudiante = {
 nombre : "floky",
 facultad : "industrial",
 semestre : 2026,
 estaInscrito: true
}
console.log(`El estudiante ${datosEstudiante.nombre}, de la facultad ${datosEstudiante.facultad}. Año: ${datosEstudiante.semestre}. ¿Inscrito?: ${datosEstudiante.estaInscrito ? 'Sí, esta inscrito' : 'No, por favor matricularse lo antes posible'}`);
console.log('<br>');