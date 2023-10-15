function solucao(precos) {
    let soma = 0;
    let menor = precos[0];
    for(let itemAtual of precos){
        soma += itemAtual;
        if(itemAtual < menor){
            menor = itemAtual;
        }
    }
    if(precos.length >= 5){
        console.log(soma - menor);
    } else{
        console.log(soma);
    }  
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});