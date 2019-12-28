const notas = [6.7, 7.5, 3.5, 4.1, 7.7, 9.0, 1.9]

//sem callback
const notasbaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)

//com callback

const notasbaixas2 = notas.filter((nota) => {
    return nota < 7 
})

console.log(notasbaixas2)