// Desenvolvendo jogo da forca
// Descobrir a palavra escondida 
// Retornar o acerto quando o string for igual ao string escondido

// entrada de 2 strings (palpite do jogador && palavra a ser descoberta)
// palpite = toLowerCase() e sem acento. Composta por um caracter minúscula e sem acento
// input

// saída = quantidade de acertos do palpite
// EX: 'a' // palavra escondida = abelha; acertos = 2 (pois a string contém 2 strings a)


function solucao(palpite, palavra) {
    let acertos = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === palpite) {
      acertos++;
    }
  }

  console.log(acertos);
}

function processData(input) {
    const [palpite, palavra] = input.split(" ");
  	solucao(palpite, palavra);
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
