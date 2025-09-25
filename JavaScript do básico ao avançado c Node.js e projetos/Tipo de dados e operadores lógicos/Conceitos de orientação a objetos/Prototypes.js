const pessoa = {
    maos: 2,
    pes:2,
    cabeca:1,
    dedos:20,
    pernas:2,
    tronco:1,

};

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('pes')); //hasOwnProperty verifica se tem aquele metodo ou atriburo dentro do obj
//  isso e herdado do pai o Object -- basicamente e heranca

let novaPessoa = Object.create(pessoa);

console.log(Object.getPrototypeOf(novaPessoa) == pessoa);
console.log(novaPessoa);

console.log(Object.getPrototypeOf(novaPessoa) === pessoa);