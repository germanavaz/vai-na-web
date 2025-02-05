alunos = ['Germana', 'Sávio', 'Rielly', 'Mauricio']

print(alunos[1])
print(alunos[0:3])
print(alunos[-1])  # mostra o último da lista

print(type(alunos))

print(len(alunos))

# ---------------------------------------------------------

frutas = ['maça', 'banana', 'uva', 'laranja', 'banana']

# comando para inserir na casa especificada e o item que será adicionado
frutas.insert(2, 'manga')
print(frutas)

# ----------------------------------------------------------

frutas.append('abacaxi')  # adiciona no final da lista
print(frutas)

# ----------------------------------------------------------

frutas.sort()
print(frutas)

numeros = [10, 11, 20, 60, 5, 3, 7, 35, 57, 1]
numeros.sort()  # altera a ordem da lista "pra sempre"
print(numeros)

# altera a ordem da lista somente na variavel
# numerosOrdenados = numeros.sorted

# ----------------------------------------------------------

frutas = ['maça', 'banana', 'uva', 'laranja', 'banana']
frutas.remove('banana')  # remove pelo nome
print(frutas)

frutas.pop()  # remove o último item da lista
print(frutas)

# ----------------------------------------------------------

quantidade = frutas.count('banana')
print('quantidade de bananas:', quantidade)

# ----------------------------------------------------------
# --------- TUPLAS --------------
# Array que não pode ser modificado.Ex: para guardar CPF

minha_tupla = ('Germana', '1234', 10, True)
print(type(minha_tupla))
