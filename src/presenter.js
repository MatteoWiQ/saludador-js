import { saludar } from "./saludador.js";
const nombre = document.querySelector("#saludar-nombre")
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const secondNumber = Number.parseInt(second.value);
  const nombreValue = nombre.value;

  div.innerHTML = "<p>" + saludar(nombreValue) + "</p>";
});
