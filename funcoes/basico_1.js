
let a = 4;
console.log(a);

// Function declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

//Function expression
const boaTarde = function () {
    console.log('Boa tarde!')
}

boaTarde()

function somar(a, b) {
    return a + b;
}

let resultado = somar(3, 4);
console.log(resultado);

resultado = somar(3, 4, 5, 6, 7, 8);
console.log(resultado);

resultado = somar(3);
console.log(resultado);

resultado = somar();
console.log(resultado);