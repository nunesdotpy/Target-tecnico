/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

const Fibonacci = (num) => {
    var numfibonacci = [];
    numfibonacci[0] = 0;
    numfibonacci[1] = 1;
    var i;
    var ultimofibonacci;

    if(num == 0 || num == 1){
        return console.log(`${num} está presente na sequência de fibonacci!`)
    }else{
        for (i = 2; numfibonacci[i-1] < num; i++){
            numfibonacci[i] = numfibonacci[i - 2] + numfibonacci[i - 1];
            ultimofibonacci = numfibonacci[i];
        }

        if (num == ultimofibonacci){
            return console.log(`${num} está presente na sequência de fibonacci!`)
        }else{
            return console.log(`${num} não está presente na sequência de fibonacci!`)
        }
    }
}

Fibonacci(21);