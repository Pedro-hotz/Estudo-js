let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validarForm();
});

function validarForm() {
    let nome = document.getElementById("nome").value;
    let inputEmail = document.getElementById("email").value;
    let inputIdade = document.getElementById("idade");

    let indArroba = inputEmail.value.indexOf("@");
    let indPonto = inputEmail.value.lastIndexOf(".");

    let rock = document.getElementById("rock").checked;
    let pop = document.getElementById("pop").checked;

    if (nome.length < 3) {
        alert("Nome deve ter pelo menos 3 caracteres.");
    } else if (indArroba == -1 || indPonto == -1) {
        alert("Email inválido.");
    } else if (Number(inputIdade.value) <= 0 || Number(inputIdade.value) > 100) {
        alert("Idade inválida.");
    } else if (!rock.checked && !pop.checked) {
        alert("Marque ao menos uma opção.");
    }
    else {
        alert("Formulário enviado com sucesso!");
    }
}