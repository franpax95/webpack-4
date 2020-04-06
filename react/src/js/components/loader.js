import React from 'react';

function Loader(props){
    return(
        <li>
            {props.id}
            {props.name}
        </li>
    )
}

export default Loader;