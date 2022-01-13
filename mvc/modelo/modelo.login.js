const {restart} = require ('nodemon')
const sequelize = require ('../../db/db.conexion')

module.exports = class Login {
    constructor (datos){
        this.datos = datos
    }

    static async crearUsuario (dato){
        let crearUsr = [
            dato.nombres,
            dato.usuario,
            dato.pass
        ]
        try {
            let resultado = await sequelize.query('insert into usuario (nombres, usuario, pass) values (?,?,?)')
        } catch (e) {
            console.log(e);
        }
    }

    static async autenticarUsuario (dato){
        let autenticarUsr = [
            dato.usuario,
            dato.pass
        ]
        try {
            let resultado = await sequelize.query (`SELECT * FROM usuario WHERE usuario = ? and pass = ?`,{
                replacements : autenticarUsr, type: sequelize.QueryTypes.SELECT
            })
            if (resultado[0] === undefined){
                return false
            }else{
                return true
            }
        } catch (e) {
            console.log(e);
        }
    }

    static async crearCita (dato){
        let crearUsr = [
            dato.fecha,
        ]
        try {
            let resultado = await sequelize.query('insert into cita (fecha0) values (?)')
        } catch (e) {
            console.log(e);
        }
    }

    static async actualizarCita (dato, id){
        let fecha = [
            data.fecha
        ]

        let idC = [
            id.id_cita
        ]
        
        try {
            let resultado = await sequelize.query(`update cita set fecha = ? where id_cita = ${idC}`,{
                replacements : fecha, type : sequelize.QueryTypes.SELECT,
            })
        } catch (e) {
            console.log(e);
        }
    }
}