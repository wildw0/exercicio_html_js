const form = document.getElementById ('form-valores');
const ValorA = document.getElementById ('ValorA');
const ValorB = document.getElementById ('ValorB');
let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O formulário é válido, pois o número <b>${ValorA.value}</b> é menor que o <b>${ValorB.value}</b>`;
    const mensagemErro = `O formulário é inválido, pois o número <b>${ValorA.value}</b> é maior que o <b>${ValorB.value}</b>`;
    
    formEValido = (ValorB.value > ValorA.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector ('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'
        ValorA.style.border = '1px solid black';
        ValorB.style.border = '1px solid black';
        document.querySelector ('.success-message').style.display = 'block';

    } else {
        const containerMensagemErro = document.querySelector ('.error-message')
        ValorA.style.border = '1px solid red';
        ValorB.style.border = '1px solid red';
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block'
        document.querySelector ('.error-message').style.display = 'block';
    }
})

ValorA.addEventListener, ValorB.addEventListener ('keyup', function(e) {
    console.log(e.target.value);
    formEValido = (e.target.value);

    if (!formEValido) {
        ValorA.classList.add('error')
        ValorB.classList.add('error')
        document.querySelector ('.error-message').style.display = 'block';

    } else {
        ValorA.classList.remove('error');
        ValorB.classList.remove('error');
        document.querySelector ('.error-message').style.display = 'none';
    }
});