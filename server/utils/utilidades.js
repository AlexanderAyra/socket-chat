// Metodo Crear Mensaje


let crearMensaje = (nombre, mensaje) => {
    return {
        nombre,
        mensaje,
        fecha: new Date().getTime()
    }
}

module.exports = {
    crearMensaje
}