const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//Mulher chinesa com menor salário

axios.get(url).then(res => {
    const funcionarios = res.data

    console.log(funcionarios.filter(funcionario => {
        return funcionario.pais == 'China' && funcionario.genero == 'F'
    }).reduce((func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }))
    
   
})

