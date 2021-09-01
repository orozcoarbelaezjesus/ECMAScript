class Persona {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad
        this.ordenLlegada
    }

    presentarse(){
        console.log("Hola, mi nombre es " + this.nombre + " y mi número es " + this.ordenLlegada)
    }
}

const jesus = new Persona("Jesús", 28)

const isaias = new Persona("Isaías", 28)

function* lugar(){
    if(true){
        yield 1
    }
    if(true){
        yield 2
    }
    if(true){
        yield 3
    }
    if(true){
        yield 4
    }
    if(true){
        yield 5
    }
}

const generatorLugar = lugar()

jesus.ordenLlegada = generatorLugar.next().value
isaias.ordenLlegada = generatorLugar.next().value

jesus.presentarse()
isaias.presentarse()