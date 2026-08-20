Idade=int(input("Digite sua idade"))

if Idade<= 12:
    print("Infantil")

if Idade>=12 and Idade <=17:
    print("Juvenil")

else:
    print("Adulto")
sim_não=(input("Você tem seguro saúde? Digite Sim o Não:"))
if sim_não == "Sim":
    print("Ok")
else:
    print("Atenção: Seguro saúde obrigatório para adultos")
