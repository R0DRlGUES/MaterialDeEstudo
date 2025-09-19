
function aleatorio(numMaior){
    let numAleatorio = Math.random(numMaior)//  -- valor ignorado
    console.log(numAleatorio);
}


//  correção
function aleatorios(numMaior){
    return Math.floor(Math.random() * numMaior) + 1;
    
}
console.log(aleatorio(3));

console.log(aleatorios(32));
