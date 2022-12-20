export const getUser = () =>({
    uid: 'ABC123',
    username: 'Lovely'
});

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

export const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC231',
    username: nombre 
});

