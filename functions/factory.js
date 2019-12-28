//Factory simples

function criarPessoa() {
    return {
        nome: 'Ingrid',
        sobrenome: 'Ramos'
    }
}

console.log(criarPessoa())

//Factory personalizada

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
    }
}

console.log(criarProduto('Notebook', 3500.00))
console.log(criarProduto('Notebook 2', 3000.00))