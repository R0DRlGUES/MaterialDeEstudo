function mostratNoConsole(){
    console.log("Ola mundo");
}
mostratNoConsole();


function parametros(num){
    console.log("O numero é: "+num);
}

parametros(2);
parametros(3);
parametros(4);

const numeroAleatorio = function(){
    console.log(Math.random());
}
numeroAleatorio();

// mais sobre funciones

function multiplicarTresNum(x,y,z){
    return x*y*z
}
console.log(multiplicarTresNum(1,2,3));

const mult = multiplicarTresNum(1,2,3);
let multi = multiplicarTresNum(1,2,3);

console.log(mult,multi);