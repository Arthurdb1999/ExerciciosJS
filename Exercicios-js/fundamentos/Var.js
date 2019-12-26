{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)  
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

console.log()
teste()
//console.log(local)

console.log()

//Exemplo 2
var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora =', numero)

//Tem escopo global e escopo de função

//Usando Var em loops
for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('i = ', i)

const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()