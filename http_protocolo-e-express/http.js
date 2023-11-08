var http = require("http");

http.createServer(function(req, res){
    res.end("Olá Server Online!");
}).listen(8081);
// Esse comando acima senve para criar um servidor web, a function tem doi atributos que é p "req" e "res". O comando "res.end("Olça Sever Online") mostra uma mensagem em localhost:8081

console.log("Servidor Rodando!!")