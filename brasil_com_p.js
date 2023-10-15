// música = 'Brasil com 'P'';
// todas as palvras da música começam com a letra 'P';
// compositor decidiu fazer músicas que comecem com as mesmas duas primeiras letras.
// dado um par de letras qualquer - imprima na tela as palavras que começam com essas duas primeiras letras.

// entrada: 3 variáveis:
// palavras: array de strings - contém palavras como base para busca - letras minusculas e sem acentos.
// primeiraLetra: contém uma string - caractere primeiro
// segundaLetra: contém uma string - caractere segundo

// saída: if true (imprimir as palvras que contém a primeiraLetra e a segundaLetra fornecida na entrada.)
// saída: imprimir uma palavra por linha
// saída: else console.log('NENHUMA')

function solucao(primeiraLetra, segundaLetra, palavras) {
    let fiscalizarLetra = false;
    for(let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        if(palavra.startsWith(primeiraLetra + segundaLetra)) {
            console.log(palavra);
            fiscalizarLetra = true;
        }
    }
    if (!fiscalizarLetra) {
        console.log('NENHUMA');
    }
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
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