
function resultado(result) {
    var interface = document.getElementById('resultado');
    interface.innerHTML = result;
}
function alterastring(add){
    let input = document.getElementById('calc');
    let len = input.length;
    var interface = document.getElementById('resultado');
    if (add == "C"){
        input.value = "";
        interface.innerHTML = '0';
    }else if(add == "<"){
        input.value = input.value.slice(0, -1);
    }else{
        input.value += add;
    }
}
function verifica(){
    var string = document.getElementById('calc').value;
    resultado(eval(string).toFixed(3));
}


