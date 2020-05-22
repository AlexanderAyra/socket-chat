class Usuarios {

    constructor() {
        this.personas = [];

    }

    // AgregarPersona
    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };
        this.personas.push(persona);

        return this.personas;
    }


    //getPersona
    getPersona(id) {

        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }


    // getPersonas
    getPersonas() {
        return this.personas;
    }


    // getPersonasPorSala ``
    getPersonasPorSala(sala) {

        let personasEnSala = this.personas.filter(persona => persona.sala === sala);

        return personasEnSala;
    }


    // borrarPersona
    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;

    }

}

module.exports = {
    Usuarios
}