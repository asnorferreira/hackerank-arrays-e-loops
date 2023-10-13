// Um time soma pontos ao decorrer das partidas durante o ano
// 3 pts - vitoria
// 1 pts - empate
// 0 pts - derrota
// Efetuar simulação de desempenho dos jogos
// Calcular a pontuação final do clube a depender dos resultados das partidas

// variável resultados = ['E', 'D', 'V']; (input)
// console.log(resultados); output => soma dos resultados

function solucao(resultados) {
    let pts = 0 // pts = pontos / atribui um valor a variável
    for (let i = 0; i < resultados.length; i++) { // cria um for para todos os jogos definidos
       if(resultados[i] === 'V'){
        pts += 3; // adiciona 3 para cada vitoria
       } else if(resultados[i] === 'E'){
        pts += 1; // adiciona 1 para cada derrota
       } else {
        pts += 0; // não tem variação do pts
       }
    }
    console.log(pts); // imprime o valor dos pontos
}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados); //imprime resultados
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