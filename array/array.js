let aprovados = new Array('Dudu', 'Tui', 'Doug')
console.log(aprovados)

aprovados = ['Dudu', 'Tui', 'Doug']
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = 'ninguem2'
aprovados.push('ninguem')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Bia'
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[5]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //indice 1 e o tanto de posicoes pra deletar
console.log(aprovados)