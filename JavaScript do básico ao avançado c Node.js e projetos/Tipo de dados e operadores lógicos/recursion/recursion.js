function recusao(n){
    if(n - 1 < 2){
        console.log("recursão parou valor n =" + n)
    }else if(n % 2 != 0){
        console.log("num imp, valor n = " + n);
        recusao(n - 1);
    }else{
        console.log("num par, valor n = " + n);
        recusao(n - 2);
    }
}
recusao(90);