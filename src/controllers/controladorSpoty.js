// Receta para consumir

// 1. Pa donde vas ome
// URI DE LA API

const URI='https://api.spotify.com/v1/artists/64lEgBZdRGgKlv4VnEhKOn/top-tracks?market=US'

// 2. A hacer que ome?
// METODO

const PETICION={
    method: 'GET',
    headers: {
        Authorization: 'Bearer BQC5gVzqMZWFcaKtY89q4pmmRKpKEDROoy9Ay5pjbJwY8JW8lBE6Ig9OSu3ClTmP1XlzTK1gZJwAhSzc-HzcqI6RbwVKHRleXWgINSkmZIOIsMfes4ToubdjrveXyx__MrsNnY2ozqzlDubs59iL3GG_zkLz36VNksCaHGT-DqLnJNGEJ0TuFxL5b0B-PgQ'
    }
}

// 3. ANDATE PUES OME
// CONSUMA EL API (UTILIZANDO PROMESAS)

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta)
})

.catch(function(respuestaError){
    console.log(respuestaError)
})