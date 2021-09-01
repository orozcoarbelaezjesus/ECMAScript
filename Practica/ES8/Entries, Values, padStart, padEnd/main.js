const imprimirMenuEntries = (objeto) => {
    let entries = Object.entries(objeto)
    console.log(entries)
    console.log(entries.length)
}

const imprimirMenuValues = (objeto) => {
    let values = Object.values(objeto)
    console.log(values)
    console.log(values.length)
}

const imprimirMenuConEstilo = ({ desayuno, almuerzo, cena }) => {
    console.log(desayuno.padEnd(10, "------------------------"))
    console.log(almuerzo.padStart(10, "------------------------"))
    console.log(cena.padStart(10, "------------------------"))
}

const menu = {
    desayuno: "Desayuno",
    almuerzo: "Almuerzo",
    cena: "Cena"
}

imprimirMenuEntries(menu)
imprimirMenuValues(menu)
imprimirMenuConEstilo(menu)