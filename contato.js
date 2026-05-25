const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    const nome = document.querySelector('input[type="text"]').value;

    const email = document.querySelector('input[type="email"]').value;

    const telefone = document.querySelector('input[type="tel"]').value;

    const ajuda = document.querySelector("select").value;

    const descricao = document.querySelector("textarea").value;

    if (nome.trim() === "") {

        alert("Digite seu nome.");

        return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {

        alert("Digite um email válido.");

        return;
    }

    if (telefone.trim().length < 8) {

        alert("Digite um telefone válido.");

        return;
    }

    if (ajuda === "") {

        alert("Selecione um tipo de ajuda.");

        return;
    }

    if (descricao.trim() === "") {

        alert("Descreva sua situação.");

        return;
    }

    alert("Formulário enviado com sucesso!");

    formulario.reset();

});