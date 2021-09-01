let alumnos = ["José", "Verónica", "Mathias", "Camila"]

let buscarAlumno = "José"

if(alumnos.includes(buscarAlumno)){
    console.log("Se encontró el alumno")
} else {
    console.log("No se encontró el alumno")
}

function potencia(base, exponente){
    return base ** exponente
}

console.log(potencia(3,3))