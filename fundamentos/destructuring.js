const pessoa = {
    nome: "Ingrid",
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // Tire de dentro do objeto os atributos nome e idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, malHumorada = true} = pessoa
console.log(sobrenome, malHumorada)
 
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const [a] = [10]

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand())
console.log()


function rand2([min2 = 0, max2 = 1000]) {
    if (min2 > max2) [min2, max2] = [max2, min2]
    const valor2 = Math.random() * (max2 - min2) + min2
    return Math.floor(valor2)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))
//console.log(rand2())
