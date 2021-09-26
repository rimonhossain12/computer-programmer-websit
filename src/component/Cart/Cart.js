import React, { useEffect, useState } from 'react';
import Programmer from '../Programmer/Programmer';
import ProgrammerDetails from '../ProgrammerDetails/ProgrammerDetails';
import './Cart.css';
const Cart = () => {
    const [programmer, setProgrammer] = useState([]);
    // use state for passing date in other function or obejct;



    // using api for recieved URL data or local machiene data
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProgrammer(data))
    }, [])

    return (
        <div className="cart-container">
            <div className="cart-list">
                {
                    // recieved api data and passing data the programmer folder;
                    programmer.map(programerData => <Programmer
                        // using key for react performance
                        key={programerData.Rankig}
                        programmer={programerData}
                    ></Programmer>)
                }
            </div>
            <div className="cart-button">
                <ProgrammerDetails></ProgrammerDetails>
            </div>
        </div>
    );
};

export default Cart;