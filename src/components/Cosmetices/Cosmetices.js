import React from 'react';
import { add } from '../../Utilities/Calculates';

// import add from '../Utilities/Calculates';

const Cosmetices = () => {
    const first = 55;
    const second = 44;
    const total = add(first, second);
    return (
        <div>
            <h1>Welcome to my Cosmetices Shop</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetices;