async function obtenerUsuarios() {
    console.log('⏳ Cargando usuarios...');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        console.log('Usuarios obtenidos:', data.slice(0, 3));
    } catch (error) {
        console.error('✗ Error al obtener usuarios:', error.message);
    }
}

async function obtenerUsuario() {
    console.log('⏳ Cargando usuario...');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();

        console.log('Usuario encontrado:', {
            nombre: user.name,
            email: user.email,
            telefono: user.phone,
            sitio: user.website
        });
    } catch (error) {
        console.error('✗ Error al obtener usuario:', error.message);
    }
}

async function obtenerConError() {
    console.log('⏳ Probando URL inválida...');

    try {
        const response = await fetch('https://url-invalida.com/datos');
        const data = await response.json();
        console.log('✓ Datos:', data);
    } catch (error) {
        console.error('✗ Error capturado:', error.message);
    }
}

console.log('--- Fetch API ---');
obtenerUsuarios();
obtenerUsuario();
obtenerConError();
