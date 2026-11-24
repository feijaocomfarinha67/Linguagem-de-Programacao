class Pet{
    constructor(nome, especie, idade){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    apresentar(){
        return `Oi, eu sou o $(this.nome)!\nEspecie: $(this.especie)\nIdade: $(this.idade)`;
    }
}

const orelha = new Pet("Orelha", "cachorro", 3);
const ana = new Pet("Ana", "galinha", 5);
const juan = new Pet("Juan", "gato", 7);

console.log(orelha.apresentar()); // retorna o metódo "Pet.apresentar()" no Pet orelha
console.log(ana.apresentar()); // retorna o metódo "Pet.apresentar()" no Pet ana
console.log(juan.apresentar()); // retorna o metódo "Pet.apresentar()" no Pet juan
console.log(typeof orelha); // retorna o tipo de classe Pet
//const vocemiespera = Pet("Benjamin", "gato", 2)Erro

//resposta: