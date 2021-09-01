function nuevaFuncion(name, age, country){
    var name = name || "Oscar"
    var age = age || "32"
    var country = country || "MX"
    console.log(name, age, country)
}

let hello = "Hola"
let world = "World"
let epicPhrase = hello + " " + world
console.log(epicPhrase)

// ES6

function nuevaFuncion(name = "Oscar", edad = 32, country = "MX"){
    console.log(name, age, country)
}

let hello2 = "Hola"
let world2 = "World"
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase)