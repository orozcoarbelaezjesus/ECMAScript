let array = [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]];

console.log(array.flat(2))
console.log(array.flatMap(value => [value + value]))

let miNombreConEspacios = "     Jesús     "

console.log(miNombreConEspacios)
console.log(miNombreConEspacios.trimStart())
console.log(miNombreConEspacios.trimEnd())

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    })
}

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch {
        console.log(error.message)
    }
}

anotherFunction()

let jesus = [["name", "Jesús"], ["age",28]]
console.log(Object.fromEntries(jesus))

let mySymbol = "My symbol"
let symbol = Symbol(mySymbol)

console.log(symbol.description)