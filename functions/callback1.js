const fabricantes = ["Meca", "BMW", "Audi"];

function print(nome, indice) {
    console.log(`${indice++}. ${nome}`)
}

fabricantes.forEach(print)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})