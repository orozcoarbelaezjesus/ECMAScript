let nombre = Juan
let edad = 25

let objeto = {
    nombre,
    edad
}

const saludar = ({nombre}, leConoce) => {
    return new Promise((resolve, reject) => {
        if(leConoce){
            resolve("Hola " + nombre)
        } else {
            reject("No le conozco")
        }
    })
}

saludar(objeto, true)
    .then(response => console.log(response))
    .catch(error => console.log(error.message))