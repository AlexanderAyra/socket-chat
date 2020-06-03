var socket = io();

let params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('Se necesita el nombre');
}

let usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, (resp) => {
        // console.log(resp);
        renderizarUsuario(resp);
    });

});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     nombre: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {
    // console.log('Servidor:', mensaje);
    renderizarMensajes(mensaje, false);
    scrollBottom();
});

socket.on('listaPersonas', function(mensaje) {
    // console.log(mensaje);
    renderizarUsuario(mensaje);
});

socket.on('mensajePrivado', function(mensaje) {
    console.log(mensaje);
});