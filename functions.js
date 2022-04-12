
function resultado(result) {
    var interface = document.getElementById('resultado');
    interface.innerHTML += '<h1>' + result + '</h1>';
}
function alterastring(add){
    let input = document.getElementById('calc');
    let len = input.length;
    if (add == "C"){
        input.value = "";
    }else if(add == "<"){
        input.value = input.value.slice(0, -1);
    }else{
        input.value += add;
    }
}
function verifica(){
    var string = document.getElementById('calc').value;
    resultado(eval(string));
}


