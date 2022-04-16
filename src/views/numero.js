import React from 'react';
import { useParams } from 'react-router-dom';

const Numero = () => {

    const { numero } = useParams();

    return (
        <div>
            <h1>The number is : {numero}</h1>
        </div>
    );
}

export default Numero;
