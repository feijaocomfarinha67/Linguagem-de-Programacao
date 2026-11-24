function Jogador(nome) {
    this.nome = nome;
    this.pontos = 0;

    this.marcar = function (qtd) {
        this.pontos = this.pontos + qtd;
        console.log(this.nome, "marcou", qtd, "pontos. Total: ", this.pontos);
    };
}

const ana = new Jogador("Ana")
const beto = new Jogador("Beto")

console.table(ana)
console.table(beto)

ana.marcar(1)
beto.marcar(2)