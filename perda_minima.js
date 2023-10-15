// objetivo: minimizar perdas financeiras
// ação: comprar uma casa e 1 ano após vendê-la  e deve fazê-lo com prejuízo
// prejuízo: desvalorização do imóvel
// ex: preco=[20, 15, 8, 2, 12], preco[1] = 15 (comprou no segundo ano) e revendeu no preco[4] = 12 no quinto ano, ou seja, perda de 3
// imprimir a quantidade mínima de dinheiro perdido

// entrada: array de números inteiros de tamanho variado

// saída: interiro representando a perda mínima

function solucao(precos) {
    let menorPrejuizo = 99999999999;
    for(let i = 0; i < precos.length; i++) {
        for(let j = i + 1; j < precos.length; j++){
            const compra = precos[i];
            const venda = precos[j];
            const prejuizo = compra - venda;
            if (prejuizo > 0) {
                if(prejuizo < menorPrejuizo){
                    menorPrejuizo = prejuizo;
                }
            }
        }
    }
    console.log(menorPrejuizo);
}
function processData(input) {
    const precos = input.split(" ").map(x => parseInt(x));
      solucao(precos);
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
