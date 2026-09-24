/**
* Exemplo 1 : Cálculo de Média Escolar e Situação do Aluno
* Execução no Terminal: Node exercicío1_media.js
 */


//Entrada de dados (Variáveis)
const nomeAluno = "Aluno Abacatudo";
const nota1 = 6.7;
const nota2 = 0.0;
const nota3 = 4.2;

//Processamento de Dados 
const media = (nota1 + nota2 + nota3) / 3

//Saída de Dados
console.log("================")
console.log(`RELATÓRIO ESCOLAR DE : ${nomeAluno}`)
console.log("================")
console.log(`Notas: ${nota1} | ${nota2} | ${nota3}`)
console.log(`Média Final: ${media.toFixed(2)}`)

/** Tomada de Decisão ("Hoisting") */

if (media >= 7.0) {
    console.log("Situação: APROVADO")
 } else if (media >=5) {
    console.log("Situação: RECUPERAÇÃO")
} else {
    console.log("Situação: REPROVADO")
}
