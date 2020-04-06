import '../css/index.css';
import search from './search';
import render from './render';

const id = prompt('¿¡Quién es ese pokémon!?');

search(id)
    //Si fue bien
    .then((data) => {
        render(data);
    }) 
    //Si fue mal
    .catch(() => {
        console.log('No hubo pokémon...');
    });