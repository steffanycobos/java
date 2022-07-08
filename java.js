/*CICLO FOR

console.log("hola");
for (let i = 1; i <= 10; i++) {
    console.log("esta es la vuelta " + i + " del ciclo");
}


/*CICLO WHILE

let nom = prompt("Escribe un nombre"); 
while (nom != "ESC" && nom != "") {
    alert("Tu nombre es  " + nom);
    nom = prompt("Ingresar otro nombre");
}
*/



//CONVERTOR DE LONGITUD


do
{

    let num = parseFloat(prompt("Introduzca una longitud en cm:"));
    let opc = parseInt(prompt("  En que unidad  quiere convertir \n1. Metros \n 2. Pies \n 3. cm \n 4. Pulgadas"));


    switch (opc) {
        case 1:
            con = num / 100;
            alert(num +"cm expresado en metros es: " + con);
            break;
        case 2:
            con = num * 0.0328;
            alert(num +"cm expresado en pies es:" + con);
            break;
        case 3:
            alert("Ya ingreso el dato en cm :)");
            break;
        case 4:
            con = num * 0.3937;
            alert(num +"cm expresado en pulgadas es:" + con);
            break;
        default:
            alert("OPCION NO DISPONIBLE.");
            break;

    }
}

    while (opc==1 || opc== 2 || opc==3 || opc==4);
