import React, { useEffect, useState } from 'react';
import Programmer from '../Programmer/Programmer';
import './Cart.css';
const Cart = () => {
    const [programmer, setProgrammer] = useState([]);
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
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Cart;