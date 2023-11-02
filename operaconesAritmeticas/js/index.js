//crear las variables que interactuan con el HTML elementos
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

//escuchar el evento click del boton

btn.addEventListener('click', calcular);

function calcular() {
    let num1 = input1.value;
    let num2 = input2.value;

    if (num1 == '' || num2 == '') {
        alert('Debes ingresar un número');
    } else {
        let resultado = num1 + num2;
        h1.innerHTML = resultado;
    }
}
