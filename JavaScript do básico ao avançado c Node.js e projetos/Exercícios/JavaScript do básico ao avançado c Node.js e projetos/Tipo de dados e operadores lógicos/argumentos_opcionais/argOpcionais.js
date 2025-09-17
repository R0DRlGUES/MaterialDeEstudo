function soma (a,b){

    if(a === undefined || b === undefined){
        console.log("essa função precisa de dois argumentos");
    }else{
        return a + b;
    }
};
console.log(soma(1));

console.log(soma(1,9));


function calcPotencia(base, exp=2){//  deifinindo valor "padrão"
    return Math.pow(base,exp)
};
console.log(calcPotencia(2));
console.log(calcPotencia(2,2));
console.log(calcPotencia(2,3));