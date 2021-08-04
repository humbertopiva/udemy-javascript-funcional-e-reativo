const path = require('path');
const fn = require('./funcoes')

const caminhoPasta = path.join(__dirname, '..', 'legendas');

fn.lerDiretorio(caminhoPasta)
    .then(el => fn.elementosTerminadosCom(el, '.srt'))
    .then(ArquivosSRT => fn.lerArquivos(ArquivosSRT))
    .then(conteudo => conteudo.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(linhas => fn.removerSeVazio(linhas))
    .then(linhas => fn.removerSeIncluir(linhas, '-->'))
    .then(linhas => fn.removerSeApenasNumero(linhas))
    .then(console.log);