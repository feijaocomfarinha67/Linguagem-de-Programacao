temperaturas = (22, 15, 14, 25, 17, 28, 13)
contador = 0


for n in temperaturas:
    if n <= 18:
        print("Temperaturas do dia:", n, "°C")
        contador +=1
print("A temperatura fico abaixo de 18° durante", contador,"dias")