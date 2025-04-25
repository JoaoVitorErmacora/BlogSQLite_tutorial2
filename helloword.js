const express = require("express"); //importou a classe

const port = 3000; // porta TCP do servidor HTTP da aplicação

const app = express(); //cria istancia da classe express

// Metodo express. get necessita de dois parâmetros
//Na ARROW FUNCTION, O primeiro são dados do servidor (REQUISITION - 'req')
// o segundo sao os dados que serao enviados ao cliente (result - 'res')
app.get("/", (req, res) => {
  res.send("Olá SESI!");
});

//app.listen() deve ser o último comando da aplicação (app.js)
app.listen(port, () => {
  console.log(`Servidor sendo executado na porta ${port}!`);
});
