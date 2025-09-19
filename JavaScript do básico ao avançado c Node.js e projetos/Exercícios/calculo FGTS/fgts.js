let inssPatronal;

const idFuncaoAprendiz = 1;
const idFuncaoClt = 2;
const idFuncaoDomestica = 3;

const porcentagemClt = 0.08;
const porcentagemMenorAprendiz = 0.02;
const porcentagemDomestica = porcentagemClt + 0.032;
const porcentagemInss = 0.2;

function calculoFGTS(salario, idFuncao){
    let valorFgts;
    let valorInss;
    if(idFuncao === idFuncaoAprendiz ){
        valorFgts = porcentagemMenorAprendiz * salario;
        valorInss = porcentagemInss * salario;
        console.log(`FGTS do menor aprendiz é: R$${valorFgts.toFixed(2)}`);
        console.log(`INSS que o patron paga na salário de R$${salario} é: R$${valorInss.toFixed(2)}`);
    }else if(idFuncao === idFuncaoClt){
        valorFgts = porcentagemClt * salario;
        valorInss = porcentagemInss * salario;
        console.log(`FGTS do CLT sofrido que ganha R$${salario} é: R$${valorFgts.toFixed(2)}`);
        console.log(`INSS que o patron paga na salário de R$${salario} é: R$${valorInss.toFixed(2)}`);
    }else if(idFuncao === idFuncaoDomestica){
        valorFgts = porcentagemDomestica * salario;
        console.log(`FGTS do(a) Domestica é: ${valorFgts.toFixed(2)}`);
    }else{
        console.log("Função não cadastrada no sistema.");
    }
};

calculoFGTS(900, 1);
calculoFGTS(2000, 2);
calculoFGTS(2000, 3);


