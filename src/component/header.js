import React from 'react'
import './header.css';
import Logo from '../Utilities/reactLogo.png'

function Header() {
    return (
        <div>
            <nav className="navigation">
                <img src={Logo} className="brand-name" alt='logo' />
                <div
                    className="navigation-menu">
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
