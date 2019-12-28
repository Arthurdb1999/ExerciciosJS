function Carro(velocidademaxima = 200, delta = 5) {
    //atributo privade
    let velocidadeatual = 0;

    //metodo publico
    this.acelerar = () => {
        velocidadeatual + delta <= velocidademaxima ? velocidadeatual += delta : velocidadeatual = velocidademaxima;
    }

    //metodo publico
    this.getVelocidadeatual = () => {
        return velocidadeatual; 
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeatual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeatual())