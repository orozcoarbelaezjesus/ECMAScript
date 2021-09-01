// Multilínea

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" + "otra frase epica qu necesitamos"

// ES6
let lorem = `Otra frase epica
    que necesitamos
`

// Desestructuración de elementos

let person = {
    name="Oscar",
    edad= 32,
    country: "MX"
}

console.log(person.name, person.age, person.country)

// ES6

let { name, age, country } = person
console.log(name, age, country)

// Operador de propagación / Spread operator
// ES6

let team1 = ["oscar", "julián", "ricardo"]

let team2 = ["camila", "verónica", "juliana"]

let education = ["david", ...team1, ...team2]

console.log(education)

// Let y Const

{
    var global = "Globar Var"
}

{
    let globalLet = "Global Let"
}

const COUNTRY = "Colombia"