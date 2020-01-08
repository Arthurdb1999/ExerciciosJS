//Object.preventExtensions - permite deletar e alterar mas nao adicionar novos atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

//Object.seal - mesma coisa que o prevent extensions, porém não deixa deletar atributos
const pessoa = {
    nome: 'Juliana',
    idade: 20
}

Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Kist'
delete pessoa.nome
pessoa.idade = 21
console.log(pessoa)