let res = document.querySelector('.resultado')
let msgErro = 'Erro'
let msgExpLong = 'Expressão muito longa!'
// let ultDig = verificarUltimoDigito()

function mostrarNaTela(n) {

    if (res.value == '0') {

        if (n == '.' || n == '+' || n == '-') {
            res.value += n
        } else {
            res.value = n
        }

    } else if(res.value == msgErro || res.value == msgExpLong) {
        
        res.value = n

    } else if (n == '/' || n == '*' || n == '+' || n == '-' || n == '.') {
        
        if (n == '.') {
            verificarPonto(n)
        } else {
            verificarUltimoDigito(n)
        }

    } else {

        res.value += n

    }
}

function limparTela() {
    res.value = ''
}

function apagarCaracter() {
    let expressao = res.value

    if(expressao == msgErro || expressao == msgExpLong){
        res.value = ''
    } else {
        res.value = expressao.substring(0, expressao.length - 1)
    }
}

function calcular () {
    res.value = calcularVerificando(res.value)
}

function calcularVerificando (n) {
    let resultado

    if (n.length <= 18){
        try {
            resultado = new Function('return ' + n)()
        } catch (error) {
            resultado = msgErro
        }
    } else {
        resultado = msgExpLong
    }
    

    return resultado
}

function verificarPonto (n) {
    let expressao = res.value
    let ultItem = expressao.slice(-1)

    if (expressao.length >  0) {
        if (ultItem == '/' || ultItem == '*' || ultItem == '-' || ultItem == '+') {
            res.value = expressao + '0' + n
        } else {
            res.value += n
        } 
    } else {
        res.value += '0' + n
    }
    
}

function verificarUltimoDigito(n) {
    let expressao = res.value
    let ultItem = expressao.slice(-1)

    if (ultItem == '/' || ultItem == '*' || ultItem == '-' || ultItem == '+') {
        res.value = expressao.substring(0, expressao.length - 1) + n
    } else {
        res.value += n
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' || e.key == '0' || e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '.') {
        mostrarNaTela(e.key)
    } else if (e.key == 'Enter') {
        calcular()
    } else if (e.key == 'Backspace') {
        apagarCaracter()
    }
})