const carrinhos = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array com apenas os preços

carrinhos.map(carrinho => {
    carrinho2 = JSON.parse(carrinho)
    array = carrinho2.preco
    console.log(array)
})

//Metodo resolvido no curso Udemy:

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinhos.map(paraObjeto).map(apenasPreco)
console.log(resultado)