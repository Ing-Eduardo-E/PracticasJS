//crear variables
let num1 = document.querySelector("#calculo1");
let num2 = document.querySelector("#calculo2");
let total = document.querySelector("#resultado");
let btnSuma = document.querySelector("#btnSuma");
let btnResta = document.querySelector("#btnResta");
let btnMultiplicacion = document.querySelector("#btnMultiplicar");
let btnDivision = document.querySelector("#btnDividir");
let btnLimpiar = document.querySelector("#btnClean");

//funciones
function limpiar() {
  num1.value = "";
  num2.value = "";
  total.innerText = "";
  num1.focus();
}

//sumar
function sumar() {
  let suma = Number(num1.value) + Number(num2.value);
  total.innerText = "La suma es: " + suma;
}

//restar
function restar() {
  let resta = Number(num1.value) - Number(num2.value);
  total.innerText = "La resta es igual a: " +  resta;
}

//multiplicar
function multiplicar() {
  let multiplicacion = Number(num1.value) * Number(num2.value);
  total.innerText = "La multiplicación es igual a: " + multiplicacion;
}

//dividir
function dividir() {
  let division = Number(num1.value) / Number(num2.value);
  total.innerText = "La división es igual a: " + division;
}

//eventos
btnSuma.addEventListener("click", sumar);
btnResta.addEventListener("click", restar);
btnMultiplicacion.addEventListener("click", multiplicar);
btnDivision.addEventListener("click", dividir);
btnLimpiar.addEventListener("click", limpiar);
