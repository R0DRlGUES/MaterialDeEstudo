class Mamifero {
    constructor(patas) {
        this.patas = patas
    }   
}

class Cachorro extends Mamifero {
    constructor (patas, raca ){
        super(patas)
        this.raca = raca
    }
    latir(){
        console.log('Au au');
    }
}

let pug = new Cachorro(4,'Pug');
console.log(pug);
console.log(pug.patas);
pug.latir();