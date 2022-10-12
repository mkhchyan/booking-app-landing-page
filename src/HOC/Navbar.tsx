import React, { FC, useState } from 'react';

import Logo from '../assets/images/logo.svg'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/styles/style.scss'

interface IStateNavbar {
    isOpen: boolean;
}

const Navbar: FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={Logo} alt="Hotel Booking" />
                    </Link>
                    <button type="button" className="nav-btn" >
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;