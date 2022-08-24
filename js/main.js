////////////////////////////////////ALUMNOS////////////////////////////////////////
let arraydemateria = [];
let salon = [
    {id:1, nombre:"Pedro Perez",edad:25 ,arraydemateria},
    {id:2, nombre:"Juan Rodriguez",edad:20 ,arraydemateria},
    {id:3, nombre:"Luisa Palacios",edad:17 ,arraydemateria},
    {id:4, nombre:"Cristian Sanchez",edad:18 ,arraydemateria},
    {id:5, nombre:"Camila Andrade",edad:23 ,arraydemateria},
    {id:6, nombre:"Ignacio Rojas",edad:45 ,arraydemateria},
    {id:7, nombre:"Leonardo Mares",edad:25 ,arraydemateria},
    {id:8, nombre:"Maximiliano Alvarez",edad:38 ,arraydemateria},
    {id:9, nombre:"Alejandra Velasco",edad:39 ,arraydemateria},
    {id:10, nombre:"Leandra Vegas",edad:17 ,arraydemateria},
    {id:11, nombre:"Pablo Uribe",edad:24 ,arraydemateria},
    {id:12, nombre:"Jennifer Hurtado",edad:27 ,arraydemateria},
    {id:13, nombre:"Matias Cabrera",edad:32 ,arraydemateria},
    {id:14, nombre:"Emilio Castro",edad:33 ,arraydemateria},
    {id:15, nombre:"Mauricio Garcia",edad:24 ,arraydemateria},
    {id:16, nombre:"Antonela Vargas",edad:41 ,arraydemateria},
    {id:17, nombre:"Isabel Morales",edad:40 ,arraydemateria},
    {id:18, nombre:"Bruno Sanz",edad:37 ,arraydemateria},
    {id:19, nombre:"Tomas Enrique",edad:29 ,arraydemateria},
    {id:20, nombre:"Maria Lopez",edad:30 ,arraydemateria}
    ];
const arrayEdades = [
    {id:1, nombre:"Pedro Perez",edad:25 },
    {id:2, nombre:"Juan Rodriguez",edad:20 },
    {id:3, nombre:"Luisa Palacios",edad:17 },
    {id:4, nombre:"Cristian Sanchez",edad:18 },
    {id:5, nombre:"Camila Andrade",edad:23 },
    {id:6, nombre:"Ignacio Rojas",edad:45 },
    {id:7, nombre:"Leonardo Mares",edad:25 },
    {id:8, nombre:"Maximiliano Alvarez",edad:38 },
    {id:9, nombre:"Alejandra Velasco",edad:39 },
    {id:10, nombre:"Leandra Vegas",edad:19},
    {id:11, nombre:"Pablo Uribe",edad:24 },
    {id:12, nombre:"Jennifer Hurtado",edad:27 },
    {id:13, nombre:"Matias Cabrera",edad:32 },
    {id:14, nombre:"Emilio Castro",edad:33 },
    {id:15, nombre:"Mauricio Garcia",edad:24 },
    {id:16, nombre:"Antonela Vargas",edad:41 },
    {id:17, nombre:"Isabel Morales",edad:40 },
    {id:18, nombre:"Bruno Sanz",edad:37 },
    {id:19, nombre:"Tomas Enrique",edad:29 },
    {id:20, nombre:"Maria Lopez",edad:30}
    ];


////////////////////            FETCH                        //////////////////////
function lista(){
fetch ('data/archivo.json')
.then (response => response.json())
.then ((archivo) => archivo.forEach((alumno) => {
    const li= document.createElement("div")
    li.innerHTML=`<p> Nombre: ${alumno.nombre} <br>
    ID: ${alumno.id}<br>
     Edad: ${alumno.edad}</p>`;
    document.body.appendChild(li)
}))}



////////////////////////////////////                    FUNCIONES                  ////////////////////////////////////

function eliminar(seccion) {
    seccion.onclick = () => {
        seccion.remove()
    }
}
// Cuando le das click al listado, lo puedes desaparecer para que no se acumule y se llene la pag :)


//                        NUEVO REGISTRO DE ALUMNO (Lo guarda en el LocalStorage)                                           //
function nuevo() {
    nombre = String(document.getElementById("nombre").value).toLocaleUpperCase()
    edad = Number(document.getElementById("registroedad").value)
    id = (arrayEdades.length) + 1 //OPTIMIZACION
   
    
    if (nombre==!String || edad==! Number) { swal("Es necesario poner Nombre y Edad","" ,"warning");}
    
  
    else{
    arrayEdades.push({
        id,
        nombre,
        edad
    })
    salon.push({
        id,
        nombre,
        edad,
        arraydemateria
    })
    localStorage.setItem("Salon", JSON.stringify(salon))
    localStorage.setItem("Edad", JSON.stringify(arrayEdades))

    swal("Ya quedaste registrado!", "Tu ID es: "+ id, "success");
}}
let arrayEdadesLS = JSON.parse(localStorage.getItem("Edad"))
let salonLS = JSON.parse(localStorage.getItem("Salon"))


/// Todo lo que hace el programa a partir de aqui lo hace con "salonLS" y "arrayEdadesLS" en caso de que se haya registrado un nuevo alumno





//                                              LISTADO                                            ///
function ordenAlfabetico() {
    if (salonLS== null){
    salon.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        } else if (a.nombre < b.nombre) {
            return -1;
        } else {
            return 0;
        }
    })
    let alfabetico = document.createElement("p");
    alfabetico.className = "eliminar"
    alfabetico.innerHTML = (((salon.map((el) => el.nombre)).join("<br>")));;
    document.body.append(alfabetico);

    eliminar(alfabetico)}
    else {
        salonLS.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        } else if (a.nombre < b.nombre) {
            return -1;
        } else {
            return 0;
        }
    })}
    let alfabetico = document.createElement("p");
    alfabetico.className = "eliminar"
    alfabetico.innerHTML = ((salonLS.map((el) => el.nombre.toLocaleUpperCase())).join("<br>"));
    document.body.append(alfabetico);

    eliminar(alfabetico)}
        
    


function ordenNumerico() {
    if (salonLS===null){
    salon.sort((a, b) => {
        if (a.edad > b.edad) {
            return 1;
        } else if (a.edad < b.edad) {
            return -1;
        } else {
            return 0;
        }
    })

    let numerico = document.createElement("p");
    numerico.innerHTML = ((salon.map((el) => el.nombre + " " + el.edad)).join("<br>"));
    document.body.append(numerico);
    eliminar(numerico)

} else{
    salonLS.sort((a, b) => {
    if (a.edad > b.edad) {
        return 1;
    } else if (a.edad < b.edad) {
        return -1;
    } else {
        return 0;
    }
})
let numerico = document.createElement("p");
    numerico.innerHTML = ((salonLS.map((el) => el.nombre + " " + el.edad)).join("<br>"));
    document.body.append(numerico);
    eliminar(numerico)
}

}

//                                                         PROMEDIO                                           //
function prom() {
    let prome = 0;
    let mate;
    let historia;
    let quimica;
    let fisica;
    let ciencias;
    let alumnoid = document.getElementById("id").value;

    if (alumnoid > salonLS.length){
        alert("ingrese un id valido.")
    }
         
    
else {

        arraydemateria = [];

        mate = Number(document.getElementById("mate").value)
        fisica = Number(document.getElementById("fisica").value)
        quimica = Number(document.getElementById("quimica").value)
        ciencias = Number(document.getElementById("ciencias").value)
        historia = Number(document.getElementById("historia").value)


        arraydemateria.push(mate, fisica, quimica, ciencias, historia);


    };
    ////////  PROMEDIO    ///////
    if (salonLS===null){
    const escribeid = salon[(--alumnoid)] //OPTIMIZACION
    let contenedor1 = document.createElement("div");


    suma = (mate) + (fisica) + (quimica) + (ciencias) + (historia);
    prome = suma / 5;

    if (prome >= 5) {
        let aprob = document.createElement("div");
        aprob.className = "formatoEdad"
        aprob.innerHTML = " Aprobaste con un promedio de: " + prome
        document.body.appendChild(aprob);
        eliminar(aprob)
    } else {
        let desaprob = document.createElement("div");
        desaprob.className = "formatoEdad"
        desaprob.innerHTML = " Desaprobaste. Tu promedio fue de: " + prome
        document.body.appendChild(desaprob);
        eliminar(desaprob)
    }
    contenedor1.innerHTML = `<p> Nombre: ${escribeid.nombre}<br>
                               ID: ${escribeid.id}<br>
                              Edad: ${escribeid.edad}</p>`;
    document.body.appendChild(contenedor1);

    var inputPromedio = document.getElementById("enterprom");
    inputPromedio.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("promedio2").click();
        }
    });
    eliminar(contenedor1)
} else {
    const escribeid = salonLS[(--alumnoid)] //OPTIMIZACION
    let contenedor1 = document.createElement("div");


    suma = (mate) + (fisica) + (quimica) + (ciencias) + (historia);
    prome = suma / 5;

    if (prome >= 5) {
        let aprob = document.createElement("div");
        aprob.className = "formatoEdad"
        aprob.innerHTML = " Aprobaste con un promedio de: " + prome
        document.body.appendChild(aprob);
        eliminar(aprob)
    } else {
        let desaprob = document.createElement("div");
        desaprob.className = "formatoEdad"
        desaprob.innerHTML = " Desaprobaste. Tu promedio fue de: " + prome
        document.body.appendChild(desaprob);
        eliminar(desaprob)
    }
    contenedor1.innerHTML = `<p> Nombre: ${escribeid.nombre}<br>
                               ID: ${escribeid.id}<br>
                              Edad: ${escribeid.edad}</p>`;
    document.body.appendChild(contenedor1);

    var inputPromedio = document.getElementById("enterprom");
    inputPromedio.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("promedio2").click();
        }
    });
    eliminar(contenedor1)
}}


////////////////////////////////////         EDADES             //////////////////////////////////////////////////////
function edades() {
    let ed = document.getElementById("edad").value;
    if (arrayEdadesLS!= null){

    const edad = arrayEdadesLS.filter((el) => el.edad == ed);
    var inputEdad = document.getElementById("edad")
    inputEdad.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("edad2").click();
        }
    });

    if (edad.length == 0) {
         swal("No hay ningún alumno con " + ed +" años.","" ,"info");

    } else {

        for (const alumno of edad) {
            let contenedor = document.createElement("div");

            contenedor.innerHTML = `<p> Nombre: ${alumno.nombre} <br>
                            ID: ${alumno.id}<br>
                             Edad: ${alumno.edad}</p>`;
            document.body.appendChild(contenedor);

            eliminar(contenedor)
        }
    }
}
else {
    const edad = arrayEdades.filter((el) => el.edad == ed);
    var inputEdad = document.getElementById("edad")
    inputEdad.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("edad2").click();
        }
    });

    if (edad.length == 0) {

        let div1 = document.getElementById("edad1")
        div1.innerHTML = "<h3>No hay nadie con esa edad</h3>"

    } else {

        for (const alumno of edad) {
            let contenedor = document.createElement("div");

            contenedor.innerHTML = `<p> Nombre: ${alumno.nombre} <br>
                            ID: ${alumno.id}<br>
                             Edad: ${alumno.edad}</p>`;
            document.body.appendChild(contenedor);

            eliminar(contenedor)
        }
    }

}}
