const [restart] = require ('nodemon')
const controladorLogin = require('../controlador/controlador.login')

module.exports = async (app)=>{
    app.get('/', controladorLogin.autenticarUsuario, async (req, res) =>{
        res.json('ok')
    })

    
}