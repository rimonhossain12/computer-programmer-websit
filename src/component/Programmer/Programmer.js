import React from 'react';
import './Programmer.css';

const Programmer = (props) => {
    // console.log(props.programmer)
    // using destructuring
    const { Rankig, picture, name, Role, country, salary } = props.programmer;
    return (
        <div className="programmer-grid-container">
            <div className="img-style">
                <img src={picture} alt="" />
            </div>
            <div className="developer-details">
                <h5>Ranking: {Rankig}</h5>
                <h4>Name: {name}</h4>
                <p>Role: {Role}</p>
                <p>Salary: {salary}</p>
                <p>Country: {country}</p>
            </div>
            <button className="btn-style">add to cart</button>
        </div>
    );
};

export default Programmer;