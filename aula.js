let cores = []; 

for(let i = 0; i < 4; i++ ){
    cores.push(prompt("Digite o cores: "));  // altera o valor do vetor 
}

console.log(cores); 

cores.pop();

console.log(cores);

cores.push("black");
cores.push("yellow");

console.log(cores);

console.log(cores[0]);

console.log();