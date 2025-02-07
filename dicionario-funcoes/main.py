# -------------- DICIONARIO -----------
alunos = {
    'nome': 'Germana',
    'idade': '28',
    'altura': 1.68
}

print(type(alunos))

print(alunos['idade'])

# ------------------------

alunos['cidade'] = 'Rio de Janeiro'  # adicionar
alunos['nome'] = 'Marina'  # editar
del alunos['cidade']  # remover

print(alunos)

alunos.clear()  # apagar todos os itens internos do dicionario
print(alunos)

# -------------------------

alunos.update({'aluno': True, 'cpf': 333333333})
print(alunos)


# -----------------

restaurante = {
    'prato1': 'pizza',
    'prato2': 'tapioca'
}

restaurante['prato3'] = 'manga com sal'  # adicionou
print(restaurante)

ultimo_item = restaurante.popitem()  # retirar ultimo item
print(ultimo_item)
print(restaurante)

# -------------FUNÇÕES------------


def minha_funcao():
    print('Olá, seja bem vindo!')


minha_funcao()


def criar_email(nome, dominio='gmail.com'):
    endereco_email = f'{nome}@{dominio}'
    return endereco_email


print(criar_email('germana', 'hotmail.com'))
print(criar_email('germana'))
