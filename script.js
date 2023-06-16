/*Alunos:

Antonio Carlos Borges de Souza;
Kauê Andrade dos Santos.

*/

function mostrarMensagem() {
    
    // Criação das variáveis

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;

    // Verificação do nome

    if (nome.length <= 30){
        alert("Nome aceitável!");

        // Verificação de e-mail

        if (email.indexOf('@') !== -1){

            var partesEmail = email.split('@');

            if (email.indexOf('@') > 0) {partesEmail.length === 2

                if (partesEmail.length === 2){
        
                    if ((email.endsWith('.com') || email.endsWith('.edu'))){
        
                        alert("E-mail válido!");
                
                    } else {
                        alert("E-mail não aceito! Não há .com e nem .edu no final do e-mail digitado.")
                        return;
                    }
            
                } else {
                    alert("E-mail não aceito! Há mais de um @");
                    return;
                }
            } else {
                alert("E-mail não aceito! O @ aparece como primeiro caractere.")
                return;
            }
        } else {
            alert("E-mail não aceito! É necessário o @")
            return;
        }
    
        // Verificação de CPF usando Regex
    
        var cpfRegex = /^\d{3}\.\d{3}.\d{3}-\d{2}$/;

        if (cpfRegex.test(cpf)){
            alert("CPF válido!");
    
            var mensagem = "Seja bem-vindo, " + nome + "!"
    
            alert(mensagem);
    
        } else{
            alert("CPF não aceito! Utilize apenas números no formato NNN.NNN.NNN-NN");
            return;
        }
    } else {
        alert("Nome não aceito! Precisa ter no máximo 30 caracteres.");
        return;
    }
}