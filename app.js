const express = require("express")
const app = express()
const post = require("./models/post")

app.get("/", function(req,res){
    res.send("Pagina Inicial")
})

app.get("/cadastrar",function(req,res){
    post.create({
        nome:'Antonio'
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Falha ao cadastrar os dados:" + erro)
    })
})

app.listen(3306,function(){
    console.log("Servidor Ativo!")
})
