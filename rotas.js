const express = require("express"); //importou a classe

const port = 8000; // porta TCP do servidor HTTP da aplicação

const app = express(); //cria istancia da classe express

const home = "<a href='/sobre'> Sobre </a><a href='/info'> Info </a>";
const sobre = 'vc está na página "Sobre"<br><a href="/">Voltar</a>';
const login = 'vc está na página "Login"<br><a href="/">Voltar</a>';
const cadastro = 'vc está na página "cadastro"<br><a href="/">Voltar</a>';

// Metodo express. get necessita de dois parâmetros
//Na ARROW FUNCTION, O primeiro são dados do servidor (REQUISITION - 'req')
// o segundo sao os dados que serao enviados ao cliente (result - 'res')
app.get("/", (req, res) => {
  res.send(home);
});

app.get("/sobre", (req, res) => {
  res.send(sobre);
});

app.get("/login", (req, res) => {
  res.send(login);
});

app.get("/cadastro", (req, res) => {
  res.send(cadastro);
});
//app.listen() deve ser o último comando da aplicação (app.js)
app.listen(port, () => {
  console.log(`Servidor sendo executado na porta ${port}!`);
});
