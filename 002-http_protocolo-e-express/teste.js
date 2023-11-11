const Sequelize = require("sequelize")
const sequelize = new Sequelize('teste', "root", "Mjma", {
    host: "localhost",
    dialect: "mysql"
})

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha ao se conectar: "+erro)
// })

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },

    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: "Titulo Qualquer",
//     conteudo: "Aprendendo a criar servidores com node-js"
// })



const Usuarios = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },

    sobrenome: {
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }
})

Usuarios.create({
    nome: "Mauricio",
    sobrenome: "de Lima",
    idade: 36,
    email: "testee@teste.com"
});


// Usuarios.sync({force: true})

// Postagem.sync({force: true})