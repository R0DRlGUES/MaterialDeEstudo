console.log(" ");
console.log("exercício 18 - Contar vogais em uma string");
function ContarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for(let i = 0; i < str.length; i++){
        if(vogais.includes(str[i].toLowerCase())){
            contador++;
        };
    };
    return str + " tem " + contador + " vogais.";
};
console.log(ContarVogais("xablito"));


console.log(" ");
console.log("exercício 19 - Fibonacci até N");
const seq = [0,1];
function FibonacciAteN(n) {
    for(let i = 2; i < n; i++){// começa no 2 porque [0,1] já existem
        let proximo = seq[i - 1] + seq[i - 2];// soma os dois anteriores
        seq.push(proximo);
    }
    return seq;
}

console.log(FibonacciAteN(10)+" Era a porra do 2, caralho!");

console.log(" ");
console.log("exercício 20 - Verificar ano bissexto");
function VerificarAnoBissexto(ano) {
    if(ano % 4 === 0 && ano % 100 != 0 || ano % 400 === 0){
        return ano + " é bissexto.";

    }else{
        return ano + " não é bissexto.";
    };
};

console.log(VerificarAnoBissexto(2024));
console.log(VerificarAnoBissexto(2025));
console.log(VerificarAnoBissexto(2026));
console.log(VerificarAnoBissexto(2027));
console.log(VerificarAnoBissexto(2028));


console.log(" ");   
console.log("exercício 21 - Remover elementos duplicados de um array");
const array1 = ["Ana", "Pedro", "João", "Maria", "Lucas"];
const array2 = ["Paulo", "Lucas", "João", "Carla", "Mariana"];

const arrayNum1 = [1, 3, 5, 7, 9, 11];
const arrayNum2 = [2, 3, 6, 9, 12, 15];

// function RemoverDuplicados(arr1, arr2) {
//     for( let i = 0;i < arr2.length; i++){
//         if (arr1.includes(arr2[i])){
//             arr1.pop(arr1[i]);
//             arr2.pop(arr2[i]);
//         };
//     };
//     return arr1 + " e " + arr2 + " sem duplicados.";
// };
// console.log(RemoverDuplicados(array1, array2));
// console.log(RemoverDuplicados(arrayNuj1, arraynum2));
function RemoverDuplicados(arr1, arr2) {
    const array1SemDuplicados = arr1.filter(item => !arr2.includes(item));
    const array2SemDuplicados = arr2.filter(item => !arr1.includes(item));
    return{
        arr1: array1SemDuplicados,
        arr2: array2SemDuplicados
    };
}

console.log(RemoverDuplicados(array1, array2));
console.log(RemoverDuplicados(arrayNum1, arrayNum2));

























