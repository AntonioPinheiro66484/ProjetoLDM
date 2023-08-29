const db = require("./banco")

const clientes = db.sequelize.define('clientes',{
    id:{
        type:db.Sequelize.STRING
    },
    nome:{
        type:db.Sequelize.STRING
    },
    endereco:{
        type:db.Sequelize.STRING
    },
    bairro:{
        type:db.Sequelize.STRING
    },
    cep:{
        type:db.Sequelize.STRING
    },
    cidade:{
        type:db.Sequelize.STRING
    },
    estado:{
        type:db.Sequelize.STRING
    },
    observacao:{
        type:db.Sequelize.STRING
    },
    
})

    //clientes.sync({force:true})

module.export = clientes