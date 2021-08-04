const fn = require('./tentativa-funcoes')
const path = require('path');

const caminhoPasta = path.join("d:/Arquivos/Udemy/CURSO_RX_JS/legendas");

const retornoArquivos = fn.lerPasta(caminhoPasta).then(fn.separarArquivosSrt);

retornoArquivos.then(fn.contruirCaminhos)
    .then(fn.lerTodosOsCaminhos)
    .then(fn.unificarArray)
    .then(fn.contarTodasAsPalavras)
    .then(console.log)