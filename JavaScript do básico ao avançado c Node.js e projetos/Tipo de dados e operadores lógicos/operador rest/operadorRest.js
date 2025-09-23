let n1 = 7;
let n2 = 14;
let n3 = 29;
let n4 = 3;
let n5 = 18;
let n6 = 42;
let n7 = 11;
let n8 = 25;
let n9 = 6;
let n10 = 33;


function imprimeNums(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
}

imprimeNums(n1,n2,n3,n4);
console.log("--------");
imprimeNums(n1,n6,n3,n9);
console.log("--------");
imprimeNums(7,3,7,2,5);
