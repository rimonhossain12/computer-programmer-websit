import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Programmer.css';

const Programmer = (props) => {
    // console.log(props.programmer)
    // using destructuring
    const { Rankig, picture, name, Role, country, salary } = props.programmer;
    // font awesome icon code
    const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="programmer-grid-container">
            <div className="img-style">
                <img src={picture} alt="" />
            </div>
            <div className="developer-details">
                <h5>Ranking: {Rankig}</h5>
                <h4>Name: {name}</h4>
                <p>Role: {Role}</p>
                <p>Salary: ${salary}</p>
                <p>Country: {country}</p>
            </div>
            <button className="btn-style"> {shoppingCartIcon} add to cart</button>
        </div>
    );
};

export default Programmer;