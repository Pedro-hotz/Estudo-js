// 1. Crie um script que retorna o tempo da data atual no seguinte formato:
// hora-minuto-segundo

// let dataAtual = new Date();
// let horas = dataAtual.getHours();
// let minutos = dataAtual.getMinutes();
// let segundos = dataAtual.getSeconds();

// alert(`${horas}-${minutos}-${segundos}`);

// 2. Peça para o usuário digitar uma data e informe se é antes ou depois
// do dia atual.

// let dia = Number(prompt("Digite o dia"));
// let mes = Number(prompt("Digite o mês"));
// let ano = Number(prompt("Digite o ano"));

// let dataUsuario = new Date(ano, mes - 1, dia);

// let dataAtual = new Date();

// if (dataAtual.getTime() > dataUsuario.getTime()) {
//   alert("A data do usuário é antes da data atual");
// } else {
//   alert("A data do usuário é depois da data atual");
// }

//Objetos

// let aluno = {
//   nome: "Lauro",
//   idade: 34,
// };

// aluno.idade = 28;
// aluno.peso = 80;
// console.log(aluno);

// let endereco = {
//   rua: "Gastão Gonçalves",
//   bairro: "Jardim Catarina",
//   cidade: "Itajubá",
// };

// let nome = prompt("Nome:");
// let idade = prompt("Idade:");

// var aluno2 = {
//   nome: nome,
//   idade: idade,
//   endereco: endereco,
// };

// console.log(aluno2);

//Função Construtora

// class Carro {
//   // O método constructor é usado para criar e inicializar um objeto
//   constructor(marca, modelo, ano) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.ano = ano;
//   }

//   // Um método que o objeto poderá executar
//   getDescricao() {
//     return `${this.marca} ${this.modelo} (${this.ano})`;
//   }
// }

// class Aluno {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// let novoAluno = new Aluno("Lauro", 34);
// let nome = prompt("Nome:");
// let idade = Number(prompt("Idade:"));
// let novoAluno2 = new Aluno(nome, idade);

// console.log(novoAluno);
// console.log(novoAluno2);

//Exercícios de função construtora:
// 1 - Crie um objeto chamado "técnico" com as propriedades: nome, idade e sexo.
// Pergunte as informações ao usuário e instancie este objeto através de uma
// função construtora. Exiba o objeto.

class Tecnico {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
}

let n = prompt("Digite o nome");
let i = Number(prompt("Digite a idade"));
let s = prompt("Digite o sexo");

let tecnico = new Tecnico(n, i, s);
console.log(tecnico);

// 2 - Crie um objeto chamado "time" com as propriedades: nome, ano de fundação
// e um vetor de cores. Pergunte as informações ao usuário, incluindo duas cores
// que irão para o vetor, e instancie este objeto através de uma função construtora.
// Exiba o objeto.

class Time {
  constructor(nome, anoFundacao, cores) {
    this.nome = nome;
    this.anoFundacao = anoFundacao;
    this.cores = cores;
  }
}

let cores = [];

let nomeTime = prompt("Nome do time:");
let anoF = Number(prompt("Ano de fundação:"));

cores.push(prompt("Digite uma cor"));
cores.push(prompt("Digite uma cor"));

let time = new Time(nomeTime, anoF, cores);

console.log(time);

// 3 - Adicione ao objeto "time" (criado na questão 2) uma propriedade chamada
// "treinador" e faça o time receber nesta propriedade o objeto criado na
// questão 1.  Exiba o nome e o sexo do treinador do time instanciado.

time.treinador = tecnico;

console.log("Nome: " + time.treinador.nome);
console.log("Sexo: " + time.treinador.sexo);
