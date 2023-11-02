//crear las variables que interactuan con el HTML elementos
const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#resultado");

//agregar el evento click al botón

btn.addEventListener("click", calcular);

function calcular() {
  let num1 = Number(input1.value);
  let num2 = Number(input2.value);

  if (num1 == "" || num2 == "") {
    alert("Debes ingresar un número");
  } else {
    let resultado = num1 + num2;
    pResultado.innerHTML = resultado;
  }
}
