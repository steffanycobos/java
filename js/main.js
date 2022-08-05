
////////////////////////////////////ALUMNOS////////////////////////////////////////
let arraydemateria = [];
const salon = [];
salon.push(new Alumnos(1, "Maria Lopez", 25, arraydemateria))
salon.push(new Alumnos(2, "Pedro Perez", 32, arraydemateria))
salon.push(new Alumnos(3, "Juan Rodriguez", 17, arraydemateria))
salon.push(new Alumnos(4, "Luisa Palacios", 19, arraydemateria))
salon.push(new Alumnos(5, "Cristian Sanchez", 26, arraydemateria))
salon.push(new Alumnos(6, "Camila Andrade", 15, arraydemateria))
salon.push(new Alumnos(7, "Ignacio Rojas", 25, arraydemateria))
salon.push(new Alumnos(8, "Leonardo Mares", 16, arraydemateria))
salon.push(new Alumnos(9, "Maximiliano Alvarez", 42, arraydemateria))
salon.push(new Alumnos(10, "Alejandra Velasco", 19, arraydemateria))
salon.push(new Alumnos(11, "Leandra Vegas", 17, arraydemateria))
salon.push(new Alumnos(12, "Pablo Uribe", 35, arraydemateria))
salon.push(new Alumnos(13, "Jenifer Hurtado", 18, arraydemateria))
salon.push(new Alumnos(14, "Matias Cabrera", 41, arraydemateria))
salon.push(new Alumnos(15, "Emilio Castro", 34, arraydemateria))
salon.push(new Alumnos(16, "Mauricio Garcia", 16, arraydemateria))
salon.push(new Alumnos(17, "Antonela Vargas", 33, arraydemateria))
salon.push(new Alumnos(18, "Isabel Morales", 41, arraydemateria))
salon.push(new Alumnos(19, "Bruno Sanz", 16, arraydemateria))
salon.push(new Alumnos(20, "Tomas Enrique", 32, arraydemateria))
/////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////FUNCIONES////////////////////////////////////
function ordenAlfabetico(aula) {
    aula.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        } else if (a.nombre < b.nombre) {
            return -1;
        } else {
            return 0;
        }
    })
    console.log(salon.map((el) => el.nombre));
}

function ordenNumerico(aula) {
    aula.sort((a, b) => {
        if (a.edad > b.edad) {
            return 1;
        } else if (a.edad < b.edad) {
            return -1;
        } else {
            return 0;
        }
    })
    console.log(salon.map((el) => el.nombre + " " + el.edad));
}

function prom(){
    let prome=0;
    let alumnoid=document.getElementById("id").value;
    
    numMaterias = document.getElementById("asig").value;
    if (alumnoid > 20) {
        alert("Ingresa un id válido. ");
    }
    else {
        let notas;
        let asignatura;
        arraydemateria=[];
        for (let i = 1; i <= numMaterias; i++) {
            asignatura = String(prompt("Ingrese asignatura:"));
            notas = parseFloat(prompt("Ingrese su nota en " + asignatura));
            arraydemateria.push({ asignatura, notas });
        }
        console.log(salon[(alumnoid) - 1], arraydemateria);
        ////////PROMEDIO////////////
        suma = arraydemateria.map(item => item.notas).reduce((prev, curr) => prev + curr, 0);
        prome = suma / numMaterias
}
if (prome >= 5) {
    console.log(" Aprobaste con un promedio de: " + prome);
}
else {
    console.log("No aprobaste. Tu promedio fue de: " + prome);
}

}

function edades(){
    let ed = document.getElementById("edad").value;
    const edad = salon.filter((el) => el.edad == ed);

    if (edad.length == 0) {
        alert("No hay nadie con esa edad");
    }
    else {
        console.log("Los alumnos con " + ed + " años son:");
        console.log(edad);
    };
}

function saludo(){
    alert ("Hola! Abre la consola para visualizar lo que estas requiriendo")
}
//////////////////////////////////////////////////////////////////*/


for (const alumno of salon) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<h5> Nombre: ${alumno.nombre}</h5>
                            <p>  id: ${alumno.id}</p>
                            <p> edad: ${alumno.edad}</p>`;
 document.body.appendChild(contenedor);
}

/// EVENTOS (Hace que al presionar ENTER en la opcion de busqueda por edad, se active la opcion de Buscar sin darle al click con el mouse)//////
var inputEdad = document.getElementById("edad");
inputEdad.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("edad2").click();
  }
});


