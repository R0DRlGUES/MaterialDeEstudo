
console.log("Hello, World!");
console.log('Hello, World!');
console.log(`Hello, World!`);

console.log('Hello,\n World! nova linha');

console.log("Hello, 'World!' aspas simples");
console.log('Hello, "World!" aspas duplas');

console.log(`multiplicação em string: ${2 * 3} só funciona dentro de crase ou backticks`); // também conhecido como template literals
console.log("concatenação: 'Hello' + ' World!'");

let frase1 = "    Olá     -  ,\n bem-vindo ao JavaScript!   ";
let frase2 = frase1.trim();

console.log(frase1);
console.log(frase2);//  remove espaco do comeco e alguns carateres

let milAoContraio = '1';

console.log(milAoContraio.padStart(4,"0"));
console.log(milAoContraio.padEnd(4,"0"));

let frasRato = "O rato roeu a roupa do rei de roma";
let palavras = frasRato.split(" ");

console.log(palavras);

let novaFraseRato = palavras.join("##");
console.log(novaFraseRato);

let fraseRepeat = "Jacare ";

console.log(fraseRepeat.repeat(4));