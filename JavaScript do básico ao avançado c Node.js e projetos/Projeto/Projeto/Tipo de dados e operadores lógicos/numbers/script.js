console.log(0 / 0);       // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt("abc")); // NaN

console.log(NaN === NaN); // false (NaN nunca é igual a ele mesmo)
console.log(isNaN(NaN));   // true (verifica se é NaN)
console.log(isNaN(123));   // false (123 não é NaN)