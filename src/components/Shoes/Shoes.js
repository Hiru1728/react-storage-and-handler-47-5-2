import React from 'react';
import { multiply } from '../../Utilities/Calculates';

const Shoes = () => {
    const first = 42;
    const second = 23;
    const result = multiply(first, second);
    return (
        <div>
            <h1>This is my Shoes Compo</h1>
            <p>Result: {result}</p>
        </div>
    );
};

export default Shoes;