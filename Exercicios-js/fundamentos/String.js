const escola = "Cod3r"

console.log(escola.charAt(4)) //começa a contar do 0
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //tabela unicode
console.log(escola.indexOf('3'))  //posição do caractere na String
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '  + escola + "!")
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //expressões regulares - substitui os numeros
console.log(escola.replace(/\w/, 'e'))
console.log(escola.replace(/\w/g, 'e')) //regex, flag "g" = global
console.log('Ana,Maria,Pedro'.split(',')) //transforma em array
console.log('Ana,Maria,Pedro'.split(/,/)) //regex 

//Template Strings - considera enter como quebra de linha e imprime
const nome = 'Ingrid Linda'
const concat = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concat, template)

//expressões
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei....${up('cuidado')}!`)
