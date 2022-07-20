

//ARRAYS
//NOTAS DE CADA ALUMNO

const asignatura1 = [{
        materia: "matematicas",
        nota: 10
    }, {
        materia: "fisica",
        nota: 8
    }, {
        materia: "quimica",
        nota: 6
    },
    {
        materia: "historia",
        nota: 6
    }
];
const suma1 = asignatura1.map(item => item.nota).reduce((prev, curr) => prev + curr, 0);
promedio1 = suma1 / 4;

if (promedio1 >= 5) {
    console.log("Aprobaste con un promedio de: " + promedio1)
} else {
    console.log("No aprobaste el curso")
}

const asignatura2 = [{
        materia: "matematicas",
        nota: 5
    }, {
        materia: "fisica",
        nota: 3
    }, {
        materia: "quimica",
        nota: 3
    },
    {
        materia: "historia",
        nota: 3
    }
];
const suma2 = asignatura2.map(item => item.nota).reduce((prev, curr) => prev + curr, 0);
promedio2 = suma2 / 4;
if (promedio2 >= 5) {
    console.log("Aprobaste con un promedio de: " + promedio2)
} else {
    console.log("No aprobaste el curso")
}

const asignatura3 = [{
        materia: "matematicas",
        nota: 4
    }, {
        materia: "fisica",
        nota: 4
    }, {
        materia: "quimica",
        nota: 7
    },
    {
        materia: "historia",
        nota: 7
    }
];
const suma3 = asignatura3.map(item => item.nota).reduce((prev, curr) => prev + curr, 0);
promedio3 = suma3 / 4;
if (promedio3 >= 5) {
    console.log("Aprobaste con un promedio de: " + promedio3)
} else {
    console.log("No aprobaste el curso")
}

const asignatura4 = [{
        materia: "matematicas",
        nota: 9
    }, {
        materia: "fisica",
        nota: 8
    }, {
        materia: "quimica",
        nota: 6
    },
    {
        materia: "historia",
        nota: 5
    }
];
const suma4 = asignatura4.map(item => item.nota).reduce((prev, curr) => prev + curr, 0);
promedio4 = suma4 / 4;
if (promedio4 >= 5) {
    console.log("Aprobaste con un promedio de: " + promedio4)
} else {
    console.log("No aprobaste el curso")
}

const asignatura5 = [{
        materia: "matematicas",
        nota: 5
    }, {
        materia: "fisica",
        nota: 7
    }, {
        materia: "quimica",
        nota: 2
    },
    {
        materia: "historia",
        nota: 8
    }
];
const suma5 = asignatura5.map(item => item.nota).reduce((prev, curr) => prev + curr, 0);
promedio5 = suma5 / 4;
if (promedio5 >= 5) {
    console.log("Aprobaste con un promedio de: " + promedio5)
} else {
    console.log("No aprobaste el curso")
}

//FORMACION DE ARRAYS DE OBJETOS
class Alumnos {
    constructor(id, nombre, asignaturas) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.materias = [asignaturas]
    }
}

const salon = [];
salon.push(new Alumnos(1, "Maria Perez", asignatura1))
salon.push(new Alumnos(2, "Pedro Rodriguez", asignatura2))
salon.push(new Alumnos(3, "Laura Lopez", asignatura3))
salon.push(new Alumnos(4, "Mario Palacios", asignatura4));
salon.push(new Alumnos(5, "Carlos Martinez", asignatura5));

let alumnoid = parseInt(prompt("Ingrese un id para buscar al alumno:"));

if (alumnoid > 5) {
    alert("No tenemos registrado a ese alumno")
} else {
    console.log(salon[alumnoid - 1])
}
