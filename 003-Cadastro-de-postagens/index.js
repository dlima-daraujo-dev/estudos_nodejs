const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post")

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout : 'main.handlebars'}));
        app.set("wiew engine", "handlebars");

    // Body-Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())


// Rotas

    app.use(express.static('public'));

    app.get("/", function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            console.log(posts)
            res.render("home.handlebars", {posts: posts})
        }) // Se vc quises ordenar do mais antigo para o mais novo "ASC" do mais novo para o mais antigo "DESC"
    })

    // app.get("/", function(req, res){
    //     res.render("home.handlebars")
    // });

    app.get("/cad", function(req, res){
        res.render("form.handlebars");
    }); // Rotas do tipo get pose ser acessadas pela url

    app.post("/onpost", function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect("/")
        }).catch(function(erro){
            res.send("ERRO!!! Cadastro não enviado!!")
        }) 
    }) // Rotas do tipo post não podem ser acessadas por url so atravez de uma requisição

    app.get("/deletar/:id", function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send('Postagem deletada com sucesso!')
        }).catch(function(){
            res.send('Esta postagem não existe!')
        })
    })

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});