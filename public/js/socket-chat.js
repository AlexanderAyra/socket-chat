var socket = io();

let params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('Es necesario el nombre/sala');
}

let usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}


socket.on('connect', function() {

    socket.emit('entrarChat', usuario, (resp) => {
        console.log(resp);
    });

});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');



});


// Enviar información
// socket.emit('enviarMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

socket.on('listaPersona', function(mensaje) {

    console.log('Servidor:', mensaje);

});

socket.on('mensajePrivado', (data) => {
    console.log(data);
})