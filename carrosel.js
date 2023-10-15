function solucao(sequencia) {
    let indice = 0;
    for(let item of sequencia){
        if(item === '>'){
            indice++;
        } else{
            indice--;
        }
        if (indice < 0){
            indice = 6;
        } else if (indice > 6){
            indice = 0;
        }
    }
    console.log(indice);
}

function processData(input) {
    solucao(input);
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
