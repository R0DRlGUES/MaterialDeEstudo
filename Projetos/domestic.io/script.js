const formulario = document.getElementById("formNovaTarefa");
const inputNome = document.querySelector("#inputNomeTarefa");
const txaDescricao = document.querySelector("#textareaDescricao");
const btAddTarefa = document.querySelector("#buttonAdicionarTarefa");
const lista = document.getElementById("listaTarefas");

let tarefasDomesticas =[];
const listaEmbaralhada = shuffler(tarefasDomesticas);
let listaDoPedro = [];
let listaDajulia = [];


formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const tituloTarefa = inputNome.value.trim();
  const descricaoTarefa = txaDescricao.value.trim();

  if (tituloTarefa === "") {
    console.log("Erro: título vazio");
    return;
  }

  const itemTarefa = document.createElement("li");
  itemTarefa.innerHTML = `<strong>${tituloTarefa}</strong><br><small>${descricaoTarefa}</small>`;

  lista.appendChild(itemTarefa);

  inputNome.value = "";
  txaDescricao.value = "";
});


function shuffler(arr){
  let novoArr = [...arr];
  for(let i = arr.length - 1; i > 0; i--){
    let a = Math.floor(Math.random() * (i+1));
    [novoArr[i] , novoArr[a]] = [novoArr[a], novoArr[i]];// utilizacao do destructuring
  }
  return novoArr;
}

listaDoPedro = listaEmbaralhada.slice(0,Math.floor(listaEmbaralhada.length / 2));
listaDajulia = listaEmbaralhada.slice(Math.floor(listaEmbaralhada.length / 2));
console.log("Lista do Pedro = " + listaDoPedro);
console.log("Lista da Julia = " + listaDajulia);