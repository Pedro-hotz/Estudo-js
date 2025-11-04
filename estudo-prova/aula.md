# -------- TÓPICOS --------------

- Manipulação de string 

    + .length                       => Retorna o tamanho da string

    + .indexOf()                    => Retorna o índice (posição) da primeira ocorrência de um texto dentro da string. Se não encontrar, retorna -1.

    + .lastIndexOf()                => Igual ao de cima, porém, ele começa de trás para frente 

    + .substring(inicio, fim)       => Retorna a parte da string do indice até o fim - 1. O índice fim não é incluído

    + .replace(antigo, novo)        => Substitui apenas a primeira ocorrência do texto.

    + .replaceAll(antigo, novo)     => Substitui todas as ocorrências do texto.

    + .split(separador)             => Divide a string em partes (array), separando onde o separador aparece

    + .toUpperCase()                => Converte todos os caracteres para maiúsculas.

    + .toLowerCase()                => Converte todos os caracteres para minúsculas.

    + .charAt(posição)              => Retorna o caractere que está na posição indicada.


- Funções 

    Function nomeFunc(parâmetro){

        Manipula o dado

    Return x (x vai ser o retorno da função)
    }



- Objetos - construtoras 

    + propriedade
    + métodos 
    + adicionar um atributo sem criar outro objeto 


- Função date 

    + let agora = new Date(); => pega a data e hora do sistema/meu pc
        resposta => 2025-10-06T22:45:00.000Z 
            - Esse "Z" no final significa UTC (fuso horário 0)


    # ATENÇÃO OS MESES COMEÇAM EM 0
        - janeiro = 0
        - dezembro = 11 


    # ATENÇÃO OS DIAS DA SEMANA 
        - Domingo é o dia 0 
        - Logo, os dias de 0 a 6 


    # FORMATANDO DATA

        -   let data = new Date();

            let dia = data.getDate();
            let mes = data.getMonth() + 1; // soma 1 porque começa do 0
            let ano = data.getFullYear();

            console.log(`${dia}/${mes}/${ano}`);


    # MODIFICANDO DATAS
    
        let data = new Date();

            data.setFullYear(2030);
            data.setMonth(11); // Dezembro (lembre: começa do 0)
            data.setDate(25);  // Dia 25

            console.log(data); // 25 de Dezembro de 2030


    # METÓDOS NATIVOS DO JS 

        console.log(data.toLocaleDateString("pt-BR"));        // 06/10/2025
        console.log(data.toLocaleTimeString("pt-BR"));        // 22:45:10
        console.log(data.toLocaleString("pt-BR"));            // 06/10/2025 22:45:10


    # Função	                          |        O que faz
                                          |      
    new Date()	                          |     Cria uma data atual
                                          |          
    getFullYear() / setFullYear()	      |     Lê / muda o ano
                                          |
    getMonth() / setMonth()               |    Lê / muda o mês
                                          |
    getDate() / setDate()	              |     Lê / muda o dia
                                          |
    getTime() / Date.now()	              |     Retorna timestamp
                                          |
    toLocaleString("pt-BR")	              |     Exibe a data formatada
                                          |
    Subtração (data2 - data1)	          |     Diferença em milissegundos
--------------------------------------------------------------------------

    + Aprender sobre os meses 
    + treinar pegar cada coisa 


- forEach 
    # ARRAY NO PLURAL - NOME DO VALOR NO SINGULAR 

    + array.forEach((valor, índice, arrayOriginal) => {
       });

    # EXEMPLO 

            alunos.forEach(a => {
            console.log(`${a.nome} tirou nota ${a.nota}`);
            });

    -----------------------------------------------------

    # SAIDA 
    
    nome: "Pedro", nota: 8
    nome: "Ana", nota: 9
    nome: "Lucas", nota: 7


    + “Para cada elemento (a) dentro de alunos, execute o bloco de código.”



- conversão

    + parseInt(prompt ("num 2: ")) => int 

    + parseFloat(prompt ("num 2: ")) => float 

    + Number(prompt ("num 2: ")) => number

    + Não existe conversaão para booleano


- arrays 

    # SEMPRE QUE USAR ARRAYS, CRIE A VARIÁVEL NO PLURAL 

    + push          => array.push(elemento1, elemento2, ...); 

    + pop           => remove o último elemento. array.pop();

    + splice        => Retorna: um array com os elementos removidos. array.splice(índiceInicial, quantidadeRemovida, item1, item2, ...);

            + Adicionar =>  linguagens.splice(1, 0, "JavaScript");

            + Remover   =>  cores.splice(1, 2); // remove 2 a partir do índice 1

            + Alterar   =>  numeros.splice(2, 1, 99); // remove 1 elemento a partir do índice 2 e adiciona 99

    + filter        => {
                            let pessoas = [
                            { nome: "Pedro", idade: 18 },
                            { nome: "Ana", idade: 15 },
                            { nome: "Lucas", idade: 21 }
                            ];

                            let maiores = pessoas.filter(pessoa => pessoa.idade >= 18); => Estrutura básica de filter
                        }

