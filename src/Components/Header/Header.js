import React from 'react';
import logo from '../../logo.png'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        // navigation menu start 



        <header className='bg-gray-900 h-16'>
            <nav className='max-w-7xl flex items-center text-white mx-auto'>

                <a href="#">
                    <img className='logo flex items-center' src={logo} alt="logo" />
                </a>

                <div className='navigation ml-16'>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>

            </nav>
        </header>

    );
};

export default Header;