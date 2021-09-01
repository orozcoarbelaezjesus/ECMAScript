const imprimirValoresDeObjeto = (objeto) => {
    let {...all } = objeto
    console.log(all)
}

const jesus = {
    nombre: "Jesús",
    edad: 28
}

imprimirValoresDeObjeto(jesus)

const isaias = {
    segundo_nombre: "Isaías",
    ...jesus
}

imprimirValoresDeObjeto(isaias)

const URL_LUKE = "https://swapi.dev/api/people/1"

const realizarPeticion = async () =>{
    try {
        const luke = await fetch(URL_LUKE)
        .then(response => response.json())
        .then(luke => console.log(luke.name))
        .finally(() => console.log("La petición se realizó con éxito"))
    } catch (error) {
        console.log(error.message)
    }
}

realizarPeticion()