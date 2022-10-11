import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <img src="https://www.banksandlloyd.com/wp-content/uploads/2019/08/quiz-night.png" alt="" />
            <nav className='navBar'>
            <Link to='/'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blogs'>Blogs</Link>
        </nav>
        </div>
        
    );
};

export default Header;