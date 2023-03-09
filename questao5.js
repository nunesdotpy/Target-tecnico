/*5) Escreva um programa que inverta os caracteres de um string. 

IMPORTANTE: 

	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 

	b) Evite usar funções prontas, como, por exemplo, reverse; 
*/

const inverter = (string) => {
    var stringinvertida = "";
    var i = string.length - 1;

    for(i ; i >= 0; i--){
        stringinvertida += string[i];
    }

    return console.log(stringinvertida);
}

inverter('hello world');