import { getHeroeByID } from "./08-imp-exp";

// const promesa = new Promise( (resolve,reject) =>  {
//     setTimeout(() => {
//         const heroe = getHeroeByID(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     },2000)
// });

// promesa.then(heroe =>{
//     console.log('Heroe: ', heroe);
// })
// .catch( err => console.warn( err ));

export const getHeroeByIDAsync = (id) =>{
    return new Promise( (resolve,reject) =>  {
        setTimeout(() => {
            const heroe = getHeroeByID(id);
            if( heroe ){
                resolve(heroe);
            } else{
                reject('No se pudo encontrar el héroe');
            }    
        },1000)
    });
}