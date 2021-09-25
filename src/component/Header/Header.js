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
                <h2>Invention New Technologies and Developed By <span className="computer-program">Computer programmer</span> in this world</h2>
                <p>Their are many computer programming languages & also have many computer languages developer</p>
                <h4>Countries total computer programming languages Developers: <span className="programmer-number">300</span></h4>
            </div>
        </div >
    );
};

export default Header;