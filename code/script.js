'use strict'

// VARIÁVEIS

const display = document.getElementById('numbers-box')

const numeros = document.querySelectorAll('[id*=tecla]') // PEGA TODOS OS ITENS QUE TEM A PALAVRA 'tecla' NO SEU ID

const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true

let operador    // GUARDA OPERADOR
let numeroAnterior  // GUARDA O NÚMERO ANTERIOR QUE FOI DIGITADO

// FUNÇÕES

const atualizarDisplay = (texto) => { // 'texto' é o parâmetro e recebe seu valor na função abaixo
    if (novoNumero){    // NÃO CONCATENA 
        display.textContent = texto
        novoNumero = false
    } else{
        display.textContent += texto

    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)   // MANDA PARA O DISPLAY O TEXTO DE CADA UMA DAS TECLAS PRESSIONADAS

const selecionarOperador = () =>{
    novoNumero = true   // AO CLICAR NO OPERADOR novoNumero PASSA A SER VERDADEIRO 
}
// EVENTOS

numeros.forEach(numero => 
    numero.addEventListener('click', inserirNumero) // PARA CADA BOTÃO, ADICIONA O addEvent
)

operadores.forEach(operador => 
    operador.addEventListener('click', selecionarOperador) // PARA CADA BOTÃO, ADICIONA O addEvent
)

//21,36