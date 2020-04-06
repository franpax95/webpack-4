import React, { useState } from 'react';
import data from './data.json';
import Loader from './Loader';

function App() {
    const [loaderList, setLoaderList] = useState([])

    function handleClick(){
        setLoaderList(data.loaders)
    }

    return(
        <div>
            <h1>Mi primera aplicación de React sobre Webpack</h1>
            <ul>
                {
                    loaderList.map((item) => (
                        <Loader 
                            {...item}
                            key={item.id}
                        />
                    ))
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </div>
    )
}

export default App;