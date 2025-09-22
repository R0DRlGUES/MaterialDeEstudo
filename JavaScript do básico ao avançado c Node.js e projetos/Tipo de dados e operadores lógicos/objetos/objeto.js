let cachorro = {
    patas: 4, 
    nome: 'cleiton'
};
console.log(cachorro.patas);
console.log(cachorro.nome);


// [] = Array
// {} = Objeto

let pessoa = {
    nome: 'Pedro',
    idade: 23,
    profissao: 'programador'
};
console.log(pessoa.nome);

delete pessoa.nome;
console.log(pessoa.nome);

Object.assign(cachorro, pessoa);//  copia o objeto de um para o outro
console.log(cachorro)

let obj = {
    'chave1': 1,
    'chave2': 2,
    'chave3': 3
};
console.log(Object.keys(obj));

//  Mudação

let pessoa2 = {
    nome:'Matheus'
}
let pessoa3 = pessoa2;

let pessoa4 = {
    nome:'Matheus'
};

console.log(pessoa2 === pessoa3);
console.log(pessoa4 === pessoa3);
console.log(pessoa4 === pessoa2);

// os atributos alterados dentro de um obejto que refere a outro, altera para ambos, tanto para o original quanto seus dependentes.