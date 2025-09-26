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

### 6. Contar vogais em uma string
**Descrição**: Crie uma função que receba uma string e conte quantas vogais ela possui.  
**Dica**: Use um laço para iterar sobre os caracteres e verifique se cada um está em `'aeiouAEIOU'`.

---

### 7. Fibonacci até N
**Descrição**: Gere os primeiros N números da sequência de Fibonacci.  
**Dica**: Comece com os dois primeiros valores (`0` e `1`) e use um laço para os próximos.

---

### 8. Verificar ano bissexto
**Descrição**: Crie uma função que determine se um ano é bissexto.  
**Dica**: Um ano é bissexto se for divisível por 4 e (não for divisível por 100 ou for divisível por 400).

---

### 9. Remover elementos duplicados de um array
**Descrição**: Faça uma função que remova valores repetidos de um array.  
**Dica**: Use `Set` ou filtre o array manualmente usando `indexOf`.

---

### 10. Criar uma função de contagem regressiva
**Descrição**: Crie uma função que conte de um número até 0, imprimindo cada número a cada segundo.  
**Dica**: Use `setInterval` e `clearInterval`.

---

## 🔴 Nível Avançado

### 11. Validador de CPF (simplificado)
**Descrição**: Crie uma função que valide se uma string pode ser um CPF válido (apenas estrutura, não os dígitos verificadores).  
**Dica**: Use expressão regular (`regex`) para verificar o padrão `"xxx.xxx.xxx-xx"`.

---

### 12. Calculadora usando objetos
**Descrição**: Crie um objeto com métodos `soma`, `subtrai`, `multiplica` e `divide`.  
**Dica**: Defina uma função para cada operação dentro de um objeto.

---

### 13. Manipular o DOM com eventos
**Descrição**: Faça um botão em HTML que, ao ser clicado, altera o conteúdo de um parágrafo usando JavaScript.  
**Dica**: Use `addEventListener` e `document.getElementById()`.

---

### 14. Função que simula um "debounce"
**Descrição**: Crie uma função que limite a execução de outra função após certo tempo sem chamadas subsequentes.  
**Dica**: Use `setTimeout` e `clearTimeout`.

---

### 15. Implementar uma Promise simulando uma requisição
**Descrição**: Crie uma função que retorna uma Promise que resolve após 2 segundos com uma mensagem de sucesso.  
**Dica**: Use `setTimeout` dentro de uma `new Promise`.

---
