const Sequelize = require("sequelize")
const sequelize = new Sequelize("projetoldm","root","",{
    host:"localhost",
    dialect:"mysql"
})

module.exports={
    Sequelize:Sequelize,
    sequelize:sequelize
}

    // 
