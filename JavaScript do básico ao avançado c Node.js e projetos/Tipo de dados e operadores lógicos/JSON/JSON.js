let pessoa = {
    "nome": "Pedro",
    "idade": 25,
    "cidade": "Cascavel",
    "email": "pedro@email.com",
    "telefone": "11-98765-4321",
    "hobbies": ["futebol", "leitura", "video games"]
}
console.log(pessoa.cidade);
console.log(pessoa.hobbies);


let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);