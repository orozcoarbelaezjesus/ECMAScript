class Persona {
    constructor(name, age, country){
        this.name = name || "Por definir",
        this.age = age || "Por definir",
        this.country = country || "Por definir"
    }

    presentarse(){
        console.log(`${this.name} ${this.age} ${this.country}`)
    }
}

const jesus = new Persona()
jesus.presentarse()