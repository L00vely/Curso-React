import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto',() =>{
        const testUser = {
            uid: 'ABC123',
            username: 'Lovely'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );
    });

    test('getUsuarioActivo debe de retornar un objeto',() =>{
        const name = 'David';

        const activeUser = getUsuarioActivo( name );

        expect( activeUser ).toEqual( {
            uid: 'ABC231',
            username: name
        } );
    });
});