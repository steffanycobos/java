
////////////////////////////////////ALUMNOS////////////////////////////////////////
let arraydemateria = [];
const salon = [
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

const arrayEdades= [
    {id:1, nombre:"Pedro Perez",edad:25 },
    {id:2, nombre:"Juan Rodriguez",edad:20 },
    {id:3, nombre:"Luisa Palacios",edad:17 },
    {id:4, nombre:"Cristian Sanchez",edad:18 },
    {id:5, nombre:"Camila Andrade",edad:23 },
    {id:6, nombre:"Ignacio Rojas",edad:45 },
    {id:7, nombre:"Leonardo Mares",edad:25 },
    {id:8, nombre:"Maximiliano Alvarez",edad:38 },
    {id:9, nombre:"Alejandra Velasco",edad:39 },
    {id:10, nombre:"Leandra Vegas",edad:1},
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
/////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////FUNCIONES////////////////////////////////////

//                                              LISTADO                                            ///
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
    let alfabetico = document.createElement("p");
    alfabetico.innerHTML = (((salon.map((el) => el.nombre)).join("<br>")));; 
    document.body.append(alfabetico);
    
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

    let numerico = document.createElement("p");
    numerico.innerHTML = ((salon.map((el) => el.nombre + " " + el.edad)).join("<br>")); 
    document.body.append(numerico);
    
    //localStorage.setItem("bienvenida", "hola")
}
//////////////////////////////////////////////////////////////////////
//                                                         PROMEDIO                                           //
function prom(){
    let prome=0;
    let mate;
    let historia;
    let quimica;
    let fisica;
    let ciencias;
    let alumnoid=document.getElementById("id").value;
    
    if (alumnoid > 20) {
        alert("Ingresa un id válido. ");
    }
    else {

        arraydemateria = [];

        mate = parseFloat(document.getElementById("mate").value)
        fisica = parseFloat(document.getElementById("fisica").value)
        quimica = parseFloat(document.getElementById("quimica").value)
        ciencias = parseFloat(document.getElementById("ciencias").value)
        historia = parseFloat(document.getElementById("historia").value)


        arraydemateria.push(mate, fisica,quimica, ciencias,historia);


        };
        ////////PROMEDIO////////////
        suma = (mate) + (fisica) + (quimica) + (ciencias) + (historia);
        prome = suma / 5;
        console.log(suma, prome)
        
        let escribeprom = document.createElement("div");
        escribeprom.className="formatoEdad"
        const enJson = JSON.stringify(arrayEdades[(alumnoid) - 1])
        escribeprom.innerHTML = enJson;
        document.body.append(escribeprom);
        
        if (prome >= 5) {
            let aprob=document.createElement("div");
            aprob.className="formatoEdad"
          aprob.innerHTML= " Aprobaste con un promedio de: " + prome
         document.body.appendChild(aprob);
        } else {
            let desaprob=document.createElement("div");
            aprob.className="formatoEdad"
          desaprob.innerHTML= " Desaprobaste. Tu promedio fue de: " + prome
         document.body.appendChild(desaprob);
        }
       
    }

/////////////////////////////////////////////////////////////////////////////

////////////////////////////////////         EDADES             //////////////////////////////////////////////////////
function edades(){
    let ed = document.getElementById("edad").value;
    
    const edad = arrayEdades.filter((el) => el.edad == ed);
    
    if (edad.length == 0) {

        let div1= document.getElementById("edad1")
        div1.innerHTML="<h3>No hay nadie con esa edad</h3>"
        //alert("No hay nadie con esa edad");
    }
    else {
let escribeedad= document.getElementById("edad1")
  
   for (const itemedad of edad){
    let div= document.createElement("div")
    div.innerHTML= JSON.stringify(itemedad);
    escribeedad.appendChild(div)}

   }}

//////////////////////////////////////////////////////////////////////////////////////////////////
/*function saludo(){
    alert ("Hola! Abre la consola para visualizar lo que estas requiriendo")
}*/
//////////////////////////////////////////////////////////////////*/
/*

for (const alumno of salon) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<h5> Nombre: ${alumno.nombre}</h5>
                            <p>  id: ${alumno.id}</p>
                            <p> edad: ${alumno.edad}</p>`;
 document.body.appendChild(contenedor);
}
**/
// EVENTOS (Hace que al presionar ENTER en la o)pcion de busqueda por edad, se active la opcion de Buscar sin darle al click con el mouse)//////
var inputEdad = document.getElementById("edad");
inputEdad.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("edad2").click();
  }
});

var inputPromedio= document.getElementById("enterprom");
inputPromedio.addEventListener("keypress", function(event){
    if (event.key ==="Enter"){
        event.preventDefault();
        document.getElementById("promedio2").click();
    }
});


