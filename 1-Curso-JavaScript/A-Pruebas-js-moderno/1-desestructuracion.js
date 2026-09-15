//fase 1 desestructuracion
const Usuario = {
  nombre: "eric",
  edad: "22",
  rol: "estudiante",
};
/*como se saca datos sin desestructuracion:
const nombre = Usuario.nombre;
const edad = Usuario.edad;*/

/*aplicando destructuracion
 const{nombre,edad,rol}= Usuario;//esta variable tiene que llamarse igual al objeto
 console.log(nombre);
 console.log(edad);
 console.log(rol); */

//ejemplo con funcion(usado en react props)

function Saludo({ nombre,edad }) {
  console.log(`Hola, ${nombre} edad: ${edad}`);
}
Saludo(Usuario);
