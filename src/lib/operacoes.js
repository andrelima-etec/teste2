function somar(numero1, numero2) {
    const resultado = Number(numero1) + Number(numero2);

    return resultado;
}

function subtrair(numero1, numero2) {
    const resultado = Number(numero1) - Number(numero2);

    return resultado;
}

function multiplicar(numero1, numero2) {
    const resultado = Number(numero1) * Number(numero2);

    return resultado;
}

function dividir(numero1, numero2) {
    const resultado = Number(numero1) / Number(numero2);

    return resultado;
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}