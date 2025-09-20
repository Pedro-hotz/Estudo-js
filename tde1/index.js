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

// let num1 = Number(prompt("Digite o primeiro número: ")); 
// let num2 = Number(prompt("Digite o segundo número: ")); 


// let escolha = Number(prompt(`
//     === ESCOLHA =====
//     | [ 1 ] Soma              
//     | [ 2 ] Subtração         
//     | [ 3 ] Multiplicação     
//     | [ 4 ] Divisão           
//     =============== 
//     ` + "Digite o número da operação que você quer realizar entre " + num1 + " e " + num2));


// switch(escolha){
//     case 1: // Soma 
//     console.log("Você escolheu SOMA");
//     console.log("A soma de " + num1 + " + " + num2 + " = " + (num1 + num2));
//     break; 

//     case 2: // Subtração 
//     console.log("Você escolheu SUBTRAÇÃO");
//     console.log("A subtração de " + num1 + " - " + num2 + " = " + (num1 - num2));
//     break; 

//     case 3: // Multiplicação 
//     console.log("Você escolheu MULTIPLICAÇÃO");
//     console.log("A multiplicação de " + num1 + " X " + num2 + " = " + (num1 * num2));
//     break; 

//     case 4: // Divisão 
//     console.log("Você escolheu DIVISÃO");
//     console.log("A divisão de " + num1 + " / " + num2 + " = " + (num1 / num2) );
//     break; 
// }


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


