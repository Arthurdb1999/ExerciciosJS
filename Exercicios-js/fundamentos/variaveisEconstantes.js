var a = 3
let b = 4

var a = 30
b = 40

console.log(a, b)

const c = 5

console.log(c)

//TIPAGEM FRACA E DINÂMICA

let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.12
console.log(qualquer)
console.log(typeof qualquer)

//Declaração de variáveis

const peso2 = 1.0
const peso1 = Number('2.0')
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.89
const avaliacao2 = 6.543
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) //converte em binário
console.log(typeof Number)

//Cuidados
console.log(7/0)
console.log("10"/2)
console.log('3'+ 2) //String tem preferência, por isso o resultado é 32 = concatenação, pois o + existe nas Strings e o - não
console.log('3'- 2) 
console.log(0.1 + 0.7)
console.log((0.1 + 0.7).toFixed(2))

//Math
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)


