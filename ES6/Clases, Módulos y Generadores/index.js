// Clases

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(2, 2));

// Módulos

import { hello } from "./module.js"

hello();

// Generator

function* helloWorld(){
    if(true){
        yield "Hello"
    }
    if(true){
        yield "World"
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);