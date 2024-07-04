const prompt = require ('prompt-sync')({sigint:true})

// pegar os dados do usuario
var numero1 = prompt('Digite o primeiro numero: ')
var numero2 = prompt('Digite o segundo numero: ')
console.log(`
    -*- Calculadora -*-
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão
    5 - Porcentagem
`)
var operação = prompt('Escolha uma operacao: ')
var resultado

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)
//fazer a logica das operações no switch
if (!isNaN(numero1) && !isNaN(numero2)) {
    switch (operação) {
        case '1':
            resultado = numero1 + numero2
            console.log(` ${numero1} + ${numero2} = `)
            break;
        case '2':
            resultado = numero1 - numero2
            console.log(` ${numero1} - ${numero2} = `)
            break;
        case '3':
            resultado = numero1 * numero2
            console.log(` ${numero1} X ${numero2} = `)
            break;
        case '4':
            if (numero1 ===0 || numero2 ===0) {
                console.log(" Erro, divisão por 0! ")        
            }else{
                resultado = numero1/numero2
                console.log(` ${numero1} / ${numero2} = `)
            }
            break;
        case '5':
            resultado = numero1 * numero2/100
            console.log( `${numero1} % ${numero2} = `)
            break;
        default:
            console.log(" OPERAÇÃO INVALIDA. ")
            break;
}
    console.log(resultado)
} else {
    console.log('numero invalido')
}
