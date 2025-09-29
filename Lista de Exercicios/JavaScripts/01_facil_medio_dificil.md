# 📘 Lista de Exercícios em JavaScript por Nível

Pratique e aprimore suas habilidades em JavaScript com esses 15 exercícios organizados por nível de dificuldade.

---

# 🟢 Exercícios de JavaScript – Nível Fácil (Iniciante)

## 1. Soma de dois números
**Descrição**: Crie uma função que receba dois números como parâmetros e retorne a soma deles.  
**Dica**: Use o operador `+` e a palavra-chave `function`.

---

## 2. Verificar número par ou ímpar
**Descrição**: Crie uma função que receba um número e diga se ele é par ou ímpar.  
**Dica**: Use o operador módulo (`%`) para verificar o resto da divisão por 2.

---

## 3. Contar de 1 a 10
**Descrição**: Escreva um laço que imprima os números de 1 a 10 no console.  
**Dica**: Use um laço `for`.

---

## 4. Converter Celsius para Fahrenheit
**Descrição**: Faça uma função que converta uma temperatura de Celsius para Fahrenheit.  
**Dica**: Use a fórmula `F = C * 1.8 + 32`.

---

## 5. Verificar se uma palavra é palíndromo
**Descrição**: Crie uma função que verifique se uma palavra é igual quando lida de trás para frente.  
**Dica**: Use `split()`, `reverse()` e `join()` em uma `string`.

---

## 6. Calcular o quadrado de um número
**Descrição**: Crie uma função que receba um número e retorne o seu quadrado.  
**Dica**: Use `**` ou `Math.pow()`.

---

## 7. Retornar o maior de dois números
**Descrição**: Crie uma função que receba dois números e retorne o maior deles.  
**Dica**: Use `if` ou `Math.max()`.

---

## 8. Verificar se um número é positivo, negativo ou zero
**Descrição**: Crie uma função que retorne `"positivo"`, `"negativo"` ou `"zero"` de acordo com o número fornecido.  
**Dica**: Use `if`, `else if`, `else`.

---

## 9. Calcular a média de três números
**Descrição**: Crie uma função que receba três números e retorne a média entre eles.  
**Dica**: Soma dos três dividido por 3.

---

## 10. Repetir uma palavra várias vezes
**Descrição**: Crie uma função que receba uma palavra e um número, e retorne a palavra repetida esse número de vezes.  
**Dica**: Use o método `.repeat()`.

---

## 11. Obter o comprimento de uma string
**Descrição**: Crie uma função que receba uma string e retorne seu comprimento (quantidade de caracteres).  
**Dica**: Use `.length`.

---

## 12. Capitalizar a primeira letra de uma palavra
**Descrição**: Crie uma função que receba uma palavra e retorne ela com a primeira letra em maiúscula.  
**Dica**: Use `charAt(0).toUpperCase()` e `slice(1)`.

---

## 13. Inverter uma string
**Descrição**: Crie uma função que receba uma string e retorne ela invertida.  
**Dica**: Use `.split('')`, `.reverse()` e `.join('')`.

---

## 14. Verificar se um número está entre 10 e 50
**Descrição**: Crie uma função que receba um número e retorne `true` se ele estiver entre 10 e 50 (inclusive), e `false` caso contrário.  
**Dica**: Use operadores lógicos `&&`.

---

## 15. Criar uma função que imprima a tabuada do 5
**Descrição**: Escreva uma função que imprima a tabuada do número 5 (de 1 a 10).  
**Dica**: Use `for` e multiplicação.

---

## 16. Verificar se um número é primo
**Descrição**: Crie uma função que receba um número e verifique se ele é um número primo.  
**Dica**: Um número primo é divisível apenas por 1 e por ele mesmo. Use um laço `for` e o operador módulo `%`.

---

## 17. Somar todos os números de um array
**Descrição**: Crie uma função que receba um array de números e retorne a soma de todos os elementos.  
**Dica**: Use um laço `for` ou o método `.reduce()`.

## 🟡 Nível Intermediário

### 18. Contar vogais em uma string
**Descrição**: Crie uma função que receba uma string e conte quantas vogais ela possui.  
**Dica**: Use um laço para iterar sobre os caracteres e verifique se cada um está em `'aeiouAEIOU'`.

---

### 19. Fibonacci até N
**Descrição**: Gere os primeiros N números da sequência de Fibonacci.  
**Dica**: Comece com os dois primeiros valores (`0` e `1`) e use um laço para os próximos.

---

### 20. Verificar ano bissexto
**Descrição**: Crie uma função que determine se um ano é bissexto.  
**Dica**: Um ano é bissexto se for divisível por 4 e (não for divisível por 100 ou for divisível por 400).

---

### 21. Remover elementos duplicados de um array
**Descrição**: Faça uma função que remova valores repetidos de um array.  
**Dica**: Use `Set` ou filtre o array manualmente usando `indexOf`.

---

### 22. Criar uma função de contagem regressiva
**Descrição**: Crie uma função que conte de um número até 0, imprimindo cada número a cada segundo.  
**Dica**: Use `setInterval` e `clearInterval`.

---

## 22. Classe Pessoa
**Descrição**: Crie uma classe `Pessoa` que receba `nome` e `idade`. Adicione um método que retorne `"Olá, meu nome é [nome] e tenho [idade] anos"`.  
**Dica**: Use a palavra-chave `class` e `this` para acessar propriedades.

---

## 23. Herança Funcionario
**Descrição**: Crie uma classe `Funcionario` que herda de `Pessoa`. Adicione uma propriedade `salario` e um método que retorne `"O funcionário [nome] recebe [salario] por mês"`.  
**Dica**: Use `extends` e `super()` para herdar propriedades.

---

## 24. Array de objetos
**Descrição**: Crie um array com 5 objetos representando produtos (`nome`, `preco`). Imprima apenas os produtos cujo preço seja maior que 50.  
**Dica**: Use um `for` ou o método `.filter()`.

---

## 25. Map em array
**Descrição**: Dado um array `[1, 2, 3, 4, 5]`, use `.map()` para criar um novo array multiplicando cada número por 10.  
**Dica**: Lembre-se que `.map()` retorna um novo array.

---

## 26. Filter em array
**Descrição**: Dado um array `[10, 15, 20, 25, 30]`, use `.filter()` para criar um novo array apenas com números divisíveis por 10.  
**Dica**: Use o operador `%` dentro do callback.

---

## 27. Reduce em array
**Descrição**: Dado um array `[5, 10, 15]`, use `.reduce()` para somar todos os elementos.  
**Dica**: O `.reduce()` recebe uma função com `acumulador` e `valorAtual`.

---

## 28. Função com parâmetro padrão
**Descrição**: Crie uma função `saudacao(nome = "Visitante")` que retorna `"Olá, [nome]!"`. Teste chamando sem passar parâmetro.  
**Dica**: Defina `nome = "Visitante"` na assinatura da função.

---

## 29. Arrow function para pares
**Descrição**: Crie uma arrow function que recebe um array de números e retorna apenas os números pares.  
**Dica**: Use `.filter()` dentro da arrow function e o operador `%`.

---

## 30. Objetos aninhados
**Descrição**: Crie um objeto `usuario` com `nome`, `idade` e `endereco` (com `rua`, `cidade` e `cep`). Imprima o endereço completo no console.  
**Dica**: Use `usuario.endereco.rua` para acessar propriedades internas.

---

## 31. Loop e condição
**Descrição**: Crie um array `[1,2,3,4,5,6,7,8,9,10]`. Use um loop `for` para imprimir apenas os números ímpares.  
**Dica**: Use `if (numero % 2 !== 0)`.

---

## 32. Switch Case para dias
**Descrição**: Crie uma função que recebe um número de 1 a 7 e retorna o dia da semana correspondente usando `switch case`.  
**Dica**: Use `break` em cada case para evitar execução múltipla.

---

## 33. Validação idade
**Descrição**: Crie uma função que recebe uma idade e retorna `"Maior de idade"` se >= 18 e `"Menor de idade"` se < 18.  
**Dica**: Use `if/else` para comparar valores.

---

## 34. Filtrar alunos aprovados
**Descrição**: Dado o array:  
```js
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "João", nota: 5 },
  { nome: "Maria", nota: 9 }
];


## 🔴 Nível Avançado

### 23. Validador de CPF (simplificado)
**Descrição**: Crie uma função que valide se uma string pode ser um CPF válido (apenas estrutura, não os dígitos verificadores).  
**Dica**: Use expressão regular (`regex`) para verificar o padrão `"xxx.xxx.xxx-xx"`.

---

### 24. Calculadora usando objetos
**Descrição**: Crie um objeto com métodos `soma`, `subtrai`, `multiplica` e `divide`.  
**Dica**: Defina uma função para cada operação dentro de um objeto.

---

### 25. Manipular o DOM com eventos
**Descrição**: Faça um botão em HTML que, ao ser clicado, altera o conteúdo de um parágrafo usando JavaScript.  
**Dica**: Use `addEventListener` e `document.getElementById()`.

---

### 26. Função que simula um "debounce"
**Descrição**: Crie uma função que limite a execução de outra função após certo tempo sem chamadas subsequentes.  
**Dica**: Use `setTimeout` e `clearTimeout`.

---

### 27. Implementar uma Promise simulando uma requisição
**Descrição**: Crie uma função que retorna uma Promise que resolve após 2 segundos com uma mensagem de sucesso.  
**Dica**: Use `setTimeout` dentro de uma `new Promise`.

---