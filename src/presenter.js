import { saludar } from "./saludador.js";
const nombre = document.querySelector("#saludar-nombre")
const form = document.querySelector("#saludar-form");
const opcionGenero = document.querySelector("#saludar-genero");
const edad = document.querySelector("#saludar-edad");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  //const secondNumber = Number.parseInt(second.value);
  const nombreValue = nombre.value;
  const generoValue = opcionGenero.value;
  const edadValue = Number.parseInt(edad.value);

  div.innerHTML = "<p>" + saludar(nombreValue, generoValue, horaActual, edadValue) +  "</p>";
});
