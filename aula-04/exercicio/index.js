let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validador();
});

function validador() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;

    console.log(nome, email, cpf);
}