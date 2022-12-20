import { getHeroeByID, getHeroeByOwner } from '../../base-pruebas/08-imp-exp.js'; 
import heroes from '../../data/heroes';


describe('Pruebas en 08-imp-ext',() => {
    test('getHeroeByID debe retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeByID( id );
        console.log(hero);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroeByID debe retornar undefined sino existe', () => {
        const id = 100;
        const hero = getHeroeByID( id );
        console.log(hero);

        expect( hero ).toBeFalsy();
    });

    test('getHeroeByOwner debe regresar héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroeByOwner( owner );
        console.log(heroes);

        expect( heroes.length).toBe( 3 );

        expect( heroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
        ]);

        expect( heroes ).toEqual( heroes.filter(heroe => heroe.owner === owner));
    });

    test('getHeroeByOwner debe regresar héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroeByOwner( owner );
        console.log(heroes);

        expect( heroes.length).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter(heroe => heroe.owner === owner));
    });
})