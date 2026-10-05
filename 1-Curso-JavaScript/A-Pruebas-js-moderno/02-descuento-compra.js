/*
  Ejercicio 2 - Descuentos en compras
  Objetivo: practicar condicionales, porcentajes y la lógica de negocio.
  El script valida si el total supera un límite y, en ese caso, calcula un
  descuento para mostrar el monto final que debe pagar el cliente.

  Ejecuta con: node 02-descuento-compra.js
*/
const montoCompra = 150;
const porcentajeDescuento = 0.20;
const limiteDescuento = 100;

const calcularTotal = (monto, porcentaje, limite) => {
  const tieneDescuento = monto > limite;
  const descuento = tieneDescuento ? monto * porcentaje : 0;

  return {
    tieneDescuento,
    descuento,
    total: monto - descuento,
  };
};

const compra = calcularTotal(montoCompra, porcentajeDescuento, limiteDescuento);

console.log(`Monto de la compra: $${montoCompra.toFixed(2)}`);
console.log(`¿Tiene descuento?: ${compra.tieneDescuento ? "Sí" : "No"}`);
console.log(`Descuento aplicado: $${compra.descuento.toFixed(2)}`);
console.log(`Total a pagar: $${compra.total.toFixed(2)}`);