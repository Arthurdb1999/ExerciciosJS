//pessoa -> 123 -> {...}
const pessoa = { nome: 'Arthur' }
pessoa.nome = 'João'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa.nome = { nome: 'Ingrid' }
    //Não funciona pois estou tentando atribuir pessoa a outro endereço de memória
    //Mas pessoa é uma constante

Object.freeze(pessoa) //não permite mais alterações no Objeto

pessoa.nome = 'Ana'
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Pedro' })
console.log(pessoaConstante)