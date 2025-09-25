const cachorro = {
    raca: "SRD",
    uivar: function(){
        console.log("AUuuuuuuuuuuuuuuuuuuuuuuuu!!");
    },
    rosnar: function(){
        console.log("GRRRRRRRRRRR!!");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raca e " + this.raca;
    }
};
cachorro.rosnar();
cachorro.uivar();

cachorro.setRaca("Pastor alemao");
console.log(cachorro.getRaca());
