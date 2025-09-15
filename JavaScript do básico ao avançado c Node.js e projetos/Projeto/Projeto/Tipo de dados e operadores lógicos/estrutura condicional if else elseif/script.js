let idade = 18;

if(idade == 18){
    console.log("Você tem 18 anos");
}

let nome = "João";
if(nome === "João"){
    console.log("Seu nome é João");
}

if(idade == 18 && nome === "João"){
    console.log("Liberado");
}else{
    console.log("Bloqueado");
}

let valor1 =10;
let valor2 = 20;
if(valor1 > valor2){
    console.log("Valor 1 é maior que Valor 2");
}else if(valor1 < valor2){ 
    console.log("Valor 2 é maior que Valor 1");
}else{
    console.log("Valor 1 é igual a Valor 2");
}