// import {heroes} from './data/heroes' 
// import {heroes} from './data/heroes';

// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

export const getHeroeByID = (id) => heroes.find(heroe => heroe.id == id);

export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner == owner);

