from cinema import  calc_bilhete

variavel_total = 0
idade = -1
preco = 0

while idade != 0:

    idade =int(input("Digite a sua idade: "))

    if idade == 0:
        break
    else:
        preco = calc_bilhete(idade) 
        
        
    
print=(variavel_total)    