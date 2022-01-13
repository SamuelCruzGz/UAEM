const Sequelize = require('sequelize')

const sequelize = new Sequelize ('UAEM', null, null, {
    dialect : 'mssql',
    server : 'localhost',
    port : 1433,
    dialectOptions :{
        authentication : {
            type : 'default',
            options : {
                encrypt : true,
                userName : 'sa',
                password : 'Guerrero1.'
            }
        }
    }
})