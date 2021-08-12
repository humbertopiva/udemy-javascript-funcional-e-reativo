const path = require('path');
const fn = require('./funcoes')

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

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir('-->'),
    fn.removerElementosSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeApenasNumero,
    agruparPalavras,
    fn.ordenarPorAtribNumerico('qtde', 'desc')
)

palavrasMaisUsadas(caminhoPasta).then(console.log)