#Faltou colocar a variavel "int" antes do "input"
#Não tinha um "=" depois do ">"
#Tinha um erro de identação no "print" da linha 8
Velocidade = int(input("velocidade: "))
limite = 80

if Velocidade >=limite:
    print("Você foi multado!")
else:
    print("Velocidade ok")