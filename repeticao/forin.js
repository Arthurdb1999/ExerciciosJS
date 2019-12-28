const notas = [6.7, 7.5, 3.5, 4.1, 7.7];

for (let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ingrid',
    idade: '22',
    ocupacao: 'nenhuma',
    peso: '52'    
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
