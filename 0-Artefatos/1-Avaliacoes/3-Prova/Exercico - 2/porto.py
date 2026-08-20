def classificar_carga(peso):
    if peso <10:
        return "Carga leve"
    elif peso >= 10 and peso <= 20:
        return "Carga média"
    else:
        return "Carga pesada"