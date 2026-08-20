#Crie um programa que pede para o usuário digitar
#3 notas de um aluno. Em seguida o programa deve
#calcular a média e mostrar na tela!

nota_1 = float(input("Digite a primeira nota: "))
nota_2 = float(input("Digite a segunda nota: "))
nota_3 = float(input("Digite a terceira nota: "))

soma = nota_1 + nota_2 + nota_3

média = soma / 3

print("A média é igual a: ", média)