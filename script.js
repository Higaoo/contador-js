let contadorValor = 0;

const elementoContador = document.getElementById('contador');
const btnAumentar = document.getElementById('btn-aumentar');
const btnZerar = document.getElementById('btn-zerar');

btnAumentar.addEventListener('click', function() {
    contadorValor = contadorValor + 1;
    elementoContador.textContent = contadorValor;
});

btnZerar.addEventListener('click', function() {
    contadorValor = 0;
    elementoContador.textContent = contadorValor;
});