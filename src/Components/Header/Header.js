import React from 'react';
import logo from '../../logo.png'
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
                    <a href="#">Home</a>
                    <a href="#">Courses</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>

                </div>

            </nav>
        </header>

    );
};

export default Header;