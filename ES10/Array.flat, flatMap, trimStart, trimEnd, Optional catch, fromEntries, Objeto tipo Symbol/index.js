// Array.flat

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

// flatMap

let array = [1,2,3,4,5]

console.log(array.flatMap(value => [value, value * 2]))

// 

let hello = "     Hello World       "

console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())

// Optional catch

try {

} catch {
    // error ya disponible
}

// fromEntries

let entries = [["name", "oscar"], ["age", 32]]

console.log(Object.fromEntries(entries))

// Objeto de tipo simbolo

let mySymbol = "My symbol"
let symbol = Symbol(mySymbol)

console.log(symbol.description)