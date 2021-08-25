const path = require('path');
const fn = require('./funcoes')
const { map } = require('rxjs/operators')

const caminhoPasta = path.join(__dirname, '..', 'dados');

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

function agruparPalavras(palavras) {
    
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1: 1
        acc[el] = { elemento: el, qtde}
        return acc;

    }, {}))
}


fn.lerDiretorio(caminhoPasta)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero()
    )
    .subscribe(console.log)
 
// fn.lerDiretorio(caminhoPasta)
//     .then(fn.elementosTerminadosCom('.srt'))
//     .then(fn.lerArquivos)
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor('\n'))
//     .then(fn.removerElementosSeVazio)
//     .then(fn.removerElementosSeIncluir('-->'))
//     .then(fn.removerElementosSeApenasNumero)
//     .then(fn.removerSimbolos(simbolos))
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor(' '))
//     .then(fn.removerElementosSeVazio)
//     .then(fn.removerElementosSeApenasNumero)
//     .then(agruparPalavras)
//     .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
//     .then(console.log);