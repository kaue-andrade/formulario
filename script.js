function mostrarMensagem() {
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;

    if (nome.length > 30){
        alert("Nome aceitável!");

        if (email.indexOf('@') !== -1 && email.indexOf('@') > 0 && (email.endsWith('.com') || email.endsWith('.edu'))){

            alert("E-mail válido!");

            var cpfRegex = /^\d{3}\.\d{3}.\d{3}-\d{2}$/;

            if (cpfRegex.test(cpf)){
                alert("CPF aceitável!");

                var mensagem = "Seja bem-vindo, " + nome + "!"
    
                alert(mensagem);

            } else{
                alert("CPF não aceito!");
                return;
    }
        } else {
            alert("E-mail não aceito!")
            return;
        }
    } else {
        alert("Nome não aceito!");
        return;
    }
}