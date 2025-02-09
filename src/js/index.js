const botao = document.getElementById('botao-de-envio');
const campos = document.querySelectorAll('input,textarea');
const mensagemDeAviso = document.querySelectorAll(".mensagem-de-aviso");
botao.addEventListener('click', (evento) => {

    evento.preventDefault();

    campos.forEach( (_,indice)=> {

        if (campos[indice].value == "" || campos[indice].value.trim() == "") {
            campos[indice].classList.add("campo-nao-preenchido");
            mensagemDeAviso[indice].classList.remove("invisivel");
        } else {
            campos[indice].classList.remove("campo-nao-preenchido");
            campos[indice].classList.add("campo-preenchido");
            mensagemDeAviso[indice].classList.add("invisivel")
        };
    });
});
