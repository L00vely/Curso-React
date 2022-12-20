const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 555555,
        lat: 23.12321,
        lng: 14.234178,
    }
};

//console.table( persona );
//console.log( persona )

const persona2 = { ...persona}
persona2.nombre = "Peter";
persona2.apellido = "Parker";

console.log( persona );
console.log( persona2 );