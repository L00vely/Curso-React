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
