function lembrarSoma(x){
    return function(y){
        return x+y;
    }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));


// Closures são usados para:
// Guardar estado sem poluir o escopo global.
// Proteger dados privados.
// Gerenciar funções assíncronas de forma segura.
// Criar módulos e bibliotecas robustas.


// Ex do chat gtp


// Timer.
function criarTimer(nome) {
    let contador = 0;
    return setInterval(() => { // setInterval função nativa do JavaScript que serve para executar uma outra função repetidamente  
        contador++;
        console.log(`${nome}: ${contador}`);
    }, 500); // tempo Em Milissegundos
}
criarTimer("timer do Careca");

// mini banco
function criarConta(saldoInicial){
    let saldo = saldoInicial; //  --> isso está privado
    return{
        depositar:(valor) => saldo += valor,
        sacar:(valor) => saldo -= valor,
        verSaldo:() => saldo
    }
}
const minhaConta = criarConta(20);
minhaConta.depositar(300);
console.log(minhaConta.verSaldo());