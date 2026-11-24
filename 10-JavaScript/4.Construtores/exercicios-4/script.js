function Heroi(nome) {
    this.nome = nome;
    this.vida = 100;


    this.mostrarStatus = function () {
        console.log(`${this.nome} está com ${this.vida}`)
    }

    this.levarDano = function (dano) {
        this.vida = this.vida - dano
        if (this.vida <= 0) {
            this.vida = 0
            console.log(`${this.nome} foi derrotado!`)
        } else {
            this.mostrarStatus()
        }

    }
}

const Artur = new Heroi("Artur")
const John = new Heroi("John")

Artur.levarDano(30);
John.levarDano(50);
Artur.levarDano(80);
John.mostrarStatus();