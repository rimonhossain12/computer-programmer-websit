import React, { useEffect, useState } from 'react';
import Programmer from '../Programmer/Programmer';
import ProgrammerDetails from '../ProgrammerDetails/ProgrammerDetails';
import './Cart.css';
const Cart = () => {
    const [programmer, setProgrammer] = useState([]);
    // use state for passing date in other function or obejct;
    const [cart, setCart] = useState([]);


    // using api for recieved URL data or local machiene data
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProgrammer(data))
    }, [])

    // handle details buttons
    const handleShowDetails = (value) => {
        const newValue = [...cart, value];
        // console.log('button is clicked');
        setCart(newValue);
    }

    return (
        <div className="cart-container">
            <div className="cart-list">
                {
                    // recieved api data and passing data the programmer folder;
                    programmer.map(programerData => <Programmer
                        // using key for react performance
                        key={programerData.Rankig}
                        programmer={programerData}
                        handleShowDetails={handleShowDetails}
                    ></Programmer>)
                }
            </div>
            <div className="cart-button">
                <ProgrammerDetails cart={cart}></ProgrammerDetails>
            </div>
        </div>
    );
};

export default Cart;