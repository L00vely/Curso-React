const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre,edad,clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const giveContext = ( { clave, nombre, edad, rango = 'Capitan' }  ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 23.232,
            lng: -12.324
        }
    }  
}

const { nombreClave, anios, latlng:{ lat, lng } } = giveContext( persona );
console.log( nombreClave, anios );
console.log( lat, lng );