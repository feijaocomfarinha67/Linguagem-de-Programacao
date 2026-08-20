from moeda import converter_dolar
for x in range (1,4):
    dolar = float(input("digite o valor do produto:"))
    reais= converter_dolar (dolar)
    print("O valor desse produto em reais é: R$", reais)
    