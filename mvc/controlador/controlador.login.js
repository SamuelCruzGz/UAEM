const login = require ('../modelo/modelo.login')

module.exports = class Usuario {
    constructor(datos){
        this.datos = datos
    }

    static async crearUsuario (dato){
        try {
            await login.crearUsuario(dato)
            return 'Alta correcta'
        } catch (e) {
            console.log(e);
        }
    }

    static async autenticarUsuario (dato){
        let autUsr = dato
        try {
            let resultado = await login.autenticarUsuario(autUsr)
            if (resultado){
                return resultado
            } else {
                throw new Error ('No existe el usuario')
            }            

        } catch (e) {
            console.log(e);
        }
    }

    static async crearCita (dato){
        try {
            await login.crearCita(dato)
            return 'Cita creada'
        } catch (e) {
            console.log(e);
        }
    }

    static async actualizarCita (data, id){
        let fecha = data 
        let idC = id
        try {
            login.actualizarCita(fecha, idC[0])
        } catch (e) {
            console.log(e);
        }
    }
}