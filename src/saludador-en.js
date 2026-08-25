// funciones con saludos en ingles
function saludarEn(nombre, genero, hora, edad) {
    saludo = saludarPorGenero(genero);
    if (hora < 12) {
        saludo = saludo + " " + "good morning " + saludarPorEdad(edad, genero) + " " + nombre;
    } else if (hora < 18) {
        saludo = saludo + " " + "good afternoon " + saludarPorEdad(edad, genero) + " " + nombre;
    } else {
        saludo = saludo + " " + "good night " + saludarPorEdad(edad, genero) + " " + nombre;
    }
    return saludo;
}

function saludarPorGenero(genero){
    if (genero == "masculino") {
        return "Hello,";
    } else if (genero == "femenino") {
        return "Hii,";
    }
}

function saludarPorEdad(edad, genero){
    if (edad > 30) {
        if(genero == "masculino"){
            return "Mr.";
        }else{
            return "Mrs.";
        }
    } else {
        return "";
    }
}
export { saludarEn };