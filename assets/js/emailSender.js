function sendEmail() {
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("subject").value;
    var mensagem = document.getElementById("message").value;
    var corpoEmail = "Nome: " + nome + "%0D%0A" + "E-mail: " + email + "%0D%0A" + "Assunto: " + assunto + "%0D%0A" + "Mensagem:%0D%0A" + mensagem;
    window.location.href = "mailto:iqbal@transnur.co.mz?subject=" + assunto + "&body=" + corpoEmail;
}