let arr1 = [1,2,3,4];
let arr2 = ['Pero','Julia','jacara'];
let arr3 = [true, false, true];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

console.log(arr1[1]);
console.log(arr1[arr1.length -1]);

let nome = "joao";

console.log(nome.length);
let numeros = [1,2,3,4,5,6,7,8,9,10];


console.log(numeros.length);



numeros.push(); // add na ultima posicao
numeros.pop();// remove na ultima posicao
numeros.shift();//  remove da primera posicao
numeros.unshift();// add na primeira posicao
numeros.indexOf(2);//  retorna a primeira posicao da lista que contenha o valor
numeros.lastIndexOf(2);//  retorna a ultima posicao na lista que contenha aquele valor


let numeros2 = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros2.slice(3,5)); // retorna o que estiver dendo dos valores passados como array
console.log(numeros2.slice(-8))// retorna de traz para frente

const carros = ["Ferrari", "Lamborghini", "Porsche", "BMW", "Mercedes-Benz", "Audi", "Toyota", "Honda", "Chevrolet", "Ford"];

console.log(carros.includes("BMW"));
console.log(carros.includes("Fiat"));

const carros2 = ["Corolla", "Civic", "Mustang", "Camaro", "Golf", "Fiesta", "Polo", "Onix", "Kwid", "HB20"];
console.log(carros2.reverse());