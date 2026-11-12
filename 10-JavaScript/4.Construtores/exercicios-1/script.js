function Pet(nome,raça,idade){
    this.nome = nome
    this.raça = raça
    this.idade = idade
}

const aquiles = new Pet("Aquiles", "cachoro" , 3);
const mitinho = new Pet("Mitinho", "gato" , 2);
const cecilia = new Pet("Cecilia", "peixe" , 1);

console.table(aquiles);
console.table(mitinho);
console.table(cecilia);

