import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='nav-title'>
                    <h2>Laptop Ecommerce site.</h2>
                </div>
                <div>
                    <nav>
                        <Link to='home'>Home</Link>
                        <Link to='reviews'>Reviews</Link>
                        <Link to='dashboard'>DashBoard</Link>
                        <Link to='blog'>Blog</Link>
                        <Link to='about'>About</Link>
                    </nav>

                </div>
            </div>
        </div>
    );
};

export default Navbar;