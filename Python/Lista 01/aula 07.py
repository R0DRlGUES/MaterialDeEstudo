nome = input('Qual o seu nome?')
idade = input('Qual sua idade?')
altura = input('Qual sua altura?')
e_maior = idade > 18
data_atual = 2022
peso = 70
imc = peso / altura ** 2

# COM VIRGULAS SEPARANDO
print(nome, 'tem', idade, 'de idade e seu IMC é', imc)

# F STRINGS                           formatação dentro da string número
print(f'{nome} tem {idade} de idade e seu IMC é {imc:.2f}')

# FORMAT
# -ORDENADO S/PAREMETROS
print('{} tem {} de idade e seu IMC é {:.2f}'.format(nome, idade, imc))
# -ORDENADO C/PAREMETROS
print('{n} tem {i} de idade e seu IMC é {im:.2f}'.format(n=nome, i=idade, im=imc))

# NÃO ORDENADO S/PAREMETROS
print('{1}{2:.2f}{0} tem {1}{0} de idade e seu IMC é {2:.2f}{1}{0}'.format(nome, idade, imc))
# NÃO ORDENADO C/PAREMETROS
print('{n} {i}{i}tem {i} de {im:.2f}{im:.2f}idade e seu IMC é {n} {n} {im:.2f}'.format(n=nome, i=idade, im=imc))

input()

