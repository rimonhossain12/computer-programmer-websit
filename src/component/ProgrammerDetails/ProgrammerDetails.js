import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProgrammerDetails = () => {
    // font awesome icon code
    const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div>
            <h2>programmer Details: {shoppingCartIcon}</h2>
            <p>Total Count: </p>
            <p>Total Salary: </p>
            <p>Name: </p>
        </div>
    );
};

export default ProgrammerDetails;