altura= float(input("digite sua altura"))
peso= float(input("digite seu peso"))

IMC= peso/(altura * altura)

if IMC <= 18.5:
    print("voce esta abaixo do peso")
if IMC >= 18.5<= 24.9:
    print("voce esta com o peso normal")
if IMC >= 25<29.9:
    print("voce esta acima do peso")
if IMC >= 30:
    print("voce esta obeso")