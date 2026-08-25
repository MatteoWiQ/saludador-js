function saludar(nombre, genero, hora) {
    saludo = saludarPorGenero(genero);
    if (hora < 12) {
        saludo = saludo + " " + "buenos días " + nombre;
    } else if (hora < 18) {
        saludo = saludo + " " + "buenas tardes " + nombre;
    } else {
        saludo = saludo + " " + "buenas noches " + nombre;
    }
    return saludo;
}

function saludarPorGenero(genero){
    if (genero == "masculino") {
        return "Hola";
    } else if (genero == "femenino") {
        return "Holiiis";
    }
}

export { saludar };