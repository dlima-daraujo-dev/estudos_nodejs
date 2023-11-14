const mongoose = require("mongoose")

// Config Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/teste").then(()=>{
        console.log("MongoDB Conectado!!!")
    }).catch((err)=>{
        console.log("Erro ao se conectar!!! : "+ err)
    })

// Model - Usuários
    // Definindo Model
        const UserSchema = mongoose.Schema({
            nome: {
                type: String,
                require: true
            },
            sobrenome: {
                type: String,
                requeri: true
            },
            email: {
                type: String,
                requeri: true
            },
            idade: {
                type: Number,
                requeri: true
            },
            pais: {
                type: String
            }
        })

    // Definindo a Collection
        mongoose.model('Users', UserSchema)

    // Add User na Collection Users
        const Users = mongoose.model("Users")
        new Users({
            nome:"Jhennifer",
            sobrenome:"Brandão",
            email: "email@email.com",
            idade: 27,
            pais: "Brasil"
        }).save().then(()=>{
            console.log("Usuario Criado com sucesso!!")
        }).catch((err)=>{
            console.log("Houve um erro ao registrar o Usúario: "+err)
        })