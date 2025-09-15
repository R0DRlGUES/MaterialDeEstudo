let nome = "Rodrigo"; 

for(let i =0;i<10;i++){
    if(i == 3){
        nome = "Pedro";
    }

    if(i == 5 && nome == "Pedro"){
        console.log("O nome é Pedro e o i é 5, saindo do loop");
        break;
    }
    console.log(i);
}