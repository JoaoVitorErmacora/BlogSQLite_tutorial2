const express = require("express"); //importou a classe
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser"); //importa o body-parser

const port = 8000; // porta TCP do servidor HTTP da aplicação

const app = express(); //Instância para o uso do Express

// Cria conexão com o banco de dados
const db = new sqlite3.Database("user.db"); //Instâcia para uso do Sqlite3, e usa o arquivo 'user.db'

db.serialize(() => {
  // Este metodo permite enviar comandos SQL em modo 'sequencial'
  db.run(
    `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, email TEXT, celular TEXT, cpf TEXT, rg TEXT)`
  );
});

// __dirname é a variavel interna do nodejs que guarda o caminho absolute do projeto, no SO
// console.log(__dirname + "/static");

// Aqui será acrescentado uma rota "/static" para a pasta __dirname + "/static"
// O app.use é usado para acrescentar rotas novas para o Express gerenciar e pode usar
// Middleware para isto, que neste caso é o express.static que gerencia rotas estaticas
app.use("/static", express.static(__dirname + "/static"));

// MIddleware para processar as requisições do Body Parameters do cliente
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar EJS como o motor de visualização
app.set("view engine", "ejs");

const Home =
  "<a href='/sobre'> Sobre </a><a href='/Login'> Login </a><a href='/cadastro'> Cadastro </a>";
const Sobre = 'vc está na página "Sobre"<br><a href="/">Voltar</a>';
const Login = 'vc está na página "Login"<br><a href="/">Voltar</a>';
const cadastro = 'vc está na página "Cadastro"<br><a href="/">Voltar</a>';

// Metodo express. get necessita de dois parâmetros
//Na ARROW FUNCTION, O primeiro são dados do servidor (REQUISITION - 'req')
// o segundo sao os dados que serao enviados ao cliente (result - 'res')
app.get("/", (req, res) => {
  // res.send(Home);
  console.log("GET /index");
  res.render("pages/index", {
    titulo: "Blog da turma I2HNA - SESI Nova Odessa",
  });
  // res.redirect("/cadastro"); // Redireciona para a ROTA cadastro
});

app.get("/sobre", (req, res) => {
  console.log("GET /sobre");
  res.render("pages/sobre");
});

app.get("/login", (req, res) => {
  console.log("GET /login");
  res.render("pages/login");
});

app.post("/login", (req, res) => {
  console.log("POST /login");
  res.send("Login ainda não implementado");
});

app.get("/dashboard", (req, res) => {
  console.log("GET /dashboard");
  res.render("pages/dashboard");
});

app.get("/cadastro", (req, res) => {
  console.log("GET /cadastro");
  res.render("pages/cadastro");
});

app.get("/usuarios", (req, res) => {
  const query = "SELECT * FROM users";
  db.all(query, (err, row) => {
    console.log(`GET /usuarios ${JSON.stringify(row)}`);
    res.render("pages/usertable");
  });
});

app.post("/cadastro", (req, res) => {
  console.log("POST /cadastro");
  !req.body
    ? console.log(`Body vazio: ${req.body}`)
    : console.log(JSON.stringify(req.body));

  const { username, password, email, celular, cpf, rg } = req.body;
  // Colocar aqui validações e inclusão no banco de dados do cadastro do usuário
  // 1. Validar dados do usuário

  // 2. Saber se ele já existe no banco
  const query =
    "SELECT * FROM users WHERE email=? OR cpf=? OR rg=? OR username=?";
  db.get(query, [email, cpf, rg, username], (err, row) => {
    if (err) throw err;
    console.log(`${JSON.stringify(row)}`);
    if (row) {
      // A variavel 'row' irá retornar os dados do banco de dados,
      // executado atraves do SQL, variavel query
      res.send("Usuário ja cadastrado, refaça o cadastro");
    } else {
      // 3. Se o usuário não existe no banco cadastrar
      const insertQuery =
        "INSERT INTO users (username, password, email, celular, cpf, rg) VALUES (?,?,?,?,?,?)";
      db.run(
        insertQuery,
        [username, password, email, celular, cpf, rg],
        (err) => {
          // inserir a lógica do INSERT
          if (err) throw err;
          res.send("Usuário cadastrado com sucesso");
        }
      );
    }
  });
});
//app.listen() deve ser o último comando da aplicação (app.js)
app.listen(port, () => {
  console.log(`Servidor sendo executado na porta ${port}!`);
});
