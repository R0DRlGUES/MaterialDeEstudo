let tarefasDomesticas = [
  "Lavar a louça",
  "Varrer a casa",
  "Passar pano no chão",
  "Limpar o banheiro",
  "Arrumar a cama",
  "Lavar roupa",
  "Dobrar roupa",
  "Organizar a cozinha",
  "Tirar o lixo",
  "Regar as plantas",
  "Limpar a Gaiola do thuthucos"
];
const listaEmbaralhada = shuffler(tarefasDomesticas);
let listaDoPedro = [];
let listaDajulia = [];

let meioDaLista;


function shuffler(arr){
    let novoArr = [...arr];
    for(let i = arr.length - 1; i > 0; i--){
        let a = Math.floor(Math.random() * (i+1));
        [novoArr[i] , novoArr[a]] = [novoArr[a], novoArr[i]];// utilizacao do destructuring
    }
    return novoArr;
}
//  meioDaLista = Math.floor(listaEmbaralhada.length / 2)

listaDoPedro = listaEmbaralhada.slice(0,Math.floor(listaEmbaralhada.length / 2));
listaDajulia = listaEmbaralhada.slice(Math.floor(listaEmbaralhada.length / 2));
console.log("Lista do Pedro = " + listaDoPedro);
console.log("Lista da Julia = " + listaDajulia);
// -------------------------
// -------------------------
// -------------------------
// function embaralhar(arr){
//   let novo2arr = [...arr]
//   for(let i = arr.length -1;i > 0; i--){
//     let a = Math.floor(Math.random() * (i + 1));
//     [novo2arr[i] , novo2arr[a]] = [novo2arr[a] , novo2arr[i]];
//   }
//   return novo2arr;
// }
