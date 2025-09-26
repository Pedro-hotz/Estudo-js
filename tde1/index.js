// 1) --------------------------------------------------------

// let idade = Number(prompt("Digite sua idade:  "));

// if (idade < 18 ) {
//     console.log("Você ainda não pode votar");
// } else if ( idade >= 70 ) {
//     console.log("Você não precisa mais votar");
// } else {
//     console.log("Você precisa votar"); 
// }


// 2) ---------------------------------------------------------

// function calculadora(num1, num2) {
//     let escolha = Number(prompt(`
//     === ESCOLHA =====
//     | [ 1 ] Soma              
//     | [ 2 ] Subtração         
//     | [ 3 ] Multiplicação     
//     | [ 4 ] Divisão           
//     =============== 
//     ` + "Digite o número da operação que você quer realizar entre " + num1 + " e " + num2));


//     switch (escolha) {
//         case 1: // Soma 
//             console.log("Você escolheu SOMA");
//             console.log("A soma de " + num1 + " + " + num2 + " = " + (num1 + num2));
//             break;

//         case 2: // Subtração 
//             console.log("Você escolheu SUBTRAÇÃO");
//             console.log("A subtração de " + num1 + " - " + num2 + " = " + (num1 - num2));
//             break;

//         case 3: // Multiplicação 
//             console.log("Você escolheu MULTIPLICAÇÃO");
//             console.log("A multiplicação de " + num1 + " X " + num2 + " = " + (num1 * num2));
//             break;

//         case 4: // Divisão 
//             console.log("Você escolheu DIVISÃO");
//             console.log("A divisão de " + num1 + " / " + num2 + " = " + (num1 / num2));
//             break;
//     }
// }


// let num1 = Number(prompt("Digite o primeiro número: "));
// let num2 = Number(prompt("Digite o segundo número: "));

// calculadora(num1, num2);


// 3) ---------------------------------------------------------

// let sal = Number(prompt("Digite seu salário: ")); 

// if (sal <= 280) {
//     console.log("Seu novo salário é " + (sal * 1.2));
// } else if (sal > 280 || sal < 700) {
//     console.log("Seu novo salário é " + (sal * 1.15));
// } else if (sal > 700 || sal < 1500) {
//     console.log("Seu novo salário é " + (sal * 1.1));
// }else if (sal < 1500) {
//     console.log("Seu novo salário é " + (sal * 1.05));
// }


// 4) --------------------------------------------------------

// let sal = Number(prompt("Digite seu salário: ")); 

// if (sal <= 280) {
//     console.log("Seu antigo salário é " + (sal));
//     console.log("O percentual aplicado é de 20%");
//     console.log("O valor de reajuste é " + (sal * 0,2));
//     console.log("Seu novo salário é " + (sal * 1.2));

// } else if (sal > 280 || sal < 700) {
//     console.log("Seu antigo salário é " + (sal));
//     console.log("O percentual aplicado é de 15%");
//     console.log("O valor de reajuste é " + (sal * 0,15));
//     console.log("Seu novo salário é " + (sal * 1.15));
// } else if (sal > 700 || sal < 1500) {

//     console.log("Seu novo salário é " + (sal * 1.1));
// }else if (sal < 1500) {

//     console.log("Seu novo salário é " + (sal * 1.05));
// }


// 5) --------------------------------------------------------

// let date = prompt("Digite uma date: ");

// const meses = [
//     "janeiro", "fevereiro", "março", "abril",
//     "maio", "junho", "julho", "agosto",
//     "setembro", "outubro", "novembro", "dezembro"
//   ];

// let parte = date.split("/")               // Divide a data em partes e atribui na variável. Onde encontrar '/' divide . 

// let dia = parte[0];                       // Atribui a primeira parte da "divisão" que o slipt() fez 

// let mes = parseInt(parte[1]);             // Transforma a segunda parte em um número inteiro

// let ano = parte[2];                       // Atribui a ultima parte da "divisão" que o slipt() fez 

// console.log(`${dia} de ${meses[mes - 1]} de ${ano}`); // chama o array mes com o indice do mes digitado. -1 por causa do 0 


// 6) --------------------------------------------------------


// function calcu(ano, mes, dia) { 
//     return console.log( (ano * 365) + (mes * 30) + dia);  
// }

// let dataUsu = prompt("Digite sua data de nascimento no seguinte padrão( DD/MM/YYY ): ");

// let sepa = dataUsu.split("/");  // Separa o que foi digitado em um vetor. Quando da a barra, ele "corta"

// calcu(Number(sepa[sepa.length - 1]), Number(sepa[1]), Number(sepa[0])); // É necessário fazer a conversão para Número pois ele vem com String 


// 7) --------------------------------------------------------    + 

// function manipula( palavra ) {

//     palavra.toLowerCase;

//     let temp = palavra.replaceAll('a', 'U');

//     let R = temp.replaceAll('o', 'G');

//     return console.log("Agora está:" + R);
// }


// let palavra = prompt("Ditite uma palavra: ");

// console.log("Você digitou: " + palavra); 

// manipula(palavra); 


// 8) --------------------------------------------------------


// function impri(num) {

//     for(let i = 1 ; i < 11; i ++){
//         if ( (i * 7) > num ) {
//             break;
//         } else { 
//             console.log( i + " X " + 7 + " = " + ( 7 * i)); 
//         }
//     }
// }

// let num = Number(prompt("Digite um número: "));

// impri(num);


// 9) --------------------------------------------------------

// function veri(nome) {

//      let maiorNome = 0, maiorQtd = "";  // declaração de variáveis vazias 

//     for (let i = 0; i < 5; i++) {
//         let qtd = nome[i].length;       // pega o valor de cada array e conta quantos caracteres tem e atribui a variavel "qtd"

//         if ( qtd > maiorQtd) {          // faz uma verificação de quantidade de caracteres. Caso qtd, for maior que maiorQtd, qtd é atribuida em maiorQtd
//             maiorQtd = qtd;
//             maiorNome = nome[i];        // Aqui atribui o maior nome em uma variável. 

//                                         /*
//                                         Não estou usando uma variável chama "maior" pq o "qtd" retorna um Number e se verificar e atribuir a variável 
//                                         maior, da erro pq está misturando os tipos. Nesse tipo de questão, criasse uma variável para quantidade de 
//                                         caracter e uma variável para receber o nome.  
//                                         */ 
//         }
//     }

//     return console.log(`A string com o maior valor dentro do Array é ${maiorNome}`);  // retorna o result da função 
// }

// let nome = []; // declara o array 

// for (let i = 0; i < 5; i++) {
//     nome[i] = prompt(`Digite ${i + 1} nome:`);      // preenche o array 
// }

// veri(nome); // chama a função 


// 10) --------------------------------------------------------


// function conta(frase){

//     let result = frase.split(" ");

//     return console.log(`Na frase fornecida, existem ${result.length} palavras.`); 
// }

// let frase = prompt("Digite uma palavra: "); 

// conta(frase); 


// 11) --------------------------------------------------------

// function inverte(nome){
//     return console.log(nome.split('').reverse().join('')); // Algoritmo para inverter o valor 
// }

// let nome = prompt("Digite seu nome: ");

// inverte(nome); 


// 12) --------------------------------------------------------

/*  
    Nessa questão, você vai criar uma constante para os meses e dias da semana conforme o modelo que o professor quer, Porque apartir das constantes 
    declaradas você faz um calculo e pega a data conforme o objeto date pega. Como ele não quer que exiba nada e nem escreva nada, é só chamar a função direto. 

*/

// function mostraData(){

//     const diasSemana = [
//         "Segunda-feira", "Terça-feira", "Quarta-feira", 
//         "Quinta-Feira", "Sexta-feira", "Sábado",
//         "Domingo"
//     ]; 

//      const meses = [
//         "janeiro", "fevereiro", "março", "abril", "maio", "junho",
//         "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
//     ];

//     var data = new Date; 

//     let diaSe = data.getDay() - 1; 
//     let diaM = data.getDate();
//     let mes = data.getMonth() + 1;
//     let ano = data.getFullYear(); 

//     console.log(`Dia da semana: ${diasSemana[diaSe]}, dia do mês: ${diaM}, mês: ${meses[mes]},ano: ${ano}`);

// }


// mostraData()


// 13) --------------------------------------------------------


// function soma(num1, num2, num3){
//     let result = (num1 + num2 + num3); 

//     let medi = media(result);

//     return console.log(`Soma: ${result}, Média: ${medi}`); 
// }

// function media(r){
//     return (r / 3); 
// }



// let num1 = Number(prompt("Digite o 1º número: "));
// let num2 = Number(prompt("Digite o 2º número: "));
// let num3 = Number(prompt("Digite o 3º número: "));

// soma(num1, num2, num3); 

// 14) --------------------------------------------------------

// function media(num) {
//     let soma = 0;

//     for (let i = 0; i < 3; i++) {
//         soma += num[i];
//     }

//     let media = (soma / 3);

//     return console.log("A média dos 3 números é: " + media);
// }

// let num = [];

// for (let i = 0; i < 3; i++) {
//     num[i] = Number(prompt("Digite " + (i + 1) + " número: "));
// }

// media(num);


// 15) --------------------------------------------------------

// function veri(num, numD){
//     let result = []; 

//     for (let i = 0; i < 4; i++ ){
//         if (num[i] > numD){
//             console.log(num[i]);
//             result[i] = num[i];
//         }
//     }   

//     return result;
// }

// let num = []

// let numD = prompt("Digite um número: ");

// for ( let i = 0; i < 4; i++){
//     num[i] = Number(prompt("Digite 4 números: "));
// } 

// let r = veri(num, numD); 

// console.log(`Número digitado foi ${numD}`);
// console.log(`Array digitado foi ${num}`);
// console.log(`Retorno da função ${r}`);


// 16) --------------------------------------------------------

// function junta(array1, array2){
//     for(let i = 0; i < 4; i++){
//         array1.push(array2[i]);
//     }
//     return array1;
// }

// let array1 = [];
// let array2 = []; 


// for(let i = 0; i < 3; i++){
//     array1[i] = prompt("Digite 3 nomes [ ARRAY 1 ]: ");
// }

// for(let i = 0; i < 3; i++){
//     array2[i] = prompt("Digite 3 nomes [ ARRAY 2 ]: ");
// }

// let r = junta(array1, array2); 

// console.log(`${array1}`); 
// console.log(`${array2}`); 
// console.log(`${r}`); 


// 17) --------------------------------------------------------

// let frase = "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente."

// let r = frase.replace("motivação não dura sempre", "");


// console.log(`${frase}`);
// console.log(r + "...");


// 18) -------------------------------------------------------- ????????

// function formatarMoeda(numero) {
//     // 1. Converte o input (string do prompt) para número
//     const valorNumerico = parseFloat(numero);

//     // 2. Formata como moeda brasileira (Real - BRL)
//     // 'pt-BR' garante a vírgula como separador decimal
//     // 'currency' garante o símbolo e 2 casas decimais
//     const resultadoFormatado = valorNumerico.toLocaleString('pt-BR', {
//         style: 'currency',
//         currency: 'BRL'
//     });

//     return resultadoFormatado;
// }

// let pal = prompt("Digite um número (Ex: 9.2): ");

// let r = formatarMoeda(pal);

// console.log(`${r}`);


// 19) --------------------------------------------------------