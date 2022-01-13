var express = require ('express')
const {fchown} = require ('fs')
const { dirname } = require('path')
var app = express ()
const sequelize = require ('./db/db.conexion')
const vistaLogin = require ('./mvc/vista/vista.login')

app.use(express.json)

app.use(express.static(__dirname+'/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')

async function inicioServer(){
    try {
        await sequelize.authenticate()
        app.listen(3000, function(){
            console.log('Sistema Iniciado');
        })
    } catch (e) {
        console.log(e);
    }
}

inicioServer()
vistaLogin(app)