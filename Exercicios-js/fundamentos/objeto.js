const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

// '{"nome": "Camisa Polo", "preco": 80.50}' // conversao para JSON - formato textual

console.log(prod2)

console.log()

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Object)
console.log(typeof new Object)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())
