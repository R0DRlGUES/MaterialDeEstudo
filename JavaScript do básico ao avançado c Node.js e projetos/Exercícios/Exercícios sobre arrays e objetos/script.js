console.log("Ex 1 ------------------------------------------------------------------------------------");
const arr = [1,2,3,4];
console.log(arr[0]+" "+arr[2]+" "+arr[3]);

console.log("Ex 2 ------------------------------------------------------------------------------------");
let array1 = [1,2];
let array2 = [1,2,3,4];

console.log(array1.length);
console.log(array2.length);

console.log("Ex 3 ------------------------------------------------------------------------------------");
let onibus = {
    rodas: 8,
    limitePassageiros:40,
    portas:2
};
console.log(onibus.rodas);
console.log(onibus.limitePassageiros);
console.log(onibus.portas);

console.log("Ex 4 ------------------------------------------------------------------------------------");

onibus.janela = 20;
delete onibus.rodas;

console.log(onibus.rodas);
console.log(onibus);

console.log("Ex 5 ------------------------------------------------------------------------------------");

let arreyNomes = ["pedro","joão","lucas","carlos","andre"];
if(arreyNomes.includes("pedro")){
    console.log("Ala ta ali");
}else{
    console.log("ta não");
}

console.log("Ex 6 ------------------------------------------------------------------------------------");
const frutas = ["maçã", "banana", "uva", "laranja", "pera", "melancia", "kiwi"];
const numeros = [1, 2, 3];

function validaTamanhoArray(arr1){
    if(arr1.length > 5){
        console.log("muitos elementos");
    }else if (arr1.length < 5){
        console.log("Poucos elementos")
    }
}
validaTamanhoArray(frutas);
validaTamanhoArray(numeros);

console.log("Ex 7 ------------------------------------------------------------------------------------");

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
};

console.log("Ex 8 ------------------------------------------------------------------------------------");

let JSON = {
    "nome": "Pedro",
    "idade": 25,
    "cidade": "Cascavel",
    "email": "pedro@email.com",
    "telefone": "11-98765-4321",
};
console.log(JSON.nome);
console.log(JSON.idade);
console.log(JSON.cidade);

console.log("Ex 9 ------------------------------------------------------------------------------------");

let frase = "Eu estou criando esse array a partir dessa frase";

let arrayDeFrase = frase.split(" ");

for(let i =0; i< arrayDeFrase.length;i++){
    console.log(arrayDeFrase[i]);
};

console.log("Ex 10 ------------------------------------------------------------------------------------");
//  metodos
const calculadora = {
    soma(a,b){
        return a+b;
    },
    subtracao(a,b){
        return a-b;
    },
    divisao(a,b){
        return a/b;
    },
    multiplicacao(a,b){
        return a*b;
    }
};

console.log(calculadora.soma(1,4));
console.log(calculadora.subtracao(6,4));
console.log(calculadora.divisao(6,4));
console.log(calculadora.multiplicacao(8,4));

console.log("1 - Crie uma função que receba um array de números e retorne apenas os números ímpares.");

let arrayDeNumero = [1,2,3,4,5,6,7,8,9,10];

function validaParImpar(array){
    let impares = [];
    for(let i = 0; i< array.length;i++){
        if(array[i] % 2 !=0){
            impares.push(array[i]);
        }
    }
    return impares;
}
console.log(validaParImpar(arrayDeNumero));

console.log("2 - Crie um objeto “livro” com título, autor e páginas. Adicione uma função dentro do objeto que retorne “O livro [título] tem [número de páginas] páginas”.");

livro = {
    titulo: "um livro ai",
    autor: "eu mesmo",
    paginas: 450,


    retornaDadosLivro(){
        return `O livro ${this.titulo} tem ${this.paginas} páginas`;
    }
}
console.log(livro.retornaDadosLivro());

console.log("3 - Crie um array com nomes de pessoas e use um loop para exibir apenas os nomes que começam com a letra “J”.");
let arreyNomes2 = ["pedro","jairo","joão","lucas","carlos","andre","julia","camila","jaqueline"];

for(let i=0; i< arreyNomes2.length; i++){
    let nomesComJ = [];
    if(arreyNomes2[i][0].toLocaleLowerCase() == "j"){
        console.log(arreyNomes2[i]);
    };
};

console.log("4 - Crie uma função que receba dois arrays e retorne um novo array contendo apenas os elementos que existem nos dois arrays (interseção).");
let frutas1 = ["maçã", "banana", "laranja", "uva", "manga"];
let frutas2 = ["abacaxi", "laranja", "manga", "kiwi", "banana"];

function recebeArrays(array1,array2){
    let arrayNovo = [];
    for(let i = 0; i< array1.length;i++){
        if(array2.includes(array1[i])){
            arrayNovo.push(array1[i]);
        };
    };
    return arrayNovo;
};
console.log(recebeArrays(frutas1,frutas2));

console.log("5 - Crie uma função que receba uma string e conte quantas vogais ela possui.");
const vogais = ["a","e","i","o","u"];
let cont = 0;
function contaVogais(palavra){
    for(let i = 0; i < palavra.length; i++){//  paralavras são iteradoes, se "comportam" como arrays
        if(vogais.includes(palavra[i].toLocaleLowerCase())){
            cont ++;
        }
    }
    return cont;
}
console.log(contaVogais("Paralelepipedo"));
console.log("6 - Crie um array de objetos representando alunos com “nome” e “nota”. Retorne apenas os alunos com nota maior ou igual a 7.");
console.log("7 - Crie uma função que receba um número e retorne true se ele for primo e false caso contrário.");
console.log("8 - Crie uma função que receba uma string e a retorne invertida (ex: “JS” → “SJ”).");
console.log("9 - Crie um array com 10 números aleatórios entre 1 e 100 e exiba o maior e o menor número.");
console.log("10 - Crie uma função que receba um array de objetos com “nome” e “idade” e retorne um array com os nomes ordenados pela idade, do mais jovem para o mais velho.");

