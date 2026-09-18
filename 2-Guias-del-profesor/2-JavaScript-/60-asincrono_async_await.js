async function demo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('✓ Operación completada'), 1000);
    });
}

async function ejemplo1() {
    console.log('⏳ Procesando...');

    try {
        const respuesta = await demo();
        console.log(respuesta);
    } catch (error) {
        console.error('✗ Error:', error);
    }
}

async function obtenerUsuario() {
    console.log('⏳ Obteniendo usuario...');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();

        console.log('✓ Usuario obtenido:', {
            nombre: user.name,
            email: user.email,
            telefono: user.phone
        });
    } catch (error) {
        console.error('✗ Error al obtener usuario:', error.message);
    }
}

async function conError() {
    console.log('⏳ Probando error...');

    try {
        const response = await fetch('https://url-invalida-xyz.com');
        const data = await response.json();
        console.log('✓ Datos:', data);
    } catch (error) {
        console.error('✓ Error capturado con try/catch:', error.message);
    }
}

console.log('--- Async/Await ---');
ejemplo1();
obtenerUsuario();
conError();
