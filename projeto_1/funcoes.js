const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {

    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho);
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos);
        } catch(e) {
            reject(e)
        }
    })
}

function lerArquivo(caminho) {
    
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch(e) {
            reject(e)
        }
    })
}

function lerArquivos(caminhos) {

    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(padraoTextual) {

    return function(arquivos) {
        
        return arquivos.filter(el => el.endsWith(padraoTextual));
    }
}

function removerElementosSeVazio(array) {
    return array.filter(el => el.trim())
}

function removerElementosSeIncluir(padraoTextual) {
    return function(array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerElementosSeApenasNumero(array) {
    return array.filter(el => {
        const num = parseFloat(el.trim())

        return num !== num;
    })
}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(el => {

            let textSemSimbolo = el;

            simbolos.forEach(simbolo => {
                textSemSimbolo = textSemSimbolo.split(simbolo).join('')
            })

            return textSemSimbolo;
        })
    }
}

function mesclarElementos(array) {
    return array.join(' ');
}

function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo);
    }
}

function ordenarPorAtribNumerico(attr, ordem = 'asc') {
    return function(array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    removerElementosSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    ordenarPorAtribNumerico
}