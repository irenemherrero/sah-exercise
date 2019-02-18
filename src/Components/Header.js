import React, { Component } from 'react';

class Header extends Component {

    render() { 
        return (
            <header className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <h1 className="header__logo-title">Spot<span>A</span>Room</h1>
                        <span className="header__logo-subtitle">The best way to find your home</span>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#">The company</a></li>
                            <li><a href="#">How we work</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </nav>
                </div>
            </header> 
         );
    }
}
 
export default Header;