const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;

// console.log(saludar("David"));
console.log( saludar2("David") );
console.log( saludar3("Bellako") );
console.log( saludar4() );

const getUser = () =>({
    uid: 'ABC123',
    username: 'Lovely'
});


const user = getUser();
console.log(user);


// Tarea
// 1. Convertir a función de flecha
// 2. Retornar un objeto implícito
// 3. Pruebas

// function getUsuarioActivo ( nombre ){
//     return{
//         uid: 'ABC231',
//         username: nombre
//     }
// };

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC231',
    username: nombre 
});

const usuarioActivo = getUsuarioActivo('David');
console.log(usuarioActivo);