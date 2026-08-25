function saludar(nombre, hora) {
    if (hora < 12) {
        return "Buenos días " + nombre;
    } else if (hora < 18) {
        return "Buenas tardes " + nombre;
    } else {
        return "Buenas noches " + nombre;
    }

}
export { saludar };