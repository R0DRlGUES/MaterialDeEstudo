let cachorro = {
    patas:4,
    raca: "SRD",
    cor: "sem cor",
    latir: function(){
        console.log("Au au");
    }
}
let labrador = Object.create(cachorro);

labrador.latir();
labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(cachorro.raca);

//  formas de criar um objeto 

function cirarCachorro(raca,patas,cor,){
    let cachorro = Object.create({});// criando obejto cachorro vazio, nao herda de cachorro

    cachorro.patas = patas;
    cachorro.raca = raca;
    cachorro.cor = cor;
    return cachorro; 
}

let doberman = cirarCachorro('doberman', 4, "preto");
//  console.log(doberman.latir());

// new Object()

function Cachorro(raca,patas,cor){
    this.patas = patas; 
    this.raca = raca;   
    this.cor = cor; 
}

let husky = new Cachorro('husky',4,'cinza e branco');

Cachorro.prototype.uivar = function(){
    console.log("Auuuuuuuu");
}
Cachorro.prototype.latir = function(){
    console.log("Au au");
}

husky.uivar();
husky.latir();

class Gato{
    constructor(raca,cor,patas){
        this.raca = raca;
        this.cor = cor;
        this.patas = patas;
    }
    miar(){
        console.log('Miau miaaaaaauuu!!');
    }
}
Gato.prototype.rabo = true;
let siames = new Gato('siames','amarelo e branco',4);

console.log(siames);
console.log(siames.rabo);
