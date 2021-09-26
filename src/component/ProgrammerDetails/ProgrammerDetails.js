import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProgrammerDetails = (props) => {
    // use destucturing for iterate loop
    const { cart } = props;
    // font awesome icon code
    const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // using reduce for counting all programmer salary;
    let totalSalary = 0;
    for (const data of cart) {
        // console.log(typeof data.salary);
        const salaryConvert = parseInt(data.salary);
        totalSalary += salaryConvert;
        // console.log(typeof salaryConvert)
    }

    return (
        <div>
            <h2>programmer Details: {shoppingCartIcon}</h2>
            <h3>Length: {cart.length}</h3>
            <h5>Salary: {totalSalary}</h5>
            {
                cart.map(data => <h5>
                    Name: {data.name} </h5>
                )
            }

        </div>
    );
};

export default ProgrammerDetails;