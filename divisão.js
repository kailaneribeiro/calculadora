function dividir(numero1, numero2){
    if (numero1||numero2 === 0){
    return 'Erro: Divisão por zero!'
    }else {
    return numero1 / numero2
    }
}
module.exports = {dividir}