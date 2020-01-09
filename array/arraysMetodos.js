const nomes = ['Tui', 'Ingrid', 'Dudu', 'Doug']
nomes.pop()
console.log(nomes)

nomes.push('Henriq')

nomes.shift() //remove o primeiro elemento da lista
console.log(nomes)

nomes.unshift('Tuizao') //adiciona no primeiro indice
console.log(nomes)

//adicionar nome com splise
nomes.splice(2, 0, 'Felipe') //indice 2 e nao deleta nada
console.log(nomes)

const algunsnnomes = nomes.slice(0, 2) //novo array
console.log(algunsnnomes)

const algunsnnomes2 = nomes.slice(1, 4) //nao inclui o indice 4
console.log(algunsnnomes2)