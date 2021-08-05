// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seu valores
// de entrada, sem efeitos colaterais observaveis

let qtdeExecucoes = 0

// Pura !
function somar(a, b) {
    qtdeExecucoes++ // efeito colateral observavel
    return a + b;
}

console.log(qtdeExecucoes)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(qtdeExecucoes)