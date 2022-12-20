import { getHeroeByIDAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas',() => {
    test('getHeroeByIDAsync debe retornar un héroe', () => {
        const id = 1;
        getHeroeByIDAsync( id )
            .then( hero => {
                document();
            })
    });

    
})