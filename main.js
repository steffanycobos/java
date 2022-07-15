//VARIABLES
let suma = parseFloat;
let promedio = parseFloat;
suma = 0;

//FUNCIONES 
function saludo() {
    alert("Vamos a conocer tu promedio, a ver si aprobaste o no. Suerte!")
}

function diferencia() {
    let resto = parseFloat(5 - promedio);
    alert("Te hace falta " + resto + " para aprobar")
}


saludo();

for (let i = 1; i <= 10; i++) {
    let notas = parseFloat(prompt("Ingrese su nota " + i))
    suma = suma + notas;
    promedio = suma / 10;
}
if (promedio >= 5) {
    alert(" Aprobaste con un promedio de: " + promedio)
} else {
    alert("No aprobaste, tu promedio fue de: " + promedio)
    diferencia()
}
