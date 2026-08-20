# Crie um programa que pede para o usuário digitar
#3 notas de um aluno. Em seguida o programa deve
# calcular a média e mostrar na tela o resultado e 
# se o aluno foi aprovado ou reprovado.

nota_1 =int(input("Digite a primeira nota "))
nota_2 =int(input("Digite a segunda nota"))
nota_3 =int(input("Digite a terceira nota"))

media =(nota_1 + nota_2 + nota_3) / 3

if media > 7:
    print("Aluno aprovado!", media)
else:
    print("Aluno reprovado!", media)