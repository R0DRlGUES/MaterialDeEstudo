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
console.log(doberman.latir());
