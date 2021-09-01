// Operador de reposo

const obj = {
    name: "oscar",
    age: 32,
    country: "MX"
}

let {name, ...all} = obj;
console.log(name, all)

// Propagación

const objeto1 = {
    name: "oscar",
    age: 32
}

const objeto2 = {
    ...objeto1,
    country: "MX"
}

console.log(objeto2)

// Promise.finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso finalizado"))

const regexData = /([0-9], {4}) - ([0-9]{2}) - ([0-9]{2})/
const match = regexData.exec("2018-04-20")
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)