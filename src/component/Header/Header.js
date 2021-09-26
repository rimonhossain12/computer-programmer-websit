import React from 'react';
import './Header.css';
import logo from '../../images/header3.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="img-div">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav>
                        <a href="/best">Best Programmer</a>
                        <a href="/languages">Languages</a>
                        <a href="/technology">Teachnology</a>
                        <a href="/science">Science</a>
                        <a href="/tools">Tools</a>
                    </nav>
                </div>
            </div>
            <div className="header-intro">
                <h2>Invetion New Technologies We are hiring best <span className="computer-program">Computer programmer</span> in this world</h2>
                <p>Their are many computer programming languages & also have many computer languages developer</p>
                <h4>Total Computer languages developer and computer programmer are Registration: 10000</h4>
                <h4>Total Budget is :<span className="programmer-number"> 2000 Million</span></h4>
            </div>
        </div >
    );
};

export default Header;