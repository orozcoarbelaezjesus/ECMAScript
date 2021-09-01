let name = "oscar"
let age = 32

let obj = {
    name: name,
    age: age
}

// ES6

let obj = { 
    name, 
    edad
}

// Arrow functions

const names = [
    {name: "oscar", edad: 32},
    {name: "yesica", edad: 27}
]

let listOfNames2 = names.map(item => console.log(item.name))

// Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!")
        } else {
            reject("Ups!!!")
        }
    }
)}

helloPromise()
    .then(response => response.json)
    .then(data => console.log(data))
    .catch(error => console.log(error))