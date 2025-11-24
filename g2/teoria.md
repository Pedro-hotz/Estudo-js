Teoria para a prova de web 2 



==== Manipulação de DOM ==== 


+ innerHTML => Põe coisas no html

+ element.textContent => Põe apenas textos 

+ element.style => muda o css 

    element.style.propriedadesCSS = 'novoValor'  ?  // é possível criar classe nova 


+ Criar e remover elementos 

    + createElement('tag')         => Cria novo elemento 

    + elementoPai.appendChild(novo)         => Adicionar dentro de um elemento 

    + elementoPai.removeChild(filho)          => Elemento para remover 

=============================================================================


=== seleção ===

+ id 

+ name

+ class

+ querySelector() pode usar id('#id'), class('.class') ou nomeDoElemento('nomdeDoElemento')


=============================================================================

=== Manipulação de classes === 

+ .add('classe') => Adiciona uma classe ao elemento.

+ .remove('classe') => Tira uma classe do elemento 

+ .toggle('classe') => Alterna, se tiver ele altera se não adiciona 

+ .contains('classe') => returna true ou false, verifica se existe essa class 


=============================================================================

=== Eventos DOM === 

+ click 

+ onload    => A página (ou um elemento, como uma imagem) terminou de carregar. Só funciona no body

+ keyup     => Solta uma tecla depois de apertar.

+ keydown   => Aperta uma tecla.


--- addEventListener --- 

elemento.addEventListener(′nomeDoEvento′,funcaoParaRodar)  // Lembrar de chamar a função sem parentese pois se colocar pareêntese, a função é executada na hora que da refresh ou abre

--------------------------------------

+ this => é uma palavra que faz referência ao próprio elemento que foi clicado. 
          Como por exemplo, você tem 10 botões e quando vc clica em um e chama o this, ele vai chamar o botão que vc clicou 

    botao.addEventListener('click', function() {
        this.classList.toggle('ativo'); // 'this' é o botão clicado
    });



--- Delegação --- 

Você coloca os elementos dentro de uma div, e ao invés de cada filho dessa div ter um addEventListener, ela chama o pai e executa o pai. 

Vamos supor que tenho 5 cards de tarefas onde tem um botão de clicar em cada card. Ao invés de criar um addEventListener para cada botão, eu declaro 
os pais de cada card uma div ou ul iguais e quando aciono o botão, vai subindo a hierarquia até achar o pai que está com addEventListener.


Conceito: Aproveitar o fenômeno de Borbulhamento de Eventos (Event Bubbling).

Aplicação: Em vez de anexar um addEventListener a cada elemento filho (ex: 50 botões de tarefas), você anexa apenas um ouvinte no elemento Pai comum (div, ul, etc.).

-------------------------------------




=== Formulários === 

+ É a melhor maneira de enviar dados pelo seu sistema. Sempre é necessário validar os dados antes de enviar !!!!


    -> Capturar os valores com input 

        let email = getElementById('email').value 


    -> Captura campos vazios 

        if (email.trim() == '') {
            alert('Email não preenchido')
        }


    -> Tamanho minimo 

        let msg = getElementById('msg')
        if(msg.length > 100 ) {
            alert('Muitos caracteres') 
        }


    -> Validação de datas 

        let dataEntrada = new Date(inputData.value);
        let dataAtual = new Date()

        // ver como faz para a idade ser maior que 18

        if(dataEntrada > dataAtual) { 
            alert('Data menor que atual')
        }


    -> Validação se é email 

        let email = getElementById('email').value

        if ( (email.lastIndexOf('@') == -1) || (email.lastIndexOf('.') == -1)) {
            alert('Email, não é valido')
        }


    -> Validação de senha 

        let senha = getElementById('senha')
        let confirmSenha = getElementById('confirmSenha')

        if ( senha != confirmSenha){
            alert('Senha diferentes')
        }


    -> Validação de check e radio button 
        ???


--- event.prevenDefault ---

    + Toda vez que um formulário é enviado, o js da refresh(atualizar) a tela. Para que a validação seja feita, é necessário travar esse refresh. 
    Para isso, usamos o event.prevenDefault()

    form.addEventerListener('submit', function(e) {
        e.prevenDefault(); 

        // Faz a validação 
        
        if (validou tudo == 1) {
            form.submit()  => envia o formulário 
        }
    })

--------------------------------------------

=== Pegar uma td específico ===


O que lembrar para prova/exercício:

    1. Pegar a tabela
    const tabela = document.getElementById("tabela");

    2. Pegar as linhas
        const linhas = tabela.querySelectorAll("tr");

    3. Pegar as colunas de uma linha
        const colunas = linha.querySelectorAll("td");

    4. Pegar uma coluna específica
        linha.querySelector("td:nth-child(2)")

    5. Pegar a <tr> de um elemento interno (como botão)
        botao.closest("tr");    => Procura o ancestral mais próximo (pai, avô, bisavô…)
                                => Que combine com o seletor informado

    6. Pegar uma <td> específica nessa linha
        linha.querySelector(".nota");