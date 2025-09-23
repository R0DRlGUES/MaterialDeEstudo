const pessoa = {
  nome: "Pedro",
  idade: 25,
  cidade: "São Paulo"
};


const {nome: nUser, idade: iUser, cidade: cUser} = pessoa;

console.log(nUser);
console.log(iUser);


const cores = ["vermelho", "verde", "azul"];
const [cor1_, cor2_] = cores;

console.log(cor1_, cor2_); // vermelho verde