// entries, values

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    diseñador: "Ana"
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const values = Object.values(data)
console.log(values)
console.log(values.length)

// padding

const string = "Hello"
console.log(string.padStart(7, "hi"))
console.log(string.padEnd(12, "------"))
console.log("food".padEnd(12, " ----------"))