const form = document.querySelector('.form')
const nome = document.querySelector('.input-nome')
const email = document.querySelector('.input-email')
const senha = document.querySelector('.input-senha')
const reSenha = document.querySelector('.input-reSenha')
const validacaoEmail = document.querySelector('.validacao-email')
//icons
const iconSenha = document.querySelector('.icon-senha')
const iconReSenha = document.querySelector('.icon-reSenha')
//labels
const labelNome = document.querySelector('.label-nome')
const labelEmail = document.querySelector('.label-email')
const labelSenha = document.querySelector('.label-senha')
const labelReSenha = document.querySelector('.label-reSenha')
//check
let passCheck = false
const patternSenha = senha.getAttribute('pattern')

email.addEventListener('input', () => {
    emailCheck(labelEmail)
})
senha.addEventListener('input', () => {
    inputValidacaoSenha(labelSenha, senha)
})
reSenha.addEventListener('input', () => {
    inputValidacaoSenha(labelReSenha, reSenha)
})
iconSenha.addEventListener('click', () => {
    if (senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text')
        iconSenha.textContent = 'visibility'
    } else {
        senha.setAttribute('type', 'password')
        iconSenha.textContent = 'visibility_off'
    }
})

iconReSenha.addEventListener('click', () => {
    if (reSenha.getAttribute('type') == 'password') {
        reSenha.setAttribute('type', 'text')
        iconReSenha.textContent = 'visibility'
    } else {
        reSenha.setAttribute('type', 'password')
        iconReSenha.textContent = 'visibility_off'
    }
})

function emailCheck(label) {
    var pattern = /\S+@\S+\.\S+/

    if (pattern.test(email.value)) {
        label.classList.remove('red')
        return true;
    }
    else {
        label.classList.add('red')
        return false;
    }
}
function inputValidacaoSenha(label, input) {
    let regSenha = new RegExp(patternSenha);
    if (regSenha.test(input.value)) {
        label.classList.remove('red')
        return true;
    } else {
        label.classList.add('red')
        return false;
    }

}
function validacaoAmbasSenhas() {
    if (senha.value === reSenha.value) {
        passCheck = true
        return true
    }
    else {
        return false;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    emailCheck()
    validacaoAmbasSenhas()
    if (passCheck === true) {
        alert('all set')
        setTimeout(() => {
            window.location.reload()
        }, 1500)
    }
})