// let cores = []; 

// for(let i = 0; i < 4; i++ ){
//     cores.push(prompt("Digite o cores: "));  // altera o valor do vetor 
// }

// console.log(cores); 

// cores.pop();

// console.log(cores);

// cores.push("black");
// cores.push("yellow");

// console.log(cores);

// console.log(cores[0]);

// console.log();


let nomes = [];
let idades = [];

for (let i = 0; i < 4; i++) {
    nomes.push(prompt("Digite o nome: "));
}

for (let i = 0; i < 4; i++) {
    idades.push(prompt("Digite o idade: "));
}

// nomes.forEach(function(nome, i){
//     console.log(nome, i)
// })

// nomes.forEach(function(nome){
//     idades.forEach(function(idade){
//     console.log(nome, idade)
// })
// })

for (let i = 0; i < 4; i++) {
        nomes = nomes.filter(nome => nome.toLowerCase() !== "geraldo");
}

    console.log(nomes);

for (let i = 0; i < 4; i++) {
       if( idades[i] < 13 ) {
        nomes.push("Enzo");
       }
}

console.log(nomes);