let inputNum = document.querySelector('#inputNum');
let btAdd = document.querySelector('#btAdd');

let btMostra = document.querySelector('#btMostra');
let mostraTela = document.querySelector('#mostraTela');

let btMaior = document.querySelector('#btMaior');
let resMaior = document.querySelector('#resMaior');

let btPs = document.querySelector('#btPs');
let resPs = document.querySelector('#resPs');

let btPar = document.querySelector('#btPar');
let resPar = document.querySelector('#resPar');

let btImp = document.querySelector('#btImp');
let resImp = document.querySelector('#resImp');

let btSoma = document.querySelector('#btSoma');
let resSoma = document.querySelector('#resSoma');

let limp = document.querySelector('#limp');

let arrayVet=[];
let lmb =0;
//----------------FUNÇOES----------------\\
function adicionar(){
    if(lmb<4){
        arrayVet.push(Number(inputNum.value));
        inputNum.value=''
        lmb++
    }
}
function mostraValor(){
    let aux ='';
    for(let i=0; i<arrayVet.length; i++){
       aux = aux+arrayVet[i]+', '
    }
    mostraTela.innerHTML = aux;
}
function maior(){
    let aux =0
    for(let i=0; i<arrayVet.length; i++){
        if(arrayVet[i] > aux){
            aux = arrayVet[i]
        }
   }
   let aux1 =9999
   for(let i=0; i<arrayVet.length; i++){
       if(arrayVet[i] < aux){
           aux1 = arrayVet[i]
       }
       resMaior.innerHTML = aux+' maior | '+aux1+' menor'
  }
}
function ps(){
    let aux1
    let aux2

    for(let i=0; i<arrayVet.length; i++){
      


        let aux2 = (arrayVet[arrayVet.length - 1]);
        resPs.innerHTML = aux2+'Ultimo'
    }
}
function par(){
    let aux='';
    for(let i=0; i<arrayVet.length; i++){
        if(arrayVet[i]%2===0){
            aux += arrayVet[i]+' | ';
        }
    }
    resPar.innerHTML=aux;
}
function impar(){
    let aux='';
    for(let i=0; i<arrayVet.length; i++){
        if(arrayVet[i]%2===1){
            aux += arrayVet[i]+' | ';
        }
    }
    resImp.innerHTML=aux;
}
function soma(){
    let aux=0
    for(let i=0; i<arrayVet.length; i++){
        aux = aux+arrayVet[i];
    }
    resSoma.innerHTML=aux;
}
//não temrinado 
function limpar(){
    mostraTela.value ='';
    resMaior.value ='';
    resPs.value ='';
    resPar.value ='';
    resImp.value ='';
    resSoma.value ='';
}
//----------------BOTOES----------------\\
btAdd.onclick = function(){adicionar();}
btMostra.onclick = function(){mostraValor();}
btMaior.onclick = function(){maior();}
btPs.onclick = function(){ps();}
btPar.onclick = function(){par();}
btImp.onclick = function(){impar();}
btSoma.onclick = function(){soma();}

//não temrinado 
limp.onclcik = function(){limpar();}