import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {

    const { palabra } = useParams();
    const { color } = useParams();

    return (
        <div>
            <h1 style={{backgroundColor: color}}>The word is : {palabra}</h1>
        </div>
    );
}

export default Color;
