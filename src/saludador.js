function saludar(nombre, genero, hora, edad) {
    let saludo;
    if (edad == null || (typeof edad === "string" && edad.trim() === "") || Number.isNaN(Number(edad)) || Number(edad) < 0) {
        saludo = "Error, por favor ingrese una edad válida";
    }else{
        saludo = saludarPorGenero(genero);
        if (hora < 12) {
            saludo = saludo + " " + "buenos días " + saludarPorEdad(edad, genero) + " " + nombre;
        } else if (hora < 18) {
            saludo = saludo + " " + "buenas tardes " + saludarPorEdad(edad, genero) + " " + nombre;
        } else {
            saludo = saludo + " " + "buenas noches " + saludarPorEdad(edad, genero) + " " + nombre;
        }

    }
    

    return saludo;
}

function saludarPorGenero(genero){
    if (genero == "masculino") {
        return "Hola,";
    } else if (genero == "femenino") {
        return "Holiiis,";
    }
}

function saludarPorEdad(edad, genero){
    if (edad > 30) {
        if(genero == "masculino"){
            return "Sr.";
        }else{
            return "Sra.";
        }
    } else {
        return "";
    }
}
export { saludar };