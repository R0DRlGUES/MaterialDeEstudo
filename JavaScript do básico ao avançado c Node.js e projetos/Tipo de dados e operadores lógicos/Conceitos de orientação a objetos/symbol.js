// Criando um Symbol exclusivo
const patas = Symbol("patas");

function Cachorro(raca, cor) {
    this.raca = raca;
    this.cor = cor;
}

// adicionando método normal no prototype
Cachorro.prototype.latir = function() {
    console.log("Au au");
};

// adicionando propriedade única com Symbol no prototype
Cachorro.prototype[patas] = 4;

let husky = new Cachorro("Husky", "cinza e branco");

console.log(husky.raca);   // Husky
console.log(husky.cor);    // cinza e branco
console.log(husky[patas]); // 4
husky.latir();             // Au au
