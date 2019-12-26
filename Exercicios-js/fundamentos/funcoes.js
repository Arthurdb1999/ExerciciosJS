 function imprimirSoma(a, b){
     console.log(a+b)
 }

 imprimirSoma(2, 3)
 imprimirSoma(2)
 imprimirSoma('Tui', 'Ingrid')
 imprimirSoma(2, 4, 5, 6, 7)
 imprimirSoma()

 console.log()

 //Função com retorno

 function soma(a, b=1){
     return a + b
 }

 console.log(soma(2, 3))
 console.log(soma())
 console.log(soma(2))

 console.log()

 //Armazenar função em uma variável

 const imprimirSoma2 = function (a, b) {
     console.log(a + b)
 }

 imprimirSoma2(2, 3)

 //Armazenando uma função arrow em uma variável
 const soma2 = (a, b) => {
     return a + b
 }

 console.log(soma2(2, 3))

 //Retorno implícito
 const subtracao = (a, b) => a - b

 console.log(subtracao(2, 3))

