function verificarEdad(edad = 18) {
    if (edad >= 18) {
        console.log('✓ Eres mayor de edad');
    } else {
        console.log('✗ Eres menor de edad');
    }
}

function clasificarNumero(numero = -5) {
    if (numero > 0) {
        console.log('✓ El número es POSITIVO');
    } else if (numero < 0) {
        console.log('✓ El número es NEGATIVO');
    } else {
        console.log('✓ El número es CERO');
    }
}

function calificar(nota = 85) {
    let calificacion;

    if (nota >= 90) {
        calificacion = 'A - Excelente';
    } else if (nota >= 80) {
        calificacion = 'B - Muy Bien';
    } else if (nota >= 70) {
        calificacion = 'C - Bien';
    } else if (nota >= 60) {
        calificacion = 'D - Regular';
    } else {
        calificacion = 'F - Insuficiente';
    }

    console.log(`Tu calificación: ${calificacion}`);
}

function validarContraseña(ingresada = 'abc123') {
    const contraseña = 'abc123';

    if (contraseña === ingresada) {
        console.log('✓ Acceso permitido');
    } else {
        console.log('✗ Contraseña incorrecta');
    }
}

console.log('--- Ejemplo 1: Verificar edad ---');
verificarEdad(20);
console.log('--- Ejemplo 2: Clasificar número ---');
clasificarNumero(-5);
console.log('--- Ejemplo 3: Calificación ---');
calificar(85);
console.log('--- Ejemplo 4: Validar contraseña ---');
validarContraseña('abc123');
