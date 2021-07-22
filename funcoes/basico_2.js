function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function() {
    console.log('Boa tarde!')
}

function executarQualquerCoisa(fn) {
    if(typeof fn == 'function') {
        fn()
    }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);