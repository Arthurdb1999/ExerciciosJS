var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log("fora = ", numero) 

//Tem escopo global, escopo de função e escopo de bloco (chaves)

//Usando Let em loops
for (let i = 0; i < 10; i++){
    console.log(i)
}

//console.log('i = ', i)

const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

console.log()

funcs[2]()
funcs[8]()