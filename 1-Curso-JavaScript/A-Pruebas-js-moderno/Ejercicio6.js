/*
Crea un Objeto llamado pedido que tenga: producto, precio y cantidad.

Crea un Arreglo llamado menu que contenga 3 nombres de comidas.

Imprime en consola el nombre del producto del objeto pedido y el segundo elemento de tu arreglo menu.
*/
let pedido = {
 precio : 20.00,
 producto : "caja grande",
 cantidad : 45,
}
/*let menu = { //arreglo mal hecho
    comida1: "sancocho",
    comida1: "arroz",
    comida1: "carne"
}*/
// Usando un arreglo como pedía el reto
let menu = ["sancocho", "arroz", "carne"];//corregido

// Para acceder al segundo elemento (arroz), recuerda que empezamos en 0
console.log(`El producto ${pedido.producto} con nombre ${menu[1]} cuesta $${pedido.precio}.`);
