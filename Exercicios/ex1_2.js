// Para usar o prompt no nodejs é preciso instalar essa lib 'prompt-sync'

let prompt = require("prompt-sync");
prompt = prompt();

const n1 = prompt("digite o primeiro numero: ");
console.log(n1);

// 1.1
// let preco = parseFloat(prompt("digite o preço do produto? "));
// let desconto = parseFloat(prompt("digite o desconto do produto? "));

// function calcularDesconto(valor, desconto) { // faz uma função que calcula o valor junto com o desconto
//     const resultado = preco -(preco * desconto / 100); //a formula
//     console.log("O valor com desconto é: ", resultado); //resultado do calculo
// }
// calcularDesconto(preco, desconto); //resultado do calculo

// 1.2
// let celsius = parseFloat(prompt("digite a temperatura: "));

// function conversao(celsius) {
//     const fahrenheit = ((celsius * 9 / 5) + 32);
//     console.log(fahrenheit)
// }
// conversao(celsius);

// 1.3
// let principal = parseFloat(prompt("digite seu número: "));
// let taxa = parseFloat(prompt("digite a taxa: "));
// let tempo = parseFloat(prompt("digite o tempo: "));

// function Juros(principal, taxa, tempo) {
//     const taxaConvertido = (taxa / 10);
//     const resultado = (principal * taxaConvertido * tempo);
//     console.log(resultado);
// }
// Juros(principal, taxa, tempo);

//2.1
// let num1 = parseFloat(prompt("digite um número: "));
// let num2 = parseFloat(prompt("digite um número: "));

// function maiorNumero(num1, num2) {
//     if (num1 >= num2){
//     console.log( "O num1 é maior!")
// }else if(num1 <= num2) {
//     console.log("O num2 é maior!")
// }else {
//     console.log("Os números são iguais")
//  }
// }
// maiorNumero(num1, num2);

//2.2

// let idade = parseFloat(prompt("digite um número: "));

// function classificacao(idade) {
//     if( idade < 12 ) {
//         console.log("Você é uma criança");
//     }else if(idade >= 12 && idade < 18) {
//         console.log("Você é um adolescente");
//     }else {
//         console.log("Você é um adulto");
//     }
// }
// classificacao(idade);

//2.3

// let nota = parseFloat(prompt("digite sua nota: "));

// function validarNota(nota) {
//     if(nota >=0 && nota <= 10) {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(validarNota(nota));

// 3.1

// let media = parseFloat(prompt("digite sua nota: "));
// let falta = parseFloat(prompt("digite sua porcentagem de falta: "));

// function verificarAprovacao(media, faltas) {
//     if (media >= 7 && falta < 25) {
//         console.log("Aluno aprovado!");
//     }else {
//         console.log("Aluno reprovado!");
//     }
// }
// verificarAprovacao(media, falta);

//3.2
// let valor = parseFloat(prompt("digite um valor: "));
// let min = parseFloat(prompt("digite um valor min : "));
// let max = parseFloat(prompt("digite um valor max: "));

// function estaNoIntervalo(valor, min, max) {
//     if(valor >= min && valor <= max) {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(estaNoIntervalo(valor, min, max));
// 3.3

// let username = prompt("digite seu Username: ");
// let senha = parseFloat(prompt("digite sua senha: "));

// function verificarLogin(username, senha) {
//     if (username === "admin" && senha === 1234){
//     console.log("Login bem-sucedido");
// }else {
//     console.log("Usuário ou senha incorretos");
// }
// }
// verificarLogin(username, senha)
