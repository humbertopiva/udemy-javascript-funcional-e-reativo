// Funções que operam em outras funções
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order function

function executar(fn, ...params) {
    return function(textoInicial) {
        return `${textoInicial} ${fn(...params)}!`
    }
}

function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}

const r1 = executar(somar, 4, 5, 6)('O resultado da some é')
const r2 = executar(multi, 30, 40)('O resultado da multiplicação é')

console.log(r1, r2)