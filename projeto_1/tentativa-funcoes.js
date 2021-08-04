const fs = require('fs');

function lerPasta(caminho) {

    return new Promise(resolve => {
        resolve(fs.readdirSync(caminho))
    })
}

function separarArquivosSrt(arrayDeArquivos) {

    let temp = []

    return new Promise(resolve => {
        arrayDeArquivos.map(function(arquivo){

            if(arquivo.includes('.srt')){
                temp.push(arquivo);
            }
            
        })

        resolve(temp);
    })
}


function lerArquivo(caminho) {

    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString());
        })
    })
}

function separarEmArray(array) {

    return new Promise(resolve =>{
        const temp = array.split(/\r?\n/)
        resolve(temp)
    })
}

function retirarArrayVazia(array) {

    return new Promise(resolve => {
        let temp = [];

        array.map(function (linha) {
            if(linha !== "") temp.push(linha);
        })

        resolve(temp)
    })
}

function tirarCSSCode(array) {

    return new Promise(resolve => {
        let temp = []

        array.map(function(linha) {
            if(!linha.includes('<font color="')){
                temp.push(linha)
            }
        })

        resolve(temp);
    })
}

function separarDosEspacos(array) {
    let temp = [];

    return new Promise(resolve =>{

        array.map(function(linha) {

            temp.push(linha.split(' '))
        })

        resolve(temp);
    })
}

function unificarArray(array) {
    let temp = [];

    return new Promise(resolve =>{

        array.map(function(linha) {

            linha.map(function(palavra){

                temp.push(palavra)
            })
        })

        resolve(temp);
    })
}

function retirarTraco(array) {

    return new Promise(resolve => {
        let temp = []

        array.map(function(linha) {
            if(!linha.includes('-')){
                temp.push(linha)
            }
        })

        resolve(temp);
    })
}

function retirarLixo(array) {

    return new Promise(resolve => {
        let temp = []

        array.map(function(linha) {
            temp.push(linha.replace("</i>", '').replace("<i>", ''))
        })

        resolve(temp);
    })
}

function explodirArray(array) {

    return new Promise(resolve => {
        let temp = []

        array.map(function(linha) {
            temp.push(linha.split(""))
        })

        resolve(temp);
    })
}

function juntarArray(array) {

    return new Promise(resolve => {
        let temp = []

        array.map(function(linha) {

            temp.push(linha.join(""));
        })

        resolve(temp);
    })
}

function removerChar(array, char) {

    return new Promise(resolve => {
        let temp = []

        array.map(function(subArray) {
            temp2 = []

            subArray.map(function(unidade) {

                if(unidade !== char) temp2.push(unidade);
            })

            temp.push(temp2);
        })

        resolve(temp);
    })
}

function retirarN(array) {

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    return new Promise(resolve => {
        let temp = []

        array.map(function(subArray) {
            temp2 = []

            subArray.map(function(unidade) {

                if(!isNumeric(unidade)) temp2.push(unidade);
            })

            temp.push(temp2);
        })

        resolve(temp);
    })
}

function deixarMaiuscula(array) {

    return new Promise(resolve => {
        let temp = []

        array.map(function(palavra) {
            
            temp.push(palavra.toUpperCase())
        })

        resolve(temp);
    })
}

function lerUmArquivo(caminho) {

    return new Promise(function(resolve) {
        const arrayComPalavras =
        lerArquivo(caminho)
            .then(separarEmArray)
            .then(retirarArrayVazia)
            .then(tirarCSSCode)
            .then(separarDosEspacos)
            .then(unificarArray)
            .then(retirarTraco)
            .then(retirarLixo)
            .then(explodirArray)
            .then(array => removerChar(array, "?"))
            .then(array => removerChar(array, '"'))
            .then(array => removerChar(array, "."))
            .then(array => removerChar(array, "["))
            .then(array => removerChar(array, "]"))
            .then(array => removerChar(array, "♪"))
            .then(array => removerChar(array, ":"))
            .then(array => removerChar(array, "!"))
            .then(array => removerChar(array, ","))
            .then(array => removerChar(array, "﻿"))
            .then(retirarN)
            .then(juntarArray)
            .then(retirarArrayVazia)
            .then(deixarMaiuscula)

        resolve(arrayComPalavras);
    })
    
}

function contruirCaminhos(array) {

    let temp = []
    
    return new Promise(resolve => {
        

        array.map(function(caminho){

            temp.push(`d:/Arquivos/Udemy/CURSO_RX_JS/legendas/${caminho}`)
        })

        resolve(temp);
    })
}

function lerTodosOsCaminhos(caminhos) {

    return Promise.all(
        caminhos.map(el => lerUmArquivo(el))
    )
}

function contagemDePalavras(array, key) {
    let contador = 0;

    array.map(el => {
        if(el == key) {
            contador = contador + 1;
        }
    })

    const obj = {
        word: key,
        count: contador
    }

    return obj;
}

function uniqueWordArray(array) {
    const unique = [...new Set(array)];

    return unique;
}

function contarTodasAsPalavras(array) {

    const allWords = array;
    const unique = uniqueWordArray(array);
    let result = [];

    unique.map(el => {
        result.push(contagemDePalavras(allWords, el))
    })

    return result;
}


module.exports = {
    lerArquivo, 
    separarEmArray, 
    retirarArrayVazia, 
    tirarCSSCode, 
    separarDosEspacos, 
    unificarArray, 
    retirarTraco, 
    explodirArray, 
    juntarArray, 
    removerChar,
    retirarN,
    retirarLixo,
    deixarMaiuscula,
    lerPasta,
    separarArquivosSrt,
    lerUmArquivo,
    contruirCaminhos,
    lerTodosOsCaminhos,
    contagemDePalavras,
    uniqueWordArray,
    contarTodasAsPalavras 
}