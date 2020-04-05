import '../css/index.css';
import text from './text';

console.log('Hola mundo desde index y funciona!!');
text();


if(module.hot){
    module.hot.accept('./text.js', function(){
        console.log('He recargado en hot');
        text();
    })
}