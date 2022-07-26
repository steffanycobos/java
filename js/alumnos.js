//////CLASES/////
class Alumnos {
    constructor(id, nombre, edad, asignaturas) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.edad= parseInt(edad)
        this.asignaturas = [asignaturas]
    }
}