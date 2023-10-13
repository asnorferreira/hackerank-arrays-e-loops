// Competição de Surf
// Manobra julgada por juízes, ou seja, calcular a nota da manobra tiramos a maior e a menor, calculando a média aritimética das restantes.
// Array de números chamado notas
// Imprimir a notal final 

function solucao(notas) {
    let menor = notas[0];
    let maior = notas[0];
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < menor) {
            menor = notas[i];
        }
        if (notas[i] > maior) {
            maior = notas[i];
        }
        somaNotas += notas[i];
    }
    const notaFinal = (somaNotas - menor - maior) / (notas.length - 2);
    console.log(notaFinal);
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