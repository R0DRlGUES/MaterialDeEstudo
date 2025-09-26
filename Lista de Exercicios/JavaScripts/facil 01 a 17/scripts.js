console.log("Exercício 1 - Soma de A + B");
function SomaAB(a,b){
    return a + b;
}
console.log(SomaAB(2,3));

console.log("  ");
console.log("Exercício 2 - Verificar número par ou ímpar");

function VerificarParImpar(num){
    if(num % 2 === 0){
        return "Par";
    }else{
        return "Ímpar";
    }
}
console.log(VerificarParImpar(4));
console.log(VerificarParImpar(7));

console.log("  ");
console.log("Exercício 3 - Contar de 1 a 10");
function Contar(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
Contar();

console.log("  ");
console.log("Exercício 4 - Converter Celsius para Fahrenheit");
function CelsiusParaFahrenheit(celsius){
    return (celsius * 1.8) + 32;
}
console.log(CelsiusParaFahrenheit(35)+"°F");
console.log(CelsiusParaFahrenheit(15)+"°F");
console.log(CelsiusParaFahrenheit(36)+"°F");
console.log(CelsiusParaFahrenheit(22)+"°F");

console.log("  ");
console.log("Exercício 5 - Verificar se uma palavra é palíndromo");
function VerificarPalindromo(palavra){
    let palavraFormatada = palavra.toLowerCase();
    //  split = vai transformar a string em um array
    // reverse = vai inverter o array
    // join = vai transformar o array em uma string
    let palavraInvertida = palavraFormatada.split('').reverse().join('');
    if(palavraInvertida === palavraFormatada){
        return 'é um palíndromo';
    }else{
        return 'não é um palíndromo';
    }
}
console.log("arara " + VerificarPalindromo("arara"));
console.log("banana " + VerificarPalindromo("banana"));
console.log("Ana " + VerificarPalindromo("Ana"));
console.log("Ame a ema " + VerificarPalindromo("Ame a ema"));

console.log("  ");
console.log("Exercício 6 - Calcular o quadrado de um número");
function CalcularQuadrado(num){
    return num * num;
    //  outras manerias de fazer
    //return num ** 2;
    //return Math.pow(num, 2);
};
console.log(CalcularQuadrado(4));
console.log(CalcularQuadrado(5));
console.log(CalcularQuadrado(6));

console.log("  ");
console.log("exercício 7 - Retornar o maior de dois números");
function RetornarMaior(num1, num2){
    return Math.max(num1,num2);
};
console.log(RetornarMaior(10,5));
console.log(RetornarMaior(3,8));
console.log(RetornarMaior(7,7));

console.log("  ");
console.log("exercício 8 - Verificar se um número é positivo, negativo ou zero");
function VerificarNumero(num){
    if(0 < num){
        return "Positivo";

    }else if(num < 0){
        return "Negativo";
    }else{  
        return "Zero";
    };
};
console.log(VerificarNumero(10));
console.log(VerificarNumero(-5));
console.log(VerificarNumero(0));
console.log(VerificarNumero(43));
console.log(VerificarNumero(-763));
console.log(VerificarNumero(0));


console.log("  ");
console.log("exercício 9 - Calcular a média de três números");
function CalcularMedia(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
};
console.log(CalcularMedia(5,7,9));
console.log(CalcularMedia(10,15,20));
console.log(CalcularMedia(3,6,9));

console.log("  ");
console.log("exercício 10 - Crie uma função que receba uma palavra e um número, e retorne a palavra repetida esse número de vezes.  ");
function RepetirPalavra(palavra, num){
    return palavra.repeat(num);
};
console.log(RepetirPalavra('Jacare', 10));

console.log("  ");
console.log("exercício 11 - Crie uma função que receba uma string e retorne seu comprimento (quantidade de caracteres).");
function RetornarComprimentoString(srt){
    return srt.length;
};
console.log(RetornarComprimentoString("Olá, mundo!") + " caracteres");
console.log(RetornarComprimentoString("JavaScript é divertido.") + " caracteres");
console.log(RetornarComprimentoString("1234567890") + " caracteres");

console.log("  ");
console.log("exercício 12 - Crie uma função que receba uma palavra e retorne ela com a primeira letra em maiúscula.  ");
function PrimeiraLetraMaiuscula(palavra){
//  retorna o caractere de uma string na posição (índice) especificada.
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
};
console.log(PrimeiraLetraMaiuscula("javascript"));

console.log("  ");
console.log("exercício 13 - Inverter uma string");
function InverterString(str){
    return str.split('').reverse().join('');
}
console.log(InverterString("Hello, world!"));
console.log(InverterString("JavaScript"));
console.log(InverterString("12345"));

console.log("  ");  
console.log("exercício 14 - Verificar se um número está entre 10 e 50");
function VerificarNumeroEntre10e50(num){
    return num >= 10 && num <= 50;
}   
console.log(VerificarNumeroEntre10e50(25)); // true
console.log(VerificarNumeroEntre10e50(5));

console.log("  ");  
console.log("exercício 15 - Criar uma função que imprima a tabuada do 5");
function TabuadaDo5(){
    for(let i=1; i<=10; i++){
        console.log(`5 x ${i} = ${5*i}`);
    }
}
TabuadaDo5();

console.log("  ");  
console.log("exercício 16 - Verificar se um número é primo");
function VerificarNumeroPrimo(num){
    // Verifica se o número é menor que 2 (0 e 1 não são primos)
    if (num < 2) return num + " não é primo";
    // Loop para testar se o número é divisível por qualquer valor entre 2 e a raiz quadrada dele
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Se for divisível, não é primo
        if (num % i === 0) {
            return num + " não é primo";
        }
    }
    // Se passar por todos os testes e não for divisível, então é primo
    return num + " é primo";
}
console.log(VerificarNumeroPrimo(11));
console.log(VerificarNumeroPrimo(4));
console.log(VerificarNumeroPrimo(17));
console.log(VerificarNumeroPrimo(20));

console.log("  ");  
console.log("exercício 17 - Somar todos os números de um array");
function SomarArray(arr){
    let soma = 0;
    for(let i =0; i < arr.length; i++){
        soma += arr[i];
    }
    return soma;
}
console.log(SomarArray([1,2,3,4,5,6,7,8,9,10]));












































































