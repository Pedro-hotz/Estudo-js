====================== web 2 ====================

let = > variável local 

var = > variável global

+ js é intligente e não precisa converter para string. O js converte automaticamente. 

+ prompt ("xxxx: ") => input 

------------------------ String --------------------------

+ vai cair bastante na prova 

var string = "xxxxx"

var string = 'xxxxx'


+{
 let num1 = prompt ("num 1 : ") 	=> 5
let num2 = prompt ("num 2: ")		 => 2 

alert(num1 + num2) 			= > 52
}

------------------------ Vetor -------------------------------

+ heterogeneo 

var arr = array[]

var arr = array()

--------------------------- conversao --------------------------------


+ parseInt(prompt ("num 2: ")) => int 

+ parseFloat(prompt ("num 2: ")) => float 

+ Number(prompt ("num 2: ")) => number

+ Não existe conversaão para booleano 

------------------------ push -------------------------------------

let time = []; 

for(let i = 0; i < 3; i++ ){

    time.push(prompt("Digite o time: "))  //  é usado para adicionar um ou mais elementos ao final de um array
}

time.pop();  = > tira o ultimo do vetor 

time.splice(i, 1); = > permite alterar o conteúdo do seu array removendo ou substituindo elementos existentes por novos elementos

console.log(times)

------------------------ forEach -----------------------

+ roda a quantidade de elementos do vetor 

paises = ["brasi", "uruguai", "china"]

paises.forEach(function(pais){               = > declaração da "variável"
	console.log(pais);			       = > vai ler cada elemento do vetor  
})


{
paises = ["brasi", "uruguai", "china"]

paises.forEach(function(pais){               = > declaração da "variável"
	if(pais == "china"){
	paises.splice( )
}
	console.log(pais);			       = > vai ler cada elemento do vetor  
})

}



{
paises = ["brasi", "uruguai", "china", "brasi"]
let qtd = 0;

paises.forEach(function(pais){               = > declaração da "variável"
	if(pais == "brasi"){
	qtd += 1;
}
	console.log(pais);			       = > vai ler cada elemento do vetor  
})
}

---------------------- aprender sobre filter() -----------------------