const multilinea = `Esta es una oración
en multilínea
`
console.log(multilinea)

let estudiantesMujeres = ["Verónica", "Camila"]

let estudiantesHombres = ["José", "Juan"]

let estudiantes = ["Pedro", ...estudiantesMujeres, ...estudiantesHombres]

console.log(estudiantesMujeres)
console.log(estudiantesHombres)
console.log(estudiantes)

let jesus = {
    name: "jesus",
    age: 28
}

const imprimirObjeto = (objeto) => {
    let { name, age } = objeto
    console.log(`${name}
${age}`)
}

imprimirObjeto(jesus)