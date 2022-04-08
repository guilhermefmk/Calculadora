function soma(a,b,interface){
    return resultado(parseInt(a) + parseInt(b), interface);
}
function subtracao(a,b,interface){
    return resultado(parseInt(a) - parseInt(b), interface);
}
function divisao(a,b,interface){
    return resultado(parseInt(a) / parseInt(b), interface);
}
function multiplicacao(a,b,interface){
    return resultado(parseInt(a) * parseInt(b), interface);
}
function resultado(result) {
    interface.innerHTML = '<h1>O resultado é ' + result;
}

function verifica(){
    let operador = document.getElementById('op').value;
    let primeiroNumero = document.getElementById('1num').value;
    let segundoNumero = document.getElementById('2num').value;
    var interface = document.getElementById('interface');
    switch (operador) {
        case '+':
            soma(primeiroNumero, segundoNumero, interface);
            break;
        case '-':
            subtracao(primeiroNumero, segundoNumero, interface);
            break; 
        case '/':
            divisao(primeiroNumero, segundoNumero, interface);
            break; 
        case '*':
            multiplicacao(primeiroNumero, segundoNumero, interface);
            break;       
        default:
            print("Operador inválido");
            break;
    }
}


