console.log("<---------- Exercício de Prática 01 ----------->");
/* const precoVenda = +prompt("Digite o valor de venda do produto:");
const percentualDesconto = +prompt("Digite o percentual do desconto (em %):");

const valorDesconto = precoVenda * (percentualDesconto/100);
console.log("O valor do desconto será de R$ " + valorDesconto);

const produtoComDesconto = precoVenda - valorDesconto;
console.log("O valor final do produto com o desconto é de R$ " + produtoComDesconto); */

console.log("------------------------------------------------"); 

console.log("<---------- Exercício de Prática 02 ----------->");
/* const pesoAnterior = Number(prompt("Digite o teu peso anterior:"));
const pesoAtual = Number(prompt("Digite o teu peso atual:"));
const altura = Number(prompt("E por fim, digite a tua altura:"));

const imcAnterior = pesoAnterior / (altura**2);
const imcAtual = pesoAtual / (altura**2);

console.log("O IMC atual é maior ou igual ao anterior?", imcAtual >= imcAnterior);
console.log("O IMC atual é menor ou igual ao anterior?", imcAtual <= imcAnterior); */

console.log("------------------------------------------------");

console.log("<---------- Exercício de Prática 03 ----------->");
/* const anoUser1 = +prompt("Digite o ano de nascimento do primeiro usuário:");
const anoUser2 = +prompt("Digite o ano de nascimento do segundo usuário:");

const maioridadeUser1 = 2023 - anoUser1;
const maioridadeUser2 = 2023 - anoUser2;

console.log("O usuário E o seu companheiro tem maioridade?", (maioridadeUser1 >= 18) && (maioridadeUser2 >= 18));
console.log("O usuário OU o seu companheiro tem maioridade?", (maioridadeUser1 >= 18) || (maioridadeUser2 >= 18));
console.log("Ambos NÃO tem maioridade?", !(maioridadeUser1 >= 18) && !(maioridadeUser2 >= 18)); */

console.log("------------------------------------------------");

console.log("<--------- Exercício de Prática Extra --------->");
const idadeUser = +prompt("Qual a tua idade?");
const idadeAmigo = +prompt("E qual a idade do teu melhor amigo(a)?");

console.log("Sua idade é maior que a do seu melhor amigo?", idadeUser > idadeAmigo);
console.log(Math.abs(idadeUser - idadeAmigo));