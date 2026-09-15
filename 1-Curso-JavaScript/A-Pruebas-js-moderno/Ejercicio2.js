/*Crea una variable $montoCompra.
Si el monto es mayor a $100.00, aplica un 20% de descuento.
Si es menor, no hay descuento.
Imprime el total a pagar final (restando el descuento si aplica).*/
let montoCompra = 0.0;
const descuento = 0.8;
 montoCompra = parseFloat(prompt('ingrese el monto de la compra: '));
 if (montoCompra > 100.00){
    let preciofinal = montoCompra * descuento; 
    console.log(`<strong>el precio final es :</strong> ${preciofinal}`);
 }
 else {
    console.log(`<strong> no tiene derecho a descuento</strong>`);
 }