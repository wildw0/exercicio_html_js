const form = document.getElementById ('form-valores');
let ValorA = document.getElementById ('ValorA');
let ValorB = document.getElementById ('ValorB');
let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const containerMensagemSucesso = document.querySelector ('.success-message')
    const containerMensagemErro = document.querySelector ('.error-message')
    
    const mensagemSucesso = `O formulário é válido, pois o número <b>${ValorA.value}</b> é menor que o <b>${ValorB.value}</b>`;
    const mensagemErro = `O formulário é inválido, pois o número <b>${ValorA.value}</b> é maior que o <b>${ValorB.value}</b>`;
    
    formEValido = (Number(ValorB.value)>Number(ValorA.value))
    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'
        ValorA.style.border = '1px solid black';
        ValorB.style.border = '1px solid black';
        document.querySelector ('.success-message').style.display = 'block';
        document.querySelector ('.error-message').style.display = 'none';

    } else {
        ValorA.style.border = '1px solid red';
        ValorB.style.border = '1px solid red';
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block'
        document.querySelector ('.error-message').style.display = 'block';
        document.querySelector ('.success-message').style.display = 'none';
    }
})