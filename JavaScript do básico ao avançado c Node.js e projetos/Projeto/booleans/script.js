let ativo = true;
if (ativo) {
  console.log("Está ativo!"); // será executado
}

if (!ativo) {
  console.log("Está inativo!"); // será executado
}

if (0) {
  console.log("Isso nunca aparece");
} else {
  console.log("0 é considerado falso");
}

if ("") {
  console.log("Não aparece");
} else {
  console.log("String vazia é falsa");
}
console.log(5 == "5");   // true  (compara só o valor)
console.log(5 === "5");  // false (compara valor e tipo -> mais seguro)
// Diferente
console.log(10 != "10");  // false  (só valor)
console.log(10 !== "10"); // true   (valor e tipo diferentes)
// Maior e Menor
console.log(8 > 5);  // true
console.log(3 < 7);  // true
// Maior ou Igual / Menor ou Igual
console.log(10 >= 10); // true
console.log(4 <= 2);   // false

// Operadores Lógicos \\

console.log(true && true);   // true
console.log(true && false);  // false
console.log(5 > 3 && 10 > 2); // true (as duas são verdadeiras)


console.log(true || false);  // true
console.log(false || false); // false
console.log(5 > 10 || 10 > 2); // true (segunda é verdadeira)


console.log(!true);   // false
console.log(!false);  // true
console.log(!(5 > 3)); // false (porque 5 > 3 é true, e o ! inverte)
