const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

//Todos os alunos sao bolsistas? Usando reduce

//console.log(alunos.map(aluno => aluno.bolsista))
const resultado = alunos.map(aluno => aluno.bolsista).reduce((cont, atual) => {
    return cont && atual
})

console.log(resultado)


//Algum aluno é bolsista? Usando reduce

const resultado2 = alunos.map(aluno => aluno.bolsista).reduce((cont, atual) => {
    return cont || atual
})

console.log(resultado2)
