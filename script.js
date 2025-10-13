const message = 'Digite seu e-mail: '
const message_element = document.getElementById('input_box')

//Função pra detecção dinâmica de e-mail
document.querySelector('#header').innerHTML = message
valid_email = document.getElementById('email_valido')
valid_email2 = document.getElementById('email_valido2')
//Separamos em dois elementos só para deixar a página mais bonita
valid_email.style.display = 'none'
valid_email2.style.display = 'none'
message_element.addEventListener('input', ({ target }) => {
    const valor = target.value;
    //Muitas pessoas já passaram por esse problema, então nada que um stackoverflow não consiga te ajudar a achar
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //Aqui, só pra ficar mais interessante, escrevi uma condição para detectar caso o usuário tenha começado a digitar. Que dá o feedback se o e-mail é válido ou não de forma dinâmica
    if (valor.length > 0) {
        valid_email.style.display = 'block';
        valid_email2.style.display = 'block';
    } else {
        valid_email.style.display = 'none';
        valid_email2.style.display = 'none';
    }

    if (regexEmail.test(valor)) {
        valid_email.textContent = "E-mail válido!";
        valid_email.style.color = "green";
        valid_email2.style.display = 'none';
    } else {
        valid_email.textContent = 'E-mail inválido!';
        valid_email2.textContent= 'O e-mail precisa estar no formato seu_email@seu_provedor.dominio';
        valid_email.style.color = "red";
        valid_email2.style.color = "red";
    }
});
