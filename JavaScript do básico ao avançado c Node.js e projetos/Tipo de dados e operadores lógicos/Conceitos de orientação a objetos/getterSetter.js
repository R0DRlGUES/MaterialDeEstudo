class Gato{
    constructor(raca,cor,patas){
        this.raca = raca;
        this.cor = cor;
        this.patas = patas;
    }
    miar(){
        console.log('Miau miaaaaaauuu!!');
    }
    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    } 
}
let siamese = new Gato('Siamese','',4);
console.log(siamese);

siamese.setCor = 'Amarelo';
console.log(siamese);