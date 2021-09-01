const URL_LUKE = "https://swapi.dev/api/people/1"

const realizarPeticion = async () =>{
    try {
        const luke = await fetch(URL_LUKE)
        .then(response => response.json())
        .then(luke => console.log(luke.name))
    } catch (error) {
        console.log(error.message)
    }
}

realizarPeticion()