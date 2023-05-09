'use strict'

// VARIÁVEIS

const display = document.getElementById('numbers-box')

const numeros = document.querySelectorAll('[id*=tecla]') // PEGA TODOS OS ITENS QUE TEM A PALAVRA 'tecla' NO SEU ID

const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true

let operador    // GUARDA OPERADOR
let numeroAnterior  // GUARDA O NÚMERO ANTERIOR QUE FOI DIGITADO

// FUNÇÕES

const operacaoPendente = () => operador != undefined

const calcular = () =>{
    if (operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent)
        novoNumero = true

       if (operador == '+'){
            atualizarDisplay(numeroAnterior + numeroAtual)
          } else if (operador == '-'){
            atualizarDisplay(numeroAnterior - numeroAtual)
        } else if (operador == 'x'){
            atualizarDisplay(numeroAnterior * numeroAtual)
        } else if (operador == '/'){
            atualizarDisplay(numeroAnterior / numeroAtual)
        }
    }
    
}

const atualizarDisplay = (texto) => { // 'texto' é o parâmetro e recebe seu valor na função abaixo
    if (novoNumero){    // NÃO CONCATENA 
        display.textContent = texto
        novoNumero = false
    } else{
        display.textContent += texto

    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)   // MANDA PARA O DISPLAY O TEXTO DE CADA UMA DAS TECLAS PRESSIONADAS

const selecionarOperador = (evento) =>{
    if(!novoNumero){
        calcular()

        novoNumero = true   // AO CLICAR NO OPERADOR novoNumero PASSA A SER VERDADEIRO 
        operador = evento.target.textContent    // ARMAZENA EM UMA VARIÁVEL O OPERDOR DA CONTA
        numeroAnterior = parseFloat(display.textContent)   // ARMAZENA O NÚMERO)
    }

}

const resetDisplay = ()=>{
    display.textContent = ('')
    operador = undefined
    novoNumero = true
    numeroAnterior = undefined
}

const ativarIgual = () =>{
    calcular()
    operador = undefined    // AO CLICAR EM OUTROS OPERADORES NÃO CALCULA MAIS
}

const removerUltimo = () => display.textContent = display.textContent.slice(0, -1)

// FUNÇÕES DO BOTÃO DE DECIMAL

const existeDecimal = () => display.textContent.indexOf('.') != -1
const existeValor = () => display.textContent.length > 0

const addDecimal = () =>{
    if(!existeDecimal()){
        if(existeValor()){
            atualizarDisplay('.')
        }else{
            atualizarDisplay('0.')
        }
    }
}

// EVENTOS

numeros.forEach(numero => 
    numero.addEventListener('click', inserirNumero) // PARA CADA BOTÃO, ADICIONA O addEvent
)

operadores.forEach(operador => 
    operador.addEventListener('click', selecionarOperador) // PARA CADA BOTÃO, ADICIONA O addEvent
)

document.querySelector('#reset').addEventListener('click', resetDisplay)

document.querySelector('#igual').addEventListener('click', ativarIgual)

document.querySelector('#del').addEventListener('click', removerUltimo)

document.querySelector('#decimal').addEventListener('click', addDecimal)
