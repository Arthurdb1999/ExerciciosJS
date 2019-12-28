const soma = function(x, y) {
    return x + y
}

const print = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

print(3, 4)
print(3, 4, soma)
print(3, 4, function(x, y){
    return x - y
})
print(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()