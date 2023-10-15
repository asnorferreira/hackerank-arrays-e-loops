// competição de tiro ao alvo, possui competidores e cada possui uma quantidade mínima de disparos.
// o ponto por disparo vai de 0 a 100.
// if 3 acertos for maior que 70 então aprovado // for

// entrada: array de números (disparos) que possui a pontuação do disparo

// saída: if aprovado => console.log(quantidade de disparos acima de 70 pts)
// saída: else => console.log('ELIMINADO')
function solucao(disparos) {
    let acertos = 0;
    for (let i = 0; i < disparos.length; i++){
        if (disparos[i] > 70){
            acertos ++;
        }
    }
    if (acertos >= 3){
        console.log(acertos);
    } else {
        console.log('ELIMINADO');
    }
}

function processData(input) {
    solucao(input.split(' ').map(x => Number(x)).filter(x => x));
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