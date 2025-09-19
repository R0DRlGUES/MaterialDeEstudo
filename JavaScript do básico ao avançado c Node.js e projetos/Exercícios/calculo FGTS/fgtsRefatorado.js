const idFuncaoAprendiz = 1;
const idFuncaoClt = 2;
const idFuncaoDomestica = 3;

const funcoes = {
    1: { nome: "Menor Aprendiz", fgts: 0.02, inss: 0.02 },
    2: { nome: "CLT", fgts: 0.08, inss: 0.2 },
    3: { nome: "Domestica", fgts: 0.112, inss: 0.08 }
};

function calculoFGTS(salario, idFuncao){
    const funcao = funcoes[idFuncao];

    if(!funcao) return console.log("Função não cadastrada");

    const valorFgts = salario * funcao.fgts;
    const valorInss = salario * (funcao.inss || 0);

    console.log(`FGTS do(a) ${funcao.nome} que ganha R$${salario} é: R$${valorFgts.toFixed(2)}`);
    console.log(`INSS que o patron paga na salário de R$${salario} é: R$${valorInss.toFixed(2)}`);
}

calculoFGTS(900, 1);
calculoFGTS(2000, 2);
calculoFGTS(2000, 3);

// Timer.
function criarTimer(nome) {
    let contador = 0;
    return setInterval(() => {
        contador++;
        console.log(`${nome}: ${contador}`);
    }, 20); 
}
criarTimer("timer do Careca");



