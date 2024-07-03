const prompt = require ('prompt-sync')({sigint:true})

// pegar os dados do usuario
var numero1 = prompt('Digite o primeiro numero: ')
var numero2 = prompt('Digite o segundo numero: ')
console.log(`
    -*- Calculadora -*-
    1 - Soma
    2 - Subtracao
    3 - Multiplicacao
`)
var operação = prompt('Escolha uma operacao: ')
var resultado

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

if (typeof(numero1) == 'number' || typeof(numero2) == 'number') {
    //fazer a logica do switch
    switch(operação){
        case '1':
            resultado = numero1 + numero2
            break
        case '2':
            resultado = numero1 - numero2
            break
        case '3':
            resultado =  numero1 * numero2
            break
        case '4':
            if (numero1 == 0 || numero2 == 0){
                console.log('Erro: Divisão por zero!')
            } else {
                resultado =  numero1 / numero2
            }
            break
        case '5':
            resultado = (numero1 * numero2)/100
            break   
        default:
            console.log( "Operação invalida")
            resultado = undefined
            break
    }
    console.log(resultado)
} else {
    console.log('numero invalido')
}
